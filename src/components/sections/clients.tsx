import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

const clients = [
  {
    name: "TechCorp Industries",
    logo: "/placeholder-client-1.jpg",
    industry: "Technology",
    testimonial: "Their expertise in web development helped us increase our online presence significantly.",
    representative: {
      name: "John Anderson",
      role: "CTO"
    },
    featured: true,
    results: {
      metric: "300%",
      description: "Increase in online sales"
    }
  },
  {
    name: "HealthCare Plus",
    logo: "/placeholder-client-2.jpg",
    industry: "Healthcare",
    testimonial: "The patient management system they built has revolutionized our operations.",
    representative: {
      name: "Sarah Williams",
      role: "Operations Director"
    },
    featured: true,
    results: {
      metric: "50%",
      description: "Reduction in wait times"
    }
  },
  {
    name: "Global Retail Co",
    logo: "/placeholder-client-3.jpg",
    industry: "Retail",
    testimonial: "Their e-commerce solution helped us expand into new markets effortlessly.",
    representative: {
      name: "Michael Chen",
      role: "CEO"
    },
    featured: true,
    results: {
      metric: "200%",
      description: "Revenue growth"
    }
  }
];

interface ClientsProps {
  showAll?: boolean;
}

export function Clients({ showAll = false }: ClientsProps) {
  const displayClients = showAll ? clients : clients.filter(client => client.featured);

  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" gradient className="mb-4">
            Trusted by Industry Leaders
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We work with forward-thinking companies to deliver exceptional results.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayClients.map((client, index) => (
            <Card key={index} className="group overflow-hidden">
              {/* Client Logo & Info */}
              <div className="relative h-40 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative h-20 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Client Details */}
              <div className="p-6">
                <div className="mb-4">
                  <Typography variant="h4" className="mb-1">
                    {client.name}
                  </Typography>
                  <Typography variant="p" className="text-sm text-muted-foreground">
                    {client.industry}
                  </Typography>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-primary/5 rounded-lg text-center">
                  <Typography variant="h3" className="text-2xl font-bold text-primary mb-1">
                    {client.results.metric}
                  </Typography>
                  <Typography variant="p" className="text-sm text-muted-foreground">
                    {client.results.description}
                  </Typography>
                </div>

                {/* Testimonial */}
                <div className="relative mb-6">
                  <FontAwesomeIcon 
                    icon={faQuoteLeft} 
                    className="absolute top-0 left-0 h-6 w-6 text-primary/20"
                  />
                  <Typography variant="p" className="pl-8 italic text-muted-foreground">
                    "{client.testimonial}"
                  </Typography>
                </div>

                {/* Representative */}
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <Typography variant="p" className="font-medium">
                      {client.representative.name}
                    </Typography>
                    <Typography variant="p" className="text-sm text-muted-foreground">
                      {client.representative.role}
                    </Typography>
                  </div>
                  <div className="flex items-center text-sm font-medium text-primary">
                    View Case Study
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="mt-12 text-center">
            <Link
              href="/clients"
              className="inline-flex items-center text-lg font-medium text-primary hover:text-primary-hover transition-colors"
            >
              View All Clients
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

