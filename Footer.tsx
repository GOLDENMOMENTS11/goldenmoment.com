import { Sparkles, Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold">Golden Moment</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating unforgettable experiences and turning your special moments into golden memories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Wedding Planning</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Birthday Parties</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Corporate Events</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Political Events</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Catering Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Event Decor</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>info@goldenmoment.com</p>
                  <p>events@goldenmoment.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Golden Moment Event Organizers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
