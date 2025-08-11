import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCrown } from "@fortawesome/free-solid-svg-icons";

const teamMembers = [
  {
    name: "Benson Garang Kush",
    position: "Chief Executive Officer (CEO)",
    description: "Leading the strategic vision and direction of Kush Environmental Consultant with extensive experience in environmental management and sustainable development.",
    icon: faCrown,
    image: "/team/ceo.jpg"
  },
  {
    name: "Abuoi Atem D'Agoot",
    position: "Managing Director",
    description: "Overseeing day-to-day operations and ensuring the delivery of high-quality environmental consulting services across South Sudan.",
    icon: faUserTie,
    image: "/team/md.jpg"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-accent/30">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" gradient className="mb-4">
            Our Leadership Team
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the experienced professionals leading Kush Environmental Consultant towards sustainable environmental management excellence.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
              <CardHeader className="text-center">
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <FontAwesomeIcon icon={member.icon} className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Typography variant="p" className="text-primary font-semibold">
                  {member.position}
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="p" className="text-muted-foreground text-center">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Typography variant="p" className="text-muted-foreground">
            With over 3 years of combined experience in environmental consulting, our leadership team ensures that every project receives the highest level of professional expertise and attention to detail.
          </Typography>
        </div>
      </Container>
    </section>
  );
}

