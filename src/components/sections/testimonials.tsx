import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    content: "Working with this team was a game-changer for our business. They delivered a beautiful website that exceeded our expectations and helped us achieve our goals.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart Solutions",
    image: "/placeholder-avatar-1.jpg",
    rating: 5,
    project: "E-commerce Platform",
    results: "300% increase in online sales"
  },
  {
    content: "The attention to detail and commitment to quality is outstanding. Our new app has received amazing feedback from our users and significantly improved our customer engagement.",
    author: "Michael Chen",
    role: "Founder",
    company: "InnovateCo",
    image: "/placeholder-avatar-2.jpg",
    rating: 5,
    project: "Mobile App Development",
    results: "200K+ active users"
  },
  {
    content: "Professional, responsive, and incredibly talented. They transformed our online presence and helped us reach new customers we never thought possible.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "/placeholder-avatar-3.jpg",
    rating: 5,
    project: "Digital Marketing Campaign",
    results: "150% increase in leads"
  },
  {
    content: "Their expertise in UI/UX design completely transformed our product. The user feedback has been overwhelmingly positive since the redesign.",
    author: "David Wilson",
    role: "Product Manager",
    company: "DesignPro",
    image: "/placeholder-avatar-4.jpg",
    rating: 5,
    project: "UI/UX Redesign",
    results: "40% increase in user retention"
  },
  {
    content: "The team's technical expertise and project management made our complex integration project smooth and successful.",
    author: "Lisa Thompson",
    role: "CTO",
    company: "TechFlow Systems",
    image: "/placeholder-avatar-5.jpg",
    rating: 5,
    project: "System Integration",
    results: "60% reduction in processing time"
  },
  {
    content: "They didn't just build a website, they built a complete digital solution that has revolutionized how we do business.",
    author: "James Anderson",
    role: "Operations Director",
    company: "GlobalTrade Inc",
    image: "/placeholder-avatar-6.jpg",
    rating: 5,
    project: "Digital Transformation",
    results: "250% ROI in first year"
  }
];

interface TestimonialsProps {
  showAll?: boolean;
}

export function Testimonials({ showAll = false }: TestimonialsProps) {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-24 bg-accent/50">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" gradient className="mb-4">
            Client Testimonials
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </Typography>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <FontAwesomeIcon icon={faQuoteLeft} className="h-8 w-8 text-primary/10" />
              </div>

              <div className="p-8">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="h-5 w-5 text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <Typography variant="p" className="mb-6 text-lg">
                  "{testimonial.content}"
                </Typography>

                {/* Project Results */}
                <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                  <Typography variant="h4" className="text-sm font-semibold mb-2">
                    {testimonial.project}
                  </Typography>
                  <Typography variant="p" className="text-primary font-medium">
                    {testimonial.results}
                  </Typography>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <Typography variant="h4" className="text-base">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="p" className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </Typography>
                    <Typography variant="p" className="text-sm text-primary">
                      {testimonial.company}
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Happy Clients", value: "100+" },
            { label: "Projects Completed", value: "250+" },
            { label: "Years Experience", value: "10+" },
            { label: "Team Members", value: "25+" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Typography variant="h3" gradient className="text-3xl font-bold mb-2">
                {stat.value}
              </Typography>
              <Typography variant="p" className="text-muted-foreground">
                {stat.label}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}