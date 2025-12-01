export function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Expertise in Modern Architecture
            </h2>
            <p className="text-neutral-600 mb-6">
              With decades of combined experience, our team specializes in creating innovative, sustainable, and functional architectural designs that stand the test of time.
            </p>
            <p className="text-neutral-600">
              From contemporary residential homes to large-scale infrastructure projects, we bring vision and precision to every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 shadow-sm">
              <div className="text-4xl mb-2">250+</div>
              <div className="text-neutral-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <div className="text-4xl mb-2">15+</div>
              <div className="text-neutral-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <div className="text-4xl mb-2">50+</div>
              <div className="text-neutral-600">Team Members</div>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <div className="text-4xl mb-2">98%</div>
              <div className="text-neutral-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
