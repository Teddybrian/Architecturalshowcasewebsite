import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Let's Build Something Extraordinary</h2>
            <p className="text-neutral-300 mb-8">
              Ready to start your next architectural project? Get in touch with our team to discuss your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-neutral-400" />
                <div>
                  <div className="text-neutral-400 text-sm">Email</div>
                  <div>contact@archistudio.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-neutral-400" />
                <div>
                  <div className="text-neutral-400 text-sm">Phone</div>
                  <div>+254 700000000</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-neutral-400" />
                <div>
                  <div className="text-neutral-400 text-sm">Office</div>
                  <div>123 Architecture Lane, Design City, Kenya 001</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <select className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:border-white transition-colors text-neutral-400">
                  <option>Project Type</option>
                  <option>Residential</option>
                  <option>Business Park</option>
                  <option>Infrastructure</option>
                  <option>Healthcare</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full bg-neutral-800 border border-neutral-700 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-black px-8 py-3 hover:bg-neutral-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>&copy; 2025 ArchiStudio. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
