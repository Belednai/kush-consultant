import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLeaf,
  faIndustry,
  faWater,
  faFlask,
  faSeedling,
  faChartLine,
  faHardHat,
  faClipboardCheck,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Environmental Impact Management",
    description: "Comprehensive environmental impact assessments, basic assessments, and strategic environmental assessments for sustainable development.",
    icon: faLeaf,
    featured: true,
    stats: {
      experience: "3+ years",
      coverage: "South Sudan",
      timeframe: "Varies"
    }
  },
  {
    title: "Environmental Planning & Compliance",
    description: "Expert environmental planning advice and legal compliance services to ensure your projects meet all regulatory requirements.",
    icon: faClipboardCheck,
    featured: true,
    stats: {
      experience: "3+ years",
      coverage: "All States",
      timeframe: "Ongoing"
    }
  },
  {
    title: "Air Quality Monitoring",
    description: "Professional air quality monitoring and assessment services to maintain environmental standards and public health.",
    icon: faIndustry,
    featured: true,
    stats: {
      experience: "3+ years",
      coverage: "National",
      timeframe: "Continuous"
    }
  },
  {
    title: "Water Quality Testing",
    description: "Comprehensive surface water and underground water testing services for environmental compliance and safety.",
    icon: faWater,
    featured: true,
    stats: {
      experience: "3+ years",
      coverage: "Complete",
      timeframe: "1-2 weeks"
    }
  },
  {
    title: "Soil Testing & Analysis",
    description: "Professional soil testing services to assess soil quality, contamination levels, and rehabilitation needs.",
    icon: faFlask,
    featured: false,
    stats: {
      experience: "3+ years",
      coverage: "All regions",
      timeframe: "1-2 weeks"
    }
  },
  {
    title: "Environmental Rehabilitation",
    description: "Expert rehabilitation services to restore and protect damaged ecosystems and environments.",
    icon: faSeedling,
    featured: false,
    stats: {
      experience: "3+ years",
      coverage: "National",
      timeframe: "Project-based"
    }
  },
  {
    title: "Project Management & Auditing",
    description: "Comprehensive environmental project management, monitoring, and auditing services.",
    icon: faChartLine,
    featured: false,
    stats: {
      experience: "3+ years",
      coverage: "All States",
      timeframe: "Ongoing"
    }
  },
  {
    title: "Health & Safety Training",
    description: "Professional occupational health and safety training for environmental compliance and workplace safety.",
    icon: faHardHat,
    featured: false,
    stats: {
      experience: "3+ years",
      coverage: "National",
      timeframe: "1-4 weeks"
    }
  }
];

interface ServicesProps {
  showAll?: boolean;
}

export function Services({ showAll = false }: ServicesProps) {
  const displayServices = showAll ? services : services.filter(service => service.featured);

  return (
    <section id="services" className="py-24 bg-accent/50">
      <Container>
        <div className="text-center">
          <Typography variant="h2" gradient className="mb-4">
            Our Services
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We provide dynamic, turnkey solutions in Sustainable Environmental Management with a combined expert team-experience of more than 3 years, serving South Sudan and all its states.
          </Typography>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Service Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t">
                  <div className="text-center">
                    <Typography variant="h4" className="text-lg font-bold text-primary">
                      {service.stats.experience}
                    </Typography>
                    <Typography variant="p" className="text-xs text-muted-foreground">
                      Experience
                    </Typography>
                  </div>
                  <div className="text-center">
                    <Typography variant="h4" className="text-lg font-bold text-primary">
                      {service.stats.coverage}
                    </Typography>
                    <Typography variant="p" className="text-xs text-muted-foreground">
                      Coverage
                    </Typography>
                  </div>
                  <div className="text-center">
                    <Typography variant="h4" className="text-lg font-bold text-primary">
                      {service.stats.timeframe}
                    </Typography>
                    <Typography variant="p" className="text-xs text-muted-foreground">
                      Timeframe
                    </Typography>
                  </div>
                </div>

                <div className="flex items-center text-sm font-medium text-primary">
                  Learn more
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center text-lg font-medium text-primary hover:text-primary-hover transition-colors"
            >
              View All Services
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}