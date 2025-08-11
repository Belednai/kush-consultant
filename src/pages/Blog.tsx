// src/pages/Blog.tsx
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen } from 'lucide-react';
// Project images for the More Projects section
import jubathImage from '@/assets/jubath.jpg';
import water2Image from '@/assets/water2.jpg';
import miningImage from '@/assets/mining.jpg';
import biodiversityImage from '@/assets/biodiversity.jpg';
import faoImage from '@/assets/FAO.jpg';
import waterImage from '@/assets/water.jpg';
import assessmentImage from '@/assets/Assessment.jpg';
import { Link } from 'react-router-dom';

function Blog() {
  // Replicate the "Latest Insights" entries shown on the home page without changing it
  const blogPosts = [
    {
      title: 'Construction of Modern Urban Market in Juba South Sudan by FAO and JCC',
      excerpt:
        "Exploring strategies for environmental recovery and sustainable development in South Sudan's post-conflict landscape.",
      date: '2024-01-15',
      category: 'Sustainability',
      image: faoImage
    },
    {
      title: 'Design and Project Construction Supervision of an urban water distribution system extension to residents in Lologo and Gudele, Juba South Sudan',
      excerpt:
        'Addressing the critical water management challenges facing communities and industries across South Sudan.',
      date: '2024-01-10',
      category: 'Water Management',
      image: waterImage
    },
    {
      title: 'Enviromrntal and Social Impact Assessment for schools rehabilitation and construction in Jonglei and Upper Nile South Sudan',
      excerpt:
        'Protecting unique ecosystems while supporting economic development in the greater Nile Basin region.',
      date: '2024-01-05',
      category: 'Conservation',
      image: assessmentImage
    }
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with our latest research, insights, and perspectives on environmental challenges and
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Category badge removed as requested */}
                  {/* Date overlay removed as requested */}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link to="#" className="flex items-start gap-2">
                      <BookOpen className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      {post.title}
                    </Link>
                  </CardTitle>
                  {/* Non-bold description under picture removed as requested */}
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects (anchor target for home page) */}
      <section id="recent-projects" tabIndex={-1} className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">More Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering impactful environmental solutions across South Sudan's diverse sectors.
            </p>
          </div>

          {(() => {
            const completedProjects = [
              {
                title: 'Environmental Impact Assessment for Juba Teaching Hospital',
                client: 'Ministry of Health, South Sudan',
                year: '2023',
                description: 'Comprehensive EIA for hospital expansion project',
                category: 'Healthcare Infrastructure',
                image: jubathImage
              },
              {
                title: 'Water Quality Assessment - Upper Nile Region',
                client: 'International Development Agency',
                year: '2023',
                description: 'Regional water quality monitoring and assessment program',
                category: 'Water Management',
                image: water2Image
              },
              {
                title: 'Biodiversity Survey - Boma National Park',
                client: 'Wildlife Conservation Society',
                year: '2022',
                description: 'Comprehensive biodiversity assessment and conservation planning',
                category: 'Ecological Services',
                image: biodiversityImage
              },
              {
                title: 'Mining Impact Assessment - Central Equatoria',
                client: 'South Sudan Geological Society',
                year: '2022',
                description: 'Environmental impact evaluation for proposed mining operations',
                category: 'Mining Assessment',
                image: miningImage
              }
            ];
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {completedProjects.map((project, index) => (
                  <Card key={index} className="hover-lift overflow-hidden">
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-black">
                          {project.category}
                        </Badge>
                      </div>
                      {/* Year badge removed as requested */}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{project.client}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );
          })()}
        </div>
      </section>
    </Layout>
  );
}

export default Blog;

