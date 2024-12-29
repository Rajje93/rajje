import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram, ArrowRight, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0D0B1F] overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-purple-900/10"></div>
        <div className="absolute -left-1/4 bottom-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -right-1/4 bottom-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="reactive-element effect-premium bg-[#1A1A3D]/30 backdrop-blur-sm rounded-2xl p-12 border border-white/5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    Ready to scale your business?
                  </span>
                </h2>
                <p className="text-xl text-white/70">
                  Let's discuss how we can help you achieve predictable growth.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <button className="book-button reactive-element relative group px-8 py-4 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8758FF] to-[#FF58F9]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF58F9] to-[#8758FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-[20deg] group-hover:animate-shine"></div>
                  <span className="relative flex items-center gap-2 text-white font-medium">
                    Book more meetings
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="col-span-2 md:col-span-1 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    myoprocess.
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Helping B2B companies scale through automated lead generation and sales optimization.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {[Linkedin, Twitter, Instagram, Globe].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="reactive-element p-2.5 rounded-full text-white/60 hover:text-white transition-all duration-300
                               hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Company</h4>
                <ul className="space-y-4">
                  {['About', 'Case Studies', 'Services', 'Blog'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-flex">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Contact</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:hello@myoprocess.com" 
                       className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300">
                      <Mail className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                      <span>hello@myoprocess.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+1234567890" 
                       className="group flex items-center gap-2 text-white/60 hover:text-white transition-all duration-300">
                      <Phone className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                      <span>+1 (234) 567-890</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-white/60">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>New York, NY</span>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Legal</h4>
                <ul className="space-y-4">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/40 text-sm">
                  © 2024 myoprocess. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    Privacy
                  </a>
                  <span className="text-white/20">•</span>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;