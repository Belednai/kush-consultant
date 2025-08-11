import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 mix-blend-multiply" />
            <Image
              src="/placeholder-about.jpg"
              alt="Team working together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <Typography variant="h2" gradient className="mb-4">
              About Kush Environmental Consultant
            </Typography>
            
            <Typography variant="p" className="mb-6 text-lg text-muted-foreground">
              Established in 2021, Kush Environmental Consultant Ltd provides dynamic, turnkey solutions in Sustainable Environmental Management. With a combined expert team-experience of more than 3 years, we have established ourselves as a market leader in the Environmental Industry in South Sudan, delivering our reputable services across all states. Our leadership team, led by CEO Benson Garang Kush and Managing Director Abuoi Atem D'Agoot, brings extensive experience in environmental management and sustainable development.
            </Typography>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Expert Environmental Team",
                  description: "Professional environmental scientists and project managers",
                },
                {
                  title: "Holistic Approach",
                  description: "Modern techniques for sustainable environmental management",
                },
                {
                  title: "Strong Relationships",
                  description: "Partnerships with government, business, and community",
                },
                {
                  title: "Peace of Mind",
                  description: "Ensuring environmental compliance and risk management",
                },
              ].map((feature) => (
                <div key={feature.title} className="rounded-lg border bg-card p-4">
                  <Typography variant="h4" className="mb-1">
                    {feature.title}
                  </Typography>
                  <Typography variant="p" className="text-sm text-muted-foreground">
                    {feature.description}
                  </Typography>
                </div>
              ))}
            </div>

            <Button size="lg">
              Learn More About Our Environmental Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
