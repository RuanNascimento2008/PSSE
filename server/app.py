from flask import Flask, render_template, request, redirect, url_for, jsonify
import json
from datetime import datetime, timedelta
import os

app = Flask(__name__)

# Carregar dados dos agendamentos
def load_agendamentos():
    if os.path.exists('agendamentos.json'):
        with open('agendamentos.json', 'r') as f:
            return json.load(f)
    return []

# Salvar agendamentos
def save_agendamentos(agendamentos):
    with open('agendamentos.json', 'w') as f:
        json.dump(agendamentos, f, indent=4)

# Carregar dados de cashback
def load_cashback():
    if os.path.exists('cashback.json'):
        with open('cashback.json', 'r') as f:
            return json.load(f)
    return {}

# Salvar dados de cashback
def save_cashback(cashback_data):
    with open('cashback.json', 'w') as f:
        json.dump(cashback_data, f, indent=4)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/servicos')
def servicos():
    return render_template('servicos.html')

@app.route('/barbeiros')
def barbeiros():
    return render_template('barbeiros.html')

@app.route('/agendamento')
def agendamento():
    return render_template('agendamento.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/api/agendar', methods=['POST'])
def agendar():
    try:
        data = request.get_json()
        
        # Validar dados
        required_fields = ['nome', 'telefone', 'email', 'servico', 'barbeiro', 'data', 'horario']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'O campo {field} é obrigatório'}), 400
        
        # Carregar agendamentos existentes
        agendamentos = load_agendamentos()
        
        # Verificar conflito de horário
        for agendamento in agendamentos:
            if (agendamento['data'] == data['data'] and 
                agendamento['horario'] == data['horario'] and 
                agendamento['barbeiro'] == data['barbeiro']):
                return jsonify({'error': 'Horário indisponível para este barbeiro'}), 400
        
        # Adicionar novo agendamento
        novo_agendamento = {
            'id': len(agendamentos) + 1,
            'nome': data['nome'],
            'telefone': data['telefone'],
            'email': data['email'],
            'servico': data['servico'],
            'barbeiro': data['barbeiro'],
            'data': data['data'],
            'horario': data['horario'],
            'status': 'confirmado',
            'data_criacao': datetime.now().isoformat()
        }
        
        agendamentos.append(novo_agendamento)
        save_agendamentos(agendamentos)
        
        # Calcular e registrar cashback
        precos = {
            'Corte Clássico': 40,
            'Corte Degradê': 50,
            'Corte Social': 60,
            'Barba Completa': 35,
            'Barba Desenhada': 45,
            'Hidratação de Barba': 25,
            'Limpeza de Pele': 50,
            'Massagem Relaxante': 40,
            'Hidratação Capilar': 30,
            'Corte + Barba': 70,
            'Pacote Completo': 90,
            'Pacote Premium': 120
        }
        
        preco_servico = precos.get(data['servico'], 0)
        percentual_cashback = 15  # 15% para primeiro agendamento
        
        # Verificar se é o primeiro agendamento
        cashback_data = load_cashback()
        if data['email'] not in cashback_data:
            cashback_data[data['email']] = {
                'nome': data['nome'],
                'telefone': data['telefone'],
                'saldo': preco_servico * (percentual_cashback / 100),
                'total_ganho': preco_servico * (percentual_cashback / 100),
                'primeiro_agendamento': True
            }
        else:
            # Cliente existente - cashback padrão de 5%
            percentual_cashback = 5
            cashback_data[data['email']]['saldo'] += preco_servico * (percentual_cashback / 100)
            cashback_data[data['email']]['total_ganho'] += preco_servico * (percentual_cashback / 100)
            cashback_data[data['email']]['primeiro_agendamento'] = False
        
        save_cashback(cashback_data)
        
        return jsonify({
            'success': True,
            'message': 'Agendamento realizado com sucesso!',
            'cashback': preco_servico * (percentual_cashback / 100),
            'agendamento_id': novo_agendamento['id']
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/horarios-disponiveis/<barbeiro>/<data>')
def horarios_disponiveis(barbeiro, data):
    try:
        # Horários de funcionamento
        horarios = []
        for hora in range(9, 19):  # Das 9h às 18h
            for minuto in ['00', '30']:  # A cada 30 minutos
                horarios.append(f"{hora:02d}:{minuto}")
        
        # Carregar agendamentos existentes
        agendamentos = load_agendamentos()
        
        # Filtrar agendamentos para o barbeiro e data específicos
        agendamentos_barbeiro = [
            ag for ag in agendamentos 
            if ag['barbeiro'] == barbeiro and ag['data'] == data and ag['status'] == 'confirmado'
        ]
        
        # Horários ocupados
        horarios_ocupados = [ag['horario'] for ag in agendamentos_barbeiro]
        
        # Horários disponíveis
        horarios_disponiveis = [h for h in horarios if h not in horarios_ocupados]
        
        return jsonify({'horarios': horarios_disponiveis})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/check-cashback/<email>')
def check_cashback(email):
    try:
        cashback_data = load_cashback()
        if email in cashback_data:
            return jsonify({
                'saldo': cashback_data[email]['saldo'],
                'total_ganho': cashback_data[email]['total_ganho']
            })
        else:
            return jsonify({'saldo': 0, 'total_ganho': 0})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)