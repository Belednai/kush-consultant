import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with advanced product filtering, cart management, and secure checkout.",
    image: "/placeholder-project-1.jpg",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Healthcare Dashboard",
    description: "An intuitive dashboard for healthcare professionals to manage patient data and appointments.",
    image: "/placeholder-project-2.jpg",
    category: "UI/UX Design",
    technologies: ["React", "Material UI", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Real Estate Platform",
    description: "A modern real estate platform with virtual tours, property management, and agent portals.",
    image: "/placeholder-project-3.jpg",
    category: "Full Stack",
    technologies: ["Vue.js", "Django", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile app for tracking workouts, nutrition, and personal fitness goals with social features.",
    image: "/placeholder-project-4.jpg",
    category: "Mobile Development",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-accent/50">
      <Container>
        <div className="text-center">
          <Typography variant="h2" gradient className="mb-4">
            Featured Projects
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore some of our recent work and see how we've helped businesses achieve their goals.
          </Typography>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-10" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-brand opacity-100 transition-opacity duration-300 group-hover:opacity-90">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    size="lg"
                  >
                    <FontAwesomeIcon icon={faLink} className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <div className="mb-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <Typography variant="p" className="mb-4 text-muted-foreground">
                  {project.description}
                </Typography>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            View All Projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

