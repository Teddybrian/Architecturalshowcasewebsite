import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Building2, Home, Route, Hospital } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residential Architecture",
    description: "Modern homes and residential buildings that blend comfort with contemporary design",
    image: "https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQ1NjU1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Home,
    stats: "120+ Projects"
  },
  {
    id: 2,
    title: "Contemporary Homes",
    description: "Cutting-edge residential designs with sustainable materials and smart technology",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY0NTc5ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Home,
    stats: "85+ Projects"
  },
  {
    id: 3,
    title: "Infrastructure & Roads",
    description: "Advanced road systems and infrastructure projects that enhance urban connectivity",
    image: "https://images.unsplash.com/photo-1703532217273-8d97bb67f8fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb2FkJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY0NTkzNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Route,
    stats: "40+ Projects"
  },
  {
    id: 4,
    title: "Business Parks",
    description: "Innovative commercial spaces designed for productivity and collaboration",
    image: "https://images.unsplash.com/photo-1548086364-d4998e7189ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcmslMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NDk1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Building2,
    stats: "25+ Projects"
  },
  {
    id: 5,
    title: "Healthcare Facilities",
    description: "State-of-the-art hospitals designed with patient care and efficiency in mind",
    image: "https://images.unsplash.com/photo-1662414185445-b9a05e26dba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NDUyNjc2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Hospital,
    stats: "18+ Projects"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our diverse range of architectural projects across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="text-sm text-neutral-500 mb-2">{project.stats}</div>
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
