import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Shield, 
  Leaf, 
  Users, 
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Moon,
  Sun
} from 'lucide-react';

interface EnhancedLayoutProps {
  children?: React.ReactNode;
}

export function EnhancedLayout({ children }: EnhancedLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive environmental analysis and regulatory compliance for sustainable development projects.',
      features: ['Risk Analysis', 'Compliance Reports', 'Stakeholder Engagement']
    },
    {
      icon: Leaf,
      title: 'Sustainability Consulting',
      description: 'Strategic environmental planning and green technology implementation for modern organizations.',
      features: ['Carbon Footprint', 'Green Infrastructure', 'Sustainability Audits']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Facilitating meaningful dialogue between projects and local communities for inclusive development.',
      features: ['Public Consultation', 'Stakeholder Mapping', 'Conflict Resolution']
    },
    {
      icon: Award,
      title: 'Regulatory Compliance',
      description: 'Expert guidance through complex environmental regulations and permitting processes.',
      features: ['Permit Applications', 'Legal Compliance', 'Policy Development']
    }
  ];

  const testimonials = [
    {
      quote: "Kush Environmental transformed our project approval process. Their expertise in South Sudan's regulatory landscape is unmatched.",
      author: "Sarah Johnson",
      role: "Project Director, Infrastructure Development",
      rating: 5,
      company: "Global Infrastructure Ltd"
    },
    {
      quote: "The environmental impact assessment was thorough and helped us identify cost-saving sustainable alternatives.",
      author: "Michael Chen",
      role: "Environmental Manager",
      rating: 5,
      company: "EcoTech Solutions"
    },
    {
      quote: "Professional, responsive, and results-driven. They delivered exactly what we needed within our tight timeline.",
      author: "Dr. Amina Hassan",
      role: "Research Director",
      rating: 5,
      company: "Sustainable Futures Institute"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-transparent'
      }`}>
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <Typography variant="h3" className="text-xl font-bold text-foreground">
                Kush Environmental
              </Typography>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>

              <Button size="sm" className="ml-4">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Moon className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-border/50">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full" size="sm">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <Container className="relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 animate-fadeInUp">
              <Leaf className="w-4 h-4 mr-2" />
              Environmental Excellence in South Sudan
            </div>
            
            <Typography 
              variant="h1" 
              className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fadeInUp"

            >
              Sustainable Solutions for a{' '}
              <span className="text-primary">Greener Future</span>
            </Typography>
            
            <Typography 
              variant="p" 
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"

            >
              Leading environmental consulting firm providing comprehensive impact assessments, 
              sustainability strategies, and regulatory compliance solutions across South Sudan.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="text-base px-8 group">
                Start Your Project
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/50 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Approval Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <Typography variant="h2" className="text-3xl lg:text-5xl font-bold mb-6">
              Comprehensive Environmental Services
            </Typography>
            <Typography variant="p" className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial assessments to long-term sustainability strategies, we provide 
              end-to-end environmental consulting solutions tailored to your needs.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <Typography variant="h3" className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </Typography>
                
                <Typography variant="p" className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </Typography>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" size="sm" className="group/btn w-full justify-between">
                  Learn More
                  <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                About Kush Environmental
              </div>
              
              <Typography variant="h2" className="text-3xl lg:text-4xl font-bold mb-6">
                Leading Environmental Consultancy in South Sudan
              </Typography>
              
              <Typography variant="p" className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With deep local expertise and international standards, we bridge the gap between 
                development needs and environmental protection. Our team combines technical excellence 
                with practical solutions for sustainable growth.
              </Typography>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <Button className="group">
                Our Story
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Leaf className="h-24 w-24 text-primary mx-auto mb-4" />
                    <Typography variant="p" className="text-muted-foreground">
                      Environmental Excellence
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-2xl" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/20 rounded-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <Typography variant="h2" className="text-3xl lg:text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </Typography>
            <Typography variant="p" className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Real feedback from organizations who trust us with their environmental consulting needs.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 lg:p-8 bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-500 fill-green-500" />
                  ))}
                </div>
                
                <Typography variant="p" className="text-primary-foreground/90 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </Typography>
                
                <div className="border-t border-white/20 pt-4">
                  <Typography variant="h4" className="font-bold text-white mb-1">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="p" className="text-sm text-primary-foreground/70 mb-1">
                    {testimonial.role}
                  </Typography>
                  <Typography variant="p" className="text-xs text-primary-foreground/60">
                    {testimonial.company}
                  </Typography>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </div>
              
              <Typography variant="h2" className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Environmental Project?
              </Typography>
              
              <Typography variant="p" className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us today for a free consultation. We'll help you navigate environmental 
                regulations and develop sustainable solutions for your project.
              </Typography>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+211 920 549 662' },
                  { icon: Mail, label: 'Email', value: 'keconsultants23@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Juba, South Sudan' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Typography variant="h4" className="font-medium mb-1">
                        {contact.label}
                      </Typography>
                      <Typography variant="p" className="text-muted-foreground">
                        {contact.value}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-6 lg:p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    aria-label="Select project type"
                  >
                    <option>Environmental Impact Assessment</option>
                    <option>Sustainability Consulting</option>
                    <option>Regulatory Compliance</option>
                    <option>Community Engagement</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button className="w-full group" size="lg">
                  Send Message
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <Container>
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <Typography variant="h3" className="text-xl font-bold">
                    Kush Environmental
                  </Typography>
                </div>
                <Typography variant="p" className="text-muted-foreground mb-6 leading-relaxed">
                  Leading environmental consulting firm providing sustainable solutions 
                  for a greener future in South Sudan.
                </Typography>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Linkedin, Instagram].map((Social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Follow us on ${Social.name || 'social media'}`}
                    >
                      <Social className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <Typography variant="h4" className="font-bold mb-6">Quick Links</Typography>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <Typography variant="h4" className="font-bold mb-6">Services</Typography>
                <ul className="space-y-3">
                  {services.slice(0, 4).map((service) => (
                    <li key={service.title}>
                      <a
                        href="#services"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <Typography variant="h4" className="font-bold mb-6">Contact</Typography>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">+211 920 549 662</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">keconsultants23@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Juba, South Sudan</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <Typography variant="p" className="text-sm text-muted-foreground">
                © 2024 Kush Environmental Consultants. All rights reserved.
              </Typography>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      {children}
    </div>
  );
}
