import Layout from '@/components/Layout';
import { 
  Building2, 
  Heart, 
  Mountain, 
  Users, 
  Star,
  Quote,
  CheckCircle,
  Award,
  TrendingUp,
  Shield,
  ArrowRight,
  Eye,
  Target,
  Zap,
  Clock
} from 'lucide-react';

const Clients = () => {
  const majorClients = [
    {
      icon: Heart,
      name: 'Ministry of Health, South Sudan',
      sector: 'Government',
      description: 'Environmental health assessments and public health facility compliance',
      services: [
        'Environmental health impact assessments',
        'Healthcare facility environmental compliance',
        'Public health infrastructure planning',
        'Environmental risk mitigation for health facilities'
      ],
      results: [
        'Improved environmental compliance across 15+ health facilities',
        '100% regulatory approval rate for new healthcare projects',
        'Enhanced community health outcomes through environmental planning'
      ]
    },
    {
      icon: Mountain,
      name: 'South Sudan Geological Society',
      sector: 'Professional Association',
      description: 'Mining environmental impact assessments and geological conservation',
      services: [
        'Mining environmental impact assessments',
        'Geological site conservation strategies',
        'Resource extraction environmental planning',
        'Professional development training programs'
      ],
      results: [
        'Comprehensive EIA framework for geological projects',
        'Enhanced environmental awareness in mining sector',
        'Improved compliance rates for geological operations'
      ]
    },
    {
      icon: Building2,
      name: 'Lafeme Engineering',
      sector: 'Private Sector',
      description: 'Infrastructure development environmental consulting and compliance',
      services: [
        'Infrastructure project environmental assessments',
        'Construction environmental management',
        'Regulatory compliance consulting',
        'Environmental monitoring and reporting'
      ],
      results: [
        'Streamlined environmental approval processes',
        'Reduced environmental risks in construction projects',
        'Enhanced reputation through sustainable practices'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Kush Environmental's expertise in healthcare facility environmental compliance has been invaluable. Their comprehensive approach ensures our facilities meet all environmental standards while supporting our public health mission.",
      author: "Ministry of Health Representative",
      role: "Environmental Health Division",
      rating: 5
    },
    {
      quote: "The team at Kush Environmental brings deep understanding of South Sudan's geological landscape. Their environmental impact assessments for mining projects are thorough, practical, and regulatory-compliant.",
      author: "Geological Society Member",
      role: "Mining Operations",
      rating: 5
    },
    {
      quote: "Working with Kush Environmental has transformed how we approach infrastructure development. Their environmental management strategies have improved our project outcomes and stakeholder relationships.",
      author: "Engineering Project Manager",
      role: "Infrastructure Development",
      rating: 5
    }
  ];

  const sectors = [
    {
      icon: Heart,
      name: 'Healthcare',
      projects: '15+',
      description: 'Environmental compliance for health facilities and public health infrastructure'
    },
    {
      icon: Mountain,
      name: 'Mining & Geology',
      projects: '10+',
      description: 'Environmental impact assessments for resource extraction and geological projects'
    },
    {
      icon: Building2,
      name: 'Infrastructure',
      projects: '20+',
      description: 'Environmental planning and compliance for construction and development projects'
    },
    {
      icon: Users,
      name: 'NGOs & International',
      projects: '8+',
      description: 'Sustainability consulting and environmental capacity building programs'
    }
  ];

  const achievements = [
    {
      icon: CheckCircle,
      title: '100% Approval Rate',
      description: 'All EIA reports successfully approved by regulatory authorities',
      progress: 100,
      metric: '53/53',
      color: 'text-accent'
    },
    {
      icon: Award,
      title: 'Zero Non-Compliance',
      description: 'Perfect track record of helping clients achieve regulatory compliance',
      progress: 100,
      metric: '0 Issues',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      title: '95% Client Retention',
      description: 'Long-term partnerships built on trust and consistent results',
      progress: 95,
      metric: '38/40',
      color: 'text-secondary'
    },
    {
      icon: Shield,
      title: 'Risk-Free Projects',
      description: 'Proactive risk management prevents environmental incidents',
      progress: 100,
      metric: '2+ Years',
      color: 'text-accent'
    }
  ];

  return (
    <Layout showFooterDivider={true}>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-primary text-primary-foreground overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-element"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/20 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <Eye className="w-4 h-4 mr-2" />
              Trusted Environmental Partners
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white">
              Our <span className="text-white">Valued</span> Clients
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Trusted by government agencies, professional associations, and private sector 
              organizations across South Sudan to deliver environmental excellence and 
              regulatory compliance that drives sustainable development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <Target className="w-4 h-4 mr-2" />
                53+ Successful Projects
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <Users className="w-4 h-4 mr-2" />
                40+ Active Partnerships
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                2+ Years Zero Incidents
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </section>

      {/* Client Achievements */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Proven Excellence
            </div>
            <h2 className="text-5xl font-bold text-gradient mb-6">Our Track Record</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Consistent excellence in delivering environmental solutions that exceed 
              client expectations and regulatory requirements, backed by measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="card-interactive p-8 rounded-2xl text-center group achievement-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="progress-indicator mb-4">
                    <div 
                      className="progress-bar" 
                      style={{ '--progress-width': `${achievement.progress}%` } as React.CSSProperties}
                    ></div>
                  </div>
                  
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                    {achievement.metric}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section divider */}
        <div className="section-divider mt-24"></div>
      </section>

      {/* Major Clients */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-5xl font-bold text-gradient mb-6">Featured Client Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Long-term partnerships with leading organizations demonstrate our commitment 
              to delivering exceptional environmental consulting services that drive measurable impact.
            </p>
          </div>

          <div className="space-y-16">
            {majorClients.map((client, index) => (
              <div 
                key={index} 
                className="card-interactive rounded-2xl overflow-hidden group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
                  {/* Client Info */}
                  <div className="lg:col-span-1">

                    <div className="flex items-start space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center client-logo-hover">
                        <client.icon className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {client.name}
                        </h3>
                        <div className="inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          <span>{client.sector}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">{client.description}</p>
                    
                    {/* Partnership duration indicator */}
                    <div className="mt-6 flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Partnership since 2021</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                      <h4 className="font-bold text-lg text-primary mr-3">Services Provided</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                    </div>
                    <ul className="space-y-3">
                      {client.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start space-x-3 group/item">
                          <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-accent/30 transition-colors">
                            <CheckCircle className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-6">
                      <h4 className="font-bold text-lg text-accent mr-3">Key Results</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent"></div>
                    </div>
                    <ul className="space-y-3">
                      {client.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3 group/item">
                          <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                            <TrendingUp className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* View details CTA */}
                <div className="px-10 pb-6">
                  <button className="inline-flex items-center text-primary hover:text-primary-hover font-medium text-sm transition-colors group/btn">
                    View detailed case study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              <Mountain className="w-4 h-4 mr-2" />
              Industry Expertise
            </div>
            <h2 className="text-5xl font-bold text-gradient mb-6">Sectors We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Diverse expertise across multiple sectors, providing specialized environmental 
              solutions for unique industry challenges with deep local knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="card-interactive p-8 rounded-2xl text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <sector.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {sector.name}
                  </h3>
                  
                  <div className="text-3xl font-bold text-accent mb-4">
                    {sector.projects}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sector.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6">
                    <button className="inline-flex items-center bg-[#24543c] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#1c4230] transition-colors">
                      Explore projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Section divider */}
        <div className="section-divider mt-24"></div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full floating-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full floating-element" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              <Quote className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h2 className="text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Real feedback from organizations who trust us with their environmental 
              consulting needs and sustainability goals, showcasing our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card p-8 rounded-2xl hover-lift group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  {/* Quote icon with background */}
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  
                  <p className="text-primary-foreground/90 mb-8 italic text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg text-white">{testimonial.author}</p>
                        <p className="text-primary-foreground/70 text-sm mt-1">{testimonial.role}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-5 w-5 text-green-500 fill-green-500 transition-transform hover:scale-110" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Verified badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 bg-accent/20 rounded-full text-xs text-white">
                      <CheckCircle className="w-3 h-3 mr-1 text-white" />
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust indicators */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 text-sm text-primary-foreground/70">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span>Verified Reviews</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-green-500 fill-green-500" />
                <span>5.0 Average Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>40+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Partnership Benefits
              </div>
              
              <h2 className="text-5xl font-bold text-gradient mb-6 leading-tight">
                Why Organizations Choose Us
              </h2>
              
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Our clients value our comprehensive approach, local expertise, and 
                unwavering commitment to environmental excellence and regulatory compliance.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Deep Local Expertise",
                    desc: "Understanding of South Sudan's regulatory landscape"
                  },
                  {
                    icon: CheckCircle,
                    title: "Proven Success Rate",
                    desc: "Track record of successful project approvals"
                  },
                  {
                    icon: Users,
                    title: "Collaborative Approach",
                    desc: "Transparent communication and partnership"
                  },
                  {
                    icon: Zap,
                    title: "Innovative Solutions",
                    desc: "Tailored solutions for local conditions"
                  },
                  {
                    icon: Clock,
                    title: "Ongoing Support",
                    desc: "Support throughout entire project lifecycle"
                  }
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <benefit.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="card-interactive p-10 rounded-3xl text-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-gradient">
                    Join Our Client Community
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    Become part of a growing community of organizations committed to 
                    environmental excellence and sustainable development in South Sudan.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">40+</div>
                      <div className="text-xs text-muted-foreground">Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">53+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-xs text-muted-foreground">Success</div>
                    </div>
                  </div>
                  
                  <a href="/contact" className="btn-primary inline-flex items-center group/btn">
                    Start Your Partnership
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full floating-element"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/10 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/10 rounded-full floating-element" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/30">
            <Target className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </div>
          
          <h2 className="text-6xl font-bold mb-8 leading-tight text-white">
            Ready to Join Our <span className="text-white">Success Stories</span>?
          </h2>
          
          <p className="text-xl mb-12 text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how we can help your organization achieve environmental excellence 
            while meeting your business objectives and regulatory requirements. Join the ranks 
            of satisfied clients who trust us for sustainable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="/contact" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/services" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Free Initial Consultation</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>24-48 Hour Response Time</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;