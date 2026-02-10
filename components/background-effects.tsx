export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[40px] bg-primary -top-[250px] -left-[250px] animate-float" />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-[40px] bg-accent -bottom-[200px] -right-[200px] animate-float-reverse" />
      <div className="absolute w-[300px] h-[300px] rounded-full opacity-10 blur-[40px] bg-secondary top-1/2 left-[70%] animate-float-slow" />
    </div>
  )
}
