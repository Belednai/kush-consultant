import Layout from '@/components/Layout';
import { 
  Leaf, 
  Users, 
  DollarSign, 
  Recycle, 
  Sun, 
  TreePine, 
  Award,
  Target,
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Globe,
  ArrowRight
} from 'lucide-react';

const Sustainability = () => {
  const tripleBottomLine = [
    {
      icon: TreePine,
      title: 'Environmental',
      subtitle: 'Planet',
      description: 'Protecting and preserving natural resources for future generations',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      features: [
        'Carbon footprint reduction',
        'Biodiversity conservation',
        'Resource efficiency',
        'Pollution prevention',
        'Ecosystem restoration'
      ]
    },
    {
      icon: Users,
      title: 'Social',
      subtitle: 'People',
      description: 'Creating positive impact for communities and stakeholders',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      features: [
        'Community engagement',
        'Local capacity building',
        'Health & safety standards',
        'Cultural preservation',
        'Inclusive development'
      ]
    },
    {
      icon: DollarSign,
      title: 'Economic',
      subtitle: 'Profit',
      description: 'Generating sustainable economic value and growth',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      features: [
        'Cost optimization',
        'Long-term viability',
        'Innovation investment',
        'Risk management',
        'Value creation'
      ]
    }
  ];

  const sustainabilityServices = [
    {
      icon: Award,
      title: 'Sustainability Audits',
      description: 'Comprehensive assessment of your organization\'s sustainability performance',
      benefits: [
        'Current state assessment',
        'Gap analysis and recommendations',
        'Performance benchmarking',
        'Improvement roadmap development'
      ]
    },
    {
      icon: Sun,
      title: 'Renewable Energy Solutions',
      description: 'Clean energy strategies and implementation support',
      benefits: [
        'Solar and wind energy feasibility',
        'Energy efficiency optimization',
        'Carbon reduction strategies',
        'Green technology integration'
      ]
    },
    {
      icon: TreePine,
      title: 'Ecological Conservation',
      description: 'Protecting and restoring natural ecosystems',
      benefits: [
        'Habitat restoration planning',
        'Species conservation programs',
        'Ecosystem service enhancement',
        'Biodiversity monitoring'
      ]
    },
    {
      icon: Recycle,
      title: 'Responsible Resource Use',
      description: 'Circular economy principles and waste reduction',
      benefits: [
        'Waste minimization strategies',
        'Resource recovery programs',
        'Circular economy implementation',
        'Sustainable supply chains'
      ]
    }
  ];

  const impactMetrics = [
    {
      number: '50+',
      label: 'Projects Completed',
      description: 'Environmental assessments and sustainability initiatives'
    },
    {
      number: '15%',
      label: 'Average Cost Savings',
      description: 'Through efficient resource management'
    },
    {
      number: '30+',
      label: 'Organizations Served',
      description: 'Government, NGOs, and private sector clients'
    },
    {
      number: '100%',
      label: 'Compliance Rate',
      description: 'Successful regulatory approval track record'
    }
  ];

  const frameworks = [
    'UN Sustainable Development Goals (SDGs)',
    'Global Reporting Initiative (GRI)',
    'ISO 14001 Environmental Management',
    'LEED Green Building Standards',
    'Carbon Disclosure Project (CDP)',
    'Triple Bottom Line Accounting'
  ];

  return (
    <Layout showFooterDivider={true}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Sustainability Excellence</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Driving sustainable development through the Triple Bottom Line approach - 
              balancing environmental protection, social responsibility, and economic viability 
              for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Triple Bottom Line */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">The Triple Bottom Line Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our sustainability framework considers environmental, social, and economic factors 
              to create comprehensive solutions that benefit all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tripleBottomLine.map((pillar, index) => (
              <div key={index} className="card-gradient p-8 rounded-xl hover-lift text-center">
                <div className={`w-20 h-20 ${pillar.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <pillar.icon className={`h-10 w-10 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                <p className={`text-lg font-semibold ${pillar.color} mb-4`}>{pillar.subtitle}</p>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                
                <div className="space-y-3">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className={`h-4 w-4 ${pillar.color} flex-shrink-0`} />
                      <span className="text-sm text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sustainability Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">Our Sustainability Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive sustainability solutions designed to help organizations achieve 
              their environmental and social responsibility goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityServices.map((service, index) => (
              <div key={index} className="card-gradient p-8 rounded-xl hover-lift">
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2">
                      <Lightbulb className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Sustainability Impact</h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to creating lasting 
              positive impact across environmental, social, and economic dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover-lift text-center">
                <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-primary-foreground/80 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Standards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">International Standards & Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We align our sustainability practices with globally recognized standards 
              and frameworks to ensure comprehensive and credible solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework, index) => (
              <div key={index} className="card-gradient p-6 rounded-xl hover-lift text-center">
                <Globe className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold">{framework}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-6">Why Sustainability Matters</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sustainable practices are no longer optional – they're essential for long-term 
                business success, regulatory compliance, and social responsibility in today's world.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Risk Mitigation</h3>
                    <p className="text-muted-foreground text-sm">
                      Identify and manage environmental and social risks before they impact operations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Competitive Advantage</h3>
                    <p className="text-muted-foreground text-sm">
                      Differentiate your organization through sustainable practices and transparency
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Regulatory Compliance</h3>
                    <p className="text-muted-foreground text-sm">
                      Stay ahead of evolving environmental and social regulations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Stakeholder Trust</h3>
                    <p className="text-muted-foreground text-sm">
                      Build stronger relationships with communities, investors, and partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-xl">
              <div className="text-center">
                <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Sustainable Future</h3>
                <p className="text-muted-foreground mb-6">
                  Together, we can create a more sustainable future for South Sudan by 
                  implementing practices that protect our environment while supporting 
                  economic growth and social development.
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-center font-medium text-primary">
                    "Today's Impact | Tomorrow's Legacy"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Sustainability Journey</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Ready to implement sustainable practices that drive positive impact while 
            ensuring business success? Let's create a customized sustainability strategy for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary inline-flex items-center">
              Get Sustainability Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="/services" className="btn-primary inline-flex items-center">
              Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;