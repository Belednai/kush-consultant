import Layout from '@/components/Layout';
import { 
  Shield, 
  Droplets, 
  TreePine, 
  Factory, 
  GraduationCap, 
  Recycle,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Microscope,
  TrendingUp,
  Users
} from 'lucide-react';
import servicesImage from '@/assets/services-eia.jpg';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive EIA services for development projects',
      features: [
        'Baseline environmental studies',
        'Impact prediction and evaluation',
        'Mitigation measure development',
        'Environmental monitoring plans',
        'Regulatory compliance assurance'
      ],
      benefits: [
        'Risk reduction and liability protection',
        'Regulatory approval facilitation',
        'Stakeholder confidence building',
        'Long-term cost savings'
      ]
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Sustainable water resource planning and quality monitoring',
      features: [
        'Water resource assessment',
        'Quality monitoring and testing',
        'Watershed management planning',
        'Water conservation strategies',
        'Pollution prevention protocols'
      ],
      benefits: [
        'Sustainable water supply assurance',
        'Cost-effective resource utilization',
        'Ecosystem protection',
        'Community health improvement'
      ]
    },
    {
      icon: TreePine,
      title: 'Ecological Services',
      description: 'Biodiversity assessment and ecosystem conservation',
      features: [
        'Biodiversity surveys and assessments',
        'Habitat restoration planning',
        'Species conservation strategies',
        'Ecosystem service valuation',
        'Protected area management'
      ],
      benefits: [
        'Biodiversity conservation',
        'Ecosystem resilience enhancement',
        'Natural resource protection',
        'Sustainable land use optimization'
      ]
    },
    {
      icon: Factory,
      title: 'Mining Impact Assessment',
      description: 'Specialized environmental evaluation for mining operations',
      features: [
        'Pre-mining environmental baseline',
        'Mine closure planning',
        'Acid mine drainage prevention',
        'Rehabilitation strategies',
        'Community impact assessment'
      ],
      benefits: [
        'Regulatory compliance assurance',
        'Environmental liability reduction',
        'Community relations improvement',
        'Sustainable mining practices'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Training & Capacity Building',
      description: 'Professional development in environmental management',
      features: [
        'Environmental management training',
        'EIA methodology workshops',
        'Regulatory compliance seminars',
        'Sustainability best practices',
        'Custom training programs'
      ],
      benefits: [
        'Enhanced organizational capacity',
        'Improved compliance rates',
        'Reduced environmental risks',
        'Professional skill development'
      ]
    },
    {
      icon: Recycle,
      title: 'Soil & Waste Management',
      description: 'Comprehensive waste management and soil conservation',
      features: [
        'Waste characterization and classification',
        'Soil contamination assessment',
        'Remediation strategy development',
        'Waste minimization planning',
        'Circular economy solutions'
      ],
      benefits: [
        'Environmental contamination prevention',
        'Cost-effective waste solutions',
        'Regulatory compliance',
        'Resource recovery optimization'
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We assess your needs and develop a customized approach'
    },
    {
      number: '02',
      title: 'Detailed Assessment',
      description: 'Comprehensive analysis using latest methodologies and tools'
    },
    {
      number: '03',
      title: 'Solution Development',
      description: 'Tailored strategies that meet your specific requirements'
    },
    {
      number: '04',
      title: 'Implementation Support',
      description: 'Ongoing guidance and monitoring throughout project lifecycle'
    }
  ];

  return (
    <Layout showFooterDivider={true}>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive environmental solutions designed to meet the unique challenges 
              of South Sudan's development landscape while ensuring regulatory compliance 
              and environmental protection.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From environmental impact assessments to comprehensive sustainability strategies, 
              we provide end-to-end solutions for all your environmental consulting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Turnkey Environmental Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Our integrated approach ensures that every aspect of your environmental 
                compliance and sustainability needs are met with the highest professional 
                standards and latest industry best practices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Regulatory compliance assurance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Risk mitigation strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Innovative sustainability solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Ongoing support and monitoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Environmental impact assessment in progress"
                className="rounded-xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="card-gradient p-8 rounded-xl h-full">
                    <service.icon className="h-12 w-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <FileCheck className="h-5 w-5 text-secondary mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 text-accent mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="h-16 w-16 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gradient">{service.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring quality, compliance, and client satisfaction 
              throughout every project phase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how our comprehensive environmental services can support 
            your project's success while ensuring regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-flex items-center">
              Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/about" className="btn-primary inline-flex items-center">
              Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;