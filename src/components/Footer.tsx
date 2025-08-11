import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import kushLogo from '@/assets/Kush.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={kushLogo} alt="Kush Environmental Consultant" className="h-8 w-auto" />
              <div>
                <h3 className="text-xl font-bold">Kush Environmental Consultant Ltd</h3>
                <p className="text-secondary text-sm">Today's Impact | Tomorrow's Legacy</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Leading environmental consulting firm in South Sudan, providing comprehensive 
              sustainability solutions since 2021. We help organizations achieve their 
              environmental goals while ensuring regulatory compliance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>keconsultants23@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Juba, South Sudan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Environmental Impact Assessment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Water Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Ecological Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Training & Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Kush Environmental Consultant Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;