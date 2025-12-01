import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642951774900-d35ae7a54fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzY0NTkzNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="text-white tracking-wider">ARCHISTUDIO</div>
        <div className="hidden md:flex gap-8 text-white text-sm">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-88px)] px-8 text-center">
        <h1 className="text-white text-5xl md:text-7xl mb-6 max-w-4xl">
          Designing the Future of Modern Architecture
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
          Innovative architectural solutions for residential, commercial, infrastructure, and healthcare projects
        </p>
        <a 
          href="#portfolio" 
          className="bg-white text-black px-8 py-3 hover:bg-white/90 transition-colors"
        >
          View Our Work
        </a>
      </div>
    </div>
  );
}
