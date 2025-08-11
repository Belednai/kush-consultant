import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      
      <Container className="relative">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-24 sm:pb-40">
          <div className="text-center">
            <Typography variant="h1" gradient className="mb-8">
              Transform Your Vision Into Reality
            </Typography>
            
            <Typography variant="p" className="mx-auto max-w-2xl text-xl text-muted-foreground">
              We create beautiful, responsive websites that help businesses grow and succeed in the digital world.
            </Typography>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-12">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Completed" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <Typography variant="h2" gradient className="mb-2">
                  {stat.value}
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                  {stat.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}


