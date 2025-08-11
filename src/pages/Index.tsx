import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Leaf, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Droplets,
  TreePine,
  Factory,
  GraduationCap,
  Recycle,
  Mountain,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  Calendar,
  Target,
  Eye,
  Heart,
  Star,
  BookOpen,
  Building2,
  Briefcase
} from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-bg.jpg';
import teamImage from '@/assets/story.jpg';
import eiaImage from '@/assets/services-eia.jpg';
import faoImage from '@/assets/FAO.jpg';
import waterImage from '@/assets/water.jpg';
import assessmentImage from '@/assets/Assessment.jpg';

const Index = () => {
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [expandedServices, setExpandedServices] = useState(false);
  // Home page: Recent Projects no longer expands here; navigation goes to Blog page anchor
  const [expandedSustainability, setExpandedSustainability] = useState(false);

  const services = [
    {
      icon: Shield,
      title: 'Environmental Impact Management',
      description: 'Comprehensive EIA services and environmental compliance monitoring',
      details: 'Our Environmental Impact Assessment services provide thorough analysis of potential environmental effects from proposed projects. We conduct baseline studies, impact predictions, and develop comprehensive mitigation measures to ensure regulatory compliance and environmental protection.'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Sustainable water resource planning and quality monitoring',
      details: 'We offer complete water management solutions including water quality assessment, groundwater studies, surface water monitoring, and sustainable water resource planning for communities and industries.'
    },
    {
      icon: TreePine,
      title: 'Ecological Services',
      description: 'Biodiversity assessment and ecosystem conservation strategies',
      details: 'Our ecological expertise includes biodiversity surveys, habitat assessments, species protection planning, and ecosystem restoration strategies to maintain ecological balance while supporting development goals.'
    },
    {
      icon: Factory,
      title: 'Mining Impact Assessment',
      description: 'Environmental impact evaluation for mining operations',
      details: 'Specialized environmental assessments for mining activities including pre-mining baseline studies, operational monitoring, closure planning, and post-mining land rehabilitation strategies.'
    },
    {
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      description: 'Professional development in environmental management',
      details: 'We provide comprehensive training programs in environmental management, regulatory compliance, and sustainable development practices for government agencies, NGOs, and private sector organizations.'
    },
    {
      icon: Recycle,
      title: 'Soil & Waste Management',
      description: 'Sustainable waste management and soil conservation solutions',
      details: 'Complete soil and waste management services including soil quality assessment, contamination studies, waste management planning, and soil conservation strategies for agricultural and industrial applications.'
    }
  ];

  const completedProjects = [
    {
      title: "Environmental Impact Assessment for Juba Teaching Hospital",
      client: "Ministry of Health, South Sudan",
      year: "2023",
      description: "Comprehensive EIA for hospital expansion project",
      category: "Healthcare Infrastructure",
      image: eiaImage
    },
    {
      title: "Water Quality Assessment - Upper Nile Region",
      client: "International Development Agency",
      year: "2023",
      description: "Regional water quality monitoring and assessment program",
      category: "Water Management",
      image: eiaImage
    },
    {
      title: "Biodiversity Survey - Boma National Park",
      client: "Wildlife Conservation Society",
      year: "2022",
      description: "Comprehensive biodiversity assessment and conservation planning",
      category: "Ecological Services",
      image: eiaImage
    },
    {
      title: "Mining Impact Assessment - Central Equatoria",
      client: "South Sudan Geological Society",
      year: "2022",
      description: "Environmental impact evaluation for proposed mining operations",
      category: "Mining Assessment",
      image: eiaImage
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      position: "Environmental Director, Ministry of Health",
      quote: "Kush Environmental's expertise in healthcare facility assessments has been invaluable to our infrastructure development projects.",
      rating: 5
    },
    {
      name: "Michael Deng",
      position: "Project Manager, Lafeme Engineering",
      quote: "Their thorough approach to environmental compliance has helped us navigate complex regulatory requirements successfully.",
      rating: 5
    },
    {
      name: "Prof. James Mawut",
      position: "South Sudan Geological Society",
      quote: "The mining impact assessments provided by Kush Environmental set the standard for environmental due diligence in our sector.",
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: "Construction of Modern Urban Market in Juba South Sudan by FAO and JCC",
      excerpt: "Exploring strategies for environmental recovery and sustainable development in South Sudan's post-conflict landscape.",
      date: "2024-01-15",
      category: "Sustainability",
      image: faoImage
    },
    {
      title: "Design and Project Construction Supervision of an urban water distribution system extension to residents in Lologo and Gudele, Juba South Sudan",
      excerpt: "Addressing the critical water management challenges facing communities and industries across South Sudan.",
      date: "2024-01-10",
      category: "Water Management",
      image: waterImage
    },
    {
      title: "Enviromrntal and Social Impact Assessment for schools rehabilitation and construction in Jonglei and Upper Nile South Sudan",
      excerpt: "Protecting unique ecosystems while supporting economic development in the greater Nile Basin region.",
      date: "2024-01-05",
      category: "Conservation",
      image: assessmentImage
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Risk Mitigation',
      description: 'Proactive identification and management of environmental risks'
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description: 'Ensuring adherence to local and international environmental standards'
    },
    {
      icon: Leaf,
      title: 'Innovation',
      description: 'Cutting-edge solutions for sustainable development challenges'
    }
  ];

  const clients = [
    'Ministry of Health, South Sudan',
    'South Sudan Geological Society',
    'Lafeme Engineering',
    'Wildlife Conservation Society',
    'International Development Agency',
    'UN Environment Programme'
  ];

  return (
    <Layout showFooterDivider={true}>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
              Kush Environmental
            </h1>
            <p className="text-xl md:text-2xl text-white/90">Consultant Ltd</p>
          </div>
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-white">
            Today's Impact | Tomorrow's Legacy
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90">
            Leading South Sudan's environmental transformation through comprehensive sustainability 
            solutions, regulatory compliance, and innovative environmental management strategies.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-primary inline-flex items-center">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Born from a passion for environmental stewardship and a commitment to South Sudan's sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Company Story Text */}
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    Founded in 2021
                  </h3>
                  <p className="text-muted-foreground">
                    Kush Environmental Consultant Ltd was established with a clear vision: to provide world-class 
                    environmental consulting services that support South Sudan's development while protecting its 
                    rich natural heritage. Our founders recognized the critical need for specialized environmental 
                    expertise in a nation rebuilding and growing.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Journey
                  </h3>
                  <p className="text-muted-foreground">
                    From our headquarters in Juba, we've grown from a small team of passionate environmental 
                    professionals to become one of South Sudan's most trusted environmental consulting firms. 
                    We've successfully completed projects across healthcare, mining, water management, and 
                    ecological conservation sectors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Heart className="h-6 w-6 text-primary" />
                    Our Commitment
                  </h3>
                  <p className="text-muted-foreground">
                    Every project we undertake reflects our deep commitment to environmental protection and 
                    community empowerment. We believe that sustainable development is not just about compliance—it's 
                    about creating lasting positive impact for future generations.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Image and Info */}
            <div>
              <div className="relative our-story--tinted">
                <img 
                  src={teamImage} 
                  alt="Kush Environmental Team" 
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Leadership team section removed on home page */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Who We Are</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since 2021, Kush Environmental Consultant Ltd has been at the forefront of 
              environmental consulting in South Sudan, delivering turnkey solutions that 
              bridge sustainability with development.
            </p>
            
            {/* Expandable About Content */}
            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => setExpandedAbout(!expandedAbout)}
                className="mx-auto flex items-center gap-2"
              >
                {expandedAbout ? 'Show Less' : 'Learn More About Us'}
                {expandedAbout ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              
              {expandedAbout && (
                <div className="mt-8 max-w-4xl mx-auto text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-primary" />
                          Our Mission
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          To provide comprehensive environmental consulting services that enable sustainable 
                          development while protecting South Sudan's natural heritage for future generations.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Eye className="h-5 w-5 text-primary" />
                          Our Vision
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          To be the leading environmental consulting firm in South Sudan, recognized for 
                          excellence in sustainable development solutions and environmental stewardship.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-primary" />
                          Our Values
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="text-muted-foreground space-y-2">
                          <li>• Environmental stewardship and protection</li>
                          <li>• Scientific integrity and excellence</li>
                          <li>• Community engagement and empowerment</li>
                          <li>• Sustainable development practices</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-5 w-5 text-primary" />
                          Our Team
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Our multidisciplinary team combines local knowledge with international expertise, 
                          ensuring culturally appropriate and technically sound environmental solutions.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-gradient p-8 rounded-xl hover-lift text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive environmental solutions tailored to meet the unique challenges 
              of South Sudan's development landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-gradient p-6 rounded-xl hover-lift">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-primary hover:text-primary-hover font-medium inline-flex items-center transition-colors"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects section intentionally removed on Home page */}

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted partnerships built on expertise, reliability, and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-green-500 fill-green-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Commitment to Sustainability</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the way in sustainable development practices that protect South Sudan's environment while fostering economic growth.
            </p>
            
            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => setExpandedSustainability(!expandedSustainability)}
                className="mx-auto flex items-center gap-2"
              >
                {expandedSustainability ? 'Show Less' : 'Learn About Our Sustainability Approach'}
                {expandedSustainability ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          
          {expandedSustainability && (
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      SDG Alignment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our work directly contributes to multiple UN Sustainable Development Goals:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• SDG 6: Clean Water and Sanitation</li>
                      <li>• SDG 13: Climate Action</li>
                      <li>• SDG 14: Life Below Water</li>
                      <li>• SDG 15: Life on Land</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Our Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We integrate traditional knowledge with modern environmental science to develop 
                      culturally appropriate and technically sound sustainability solutions that address 
                      South Sudan's unique environmental challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environmental Protection</h3>
              <p className="text-muted-foreground">Safeguarding ecosystems and biodiversity through science-based conservation strategies.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-muted-foreground">Empowering local communities through participatory environmental management.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Mountain className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
              <p className="text-muted-foreground">Balancing economic growth with environmental stewardship for future generations.</p>
            </div>
          </div>
          {/* Place the See More button directly under the three sustainability pillars */}
          <div className="text-center mb-12">
            <Link to="/sustainability" className="btn-primary">
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Latest Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with our latest research, insights, and perspectives on environmental challenges and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Category badge removed as requested */}
                  {/* Date overlay removed as requested */}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    <Link to="/projects" className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                {/* Non-bold description under picture removed as requested */}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted By</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're proud to work with leading organizations across South Sudan to 
              advance environmental sustainability and regulatory compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover-lift text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{client}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/clients" className="btn-primary">
              View Client Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your environmental consulting needs? We're here to help you navigate 
              complex environmental challenges with expert guidance and proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+211920549662" aria-label="Call us at +211 920 549 662" className="text-muted-foreground hover:text-primary transition-colors">+211 920 549 662</a>
                <p className="text-sm text-muted-foreground mt-2">Available Mon-Fri, 8AM-5PM</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@kushenvironmental.com</p>
                <p className="text-sm text-muted-foreground mt-2">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Juba, South Sudan</p>
                <p className="text-sm text-muted-foreground mt-2">Schedule an appointment</p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA buttons: stack with spacing on small screens, inline on md+ */}
          <div className="mt-12 text-center flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Environmental Impact?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's work together to create sustainable solutions that benefit both your 
            organization and South Sudan's environmental future.
          </p>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Consultation
            </Link>
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
