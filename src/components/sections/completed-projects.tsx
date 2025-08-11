import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faCheckCircle, faGlobe, faChartLine, faClock } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";

const completedProjects = [
  {
    id: 1,
    title: "Comprehensive Environmental Impact Assessment",
    client: "Major Industrial Development",
    description: "Conducted a thorough environmental impact assessment for a large industrial development project, ensuring compliance with all environmental regulations.",
    results: {
      coverage: "100%",
      compliance: "Full",
      impact: "Minimal",
      timeframe: "3 months"
    },
    image: "/projects/environmental-assessment.jpg",
    category: "Impact Assessment",
    technologies: ["EIA", "ERA", "SEA", "Public Participation"]
  },
  {
    id: 2,
    title: "Water Quality Management Program",
    client: "Regional Water Authority",
    description: "Implemented comprehensive water quality monitoring and management program for surface and groundwater resources.",
    results: {
      coverage: "Regional",
      compliance: "98%",
      quality: "High",
      timeframe: "Ongoing"
    },
    image: "/projects/water-quality.jpg",
    category: "Water Management",
    technologies: ["Water Quality Control", "Discharge Monitoring", "Treatment Works"]
  },
  {
    id: 3,
    title: "Environmental Sustainability Audit",
    client: "Corporate Entity",
    description: "Conducted thorough environmental sustainability audit and provided strategic recommendations for improvement.",
    results: {
      areas: "Multiple",
      improvement: "35%",
      efficiency: "High",
      timeframe: "2 months"
    },
    image: "/projects/sustainability-audit.jpg",
    category: "Sustainability",
    technologies: ["Sustainability Audit", "Green Infrastructure", "Conservation"]
  },
  {
    id: 4,
    title: "Ecological Impact Assessment",
    client: "Development Project",
    description: "Performed comprehensive ecological impact assessments including wetland, freshwater, and visual impact studies.",
    results: {
      scope: "Complete",
      preservation: "90%",
      protection: "High",
      timeframe: "4 months"
    },
    image: "/projects/ecological-assessment.jpg",
    category: "Ecological Services",
    technologies: ["Wetland Assessment", "Visual Impact", "Ecological Management"]
  }
];

export function CompletedProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % completedProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % completedProjects.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + completedProjects.length) % completedProjects.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-primary/10">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" gradient className="mb-4">
            Environmental Impact Success Stories
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover how we've helped organizations achieve sustainable environmental management and compliance through our expert solutions.
          </Typography>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {completedProjects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="mb-6">
                        <Typography variant="h3" className="mb-2">
                          {project.title}
                        </Typography>
                        <Typography variant="p" className="text-primary font-semibold mb-4">
                          {project.client}
                        </Typography>
                        <Typography variant="p" className="text-muted-foreground mb-6">
                          {project.description}
                        </Typography>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 text-primary mb-2" />
                          <Typography variant="h4" className="text-2xl font-bold text-primary">
                            {project.results.coverage}
                          </Typography>
                          <Typography variant="p" className="text-sm text-muted-foreground">
                            Coverage
                          </Typography>
                        </div>
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-primary mb-2" />
                          <Typography variant="h4" className="text-2xl font-bold text-primary">
                            {project.results.compliance || project.results.quality || project.results.preservation}
                          </Typography>
                          <Typography variant="p" className="text-sm text-muted-foreground">
                            Quality/Compliance
                          </Typography>
                        </div>
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <FontAwesomeIcon icon={faChartLine} className="h-6 w-6 text-primary mb-2" />
                          <Typography variant="h4" className="text-2xl font-bold text-primary">
                            {project.results.impact || project.results.improvement || project.results.protection}
                          </Typography>
                          <Typography variant="p" className="text-sm text-muted-foreground">
                            Impact/Improvement
                          </Typography>
                        </div>
                        <div className="text-center p-4 bg-primary/5 rounded-lg">
                          <FontAwesomeIcon icon={faClock} className="h-6 w-6 text-primary mb-2" />
                          <Typography variant="h4" className="text-2xl font-bold text-primary">
                            {project.results.timeframe}
                          </Typography>
                          <Typography variant="p" className="text-sm text-muted-foreground">
                            Project Duration
                          </Typography>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
            title="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
            title="Next slide"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {completedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-lg font-medium text-primary hover:text-primary-dark transition-colors">
            View All Environmental Projects
            <FontAwesomeIcon icon={faChevronRight} className="ml-2 h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
