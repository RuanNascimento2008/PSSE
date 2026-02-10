// scripts.js - Funcionalidades JavaScript para a Barbearia Zé da Régua

// Configuração das partículas
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas se o elemento existir
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#0a6fe2" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#0a6fe2",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                }
            },
            retina_detect: true
        });
    }

    // Criar mechas de cabelo
    const hairStrands = document.querySelector('.hair-strands');
    if (hairStrands) {
        for (let i = 0; i < 20; i++) {
            const strand = document.createElement('div');
            strand.classList.add('strand');
            strand.style.left = `${Math.random() * 100}%`;
            strand.style.animationDelay = `${Math.random() * 15}s`;
            strand.style.transform = `rotate(${Math.random() * 360}deg)`;
            hairStrands.appendChild(strand);
        }
    }

    // Criar tesouras voadoras
    const scissorContainer = document.querySelector('.scissor-animations');
    if (scissorContainer) {
        for (let i = 0; i < 5; i++) {
            const scissor = document.createElement('div');
            scissor.classList.add('scissor-animation');
            scissor.innerHTML = '✂️';
            scissor.style.animationDelay = `${Math.random() * 20}s`;
            scissor.style.left = `${Math.random() * 100}%`;
            scissor.style.top = `${Math.random() * 100}%`;
            scissorContainer.appendChild(scissor);
        }
    }

    // Contador regressivo
    function updateCountdown() {
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');
        
        if (hours && minutes && seconds) {
            let totalSeconds = parseInt(hours.textContent) * 3600 + 
                             parseInt(minutes.textContent) * 60 + 
                             parseInt(seconds.textContent);
            
            if (totalSeconds <= 0) {
                // Reset para 24 horas se o contador chegar a zero
                hours.textContent = '24';
                minutes.textContent = '00';
                seconds.textContent = '00';
                return;
            }
            
            totalSeconds--;
            
            const hrs = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;
            
            hours.textContent = hrs.toString().padStart(2, '0');
            minutes.textContent = mins.toString().padStart(2, '0');
            seconds.textContent = secs.toString().padStart(2, '0');
        }
    }
    
    if (document.getElementById('hours')) {
        setInterval(updateCountdown, 1000);
    }
    
    // Animação de entrada dos elementos
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .plan-card, .service-card, .barber-card').forEach(card => {
        observer.observe(card);
    });

    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Sistema de agendamento
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Agendamento realizado com sucesso! Em breve você receberá uma confirmação por e-mail.');
            bookingForm.reset();
        });
    }

    // Sistema de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }

    // FAQ Interativo
    const faqQuestions = document.querySelectorAll('.faq-question-premium');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });

    // Seleção de serviços
    const serviceOptions = document.querySelectorAll('.service-option-card');
    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Seleção de barbeiros
    const barberOptions = document.querySelectorAll('.barber-option-card');
    barberOptions.forEach(option => {
        option.addEventListener('click', function() {
            barberOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Navegação entre passos do agendamento
    const formSteps = document.querySelectorAll('.form-step');
    const steps = document.querySelectorAll('.step');
    
    if (formSteps.length > 0 && steps.length > 0) {
        let currentStep = 0;
        
        function showStep(stepIndex) {
            formSteps.forEach(step => step.classList.remove('active'));
            formSteps[stepIndex].classList.add('active');
            
            steps.forEach((step, index) => {
                if (index < stepIndex) {
                    step.classList.add('completed');
                    step.classList.remove('active');
                } else if (index === stepIndex) {
                    step.classList.add('active');
                    step.classList.remove('completed');
                } else {
                    step.classList.remove('active', 'completed');
                }
            });
            
            currentStep = stepIndex;
        }
        
        const nextButtons = document.querySelectorAll('.btn-next');
        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (currentStep < formSteps.length - 1) {
                    showStep(currentStep + 1);
                }
            });
        });
        
        const prevButtons = document.querySelectorAll('.btn-prev');
        prevButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (currentStep > 0) {
                    showStep(currentStep - 1);
                }
            });
        });
        
        // Inicializar com o primeiro passo
        showStep(0);
    }
});