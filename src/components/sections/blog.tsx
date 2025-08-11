import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser, faArrowRight, faClock, faEye, faTag } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const allPosts = [
  {
    title: "10 Essential UI/UX Design Principles for 2024",
    excerpt: "Learn the fundamental principles that make great user interfaces and experiences in the modern digital landscape.",
    author: "John Smith",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    views: "2.5K",
    image: "/placeholder-blog-1.jpg",
    category: "Design",
    featured: true,
    tags: ["UI/UX", "Design Principles", "User Experience"]
  },
  {
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Exploring upcoming trends and technologies shaping the web development landscape in 2024 and beyond.",
    author: "Emily Chen",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    views: "3.2K",
    image: "/placeholder-blog-2.jpg",
    category: "Development",
    featured: true,
    tags: ["Web Development", "Technology Trends", "Future Tech"]
  },
  {
    title: "Optimizing Website Performance: A Complete Guide",
    excerpt: "Tips and techniques for improving your website's speed and user experience for better conversions.",
    author: "David Wilson",
    date: "Mar 10, 2024",
    readTime: "12 min read",
    views: "1.8K",
    image: "/placeholder-blog-3.jpg",
    category: "Performance",
    featured: false,
    tags: ["Performance", "Optimization", "Web Speed"]
  },
  {
    title: "Building Scalable React Applications",
    excerpt: "Best practices for creating maintainable and scalable React applications for enterprise use.",
    author: "Sarah Johnson",
    date: "Mar 8, 2024",
    readTime: "10 min read",
    views: "2.1K",
    image: "/placeholder-blog-4.jpg",
    category: "Development",
    featured: false,
    tags: ["React", "JavaScript", "Enterprise"]
  },
  {
    title: "The Art of Mobile-First Design",
    excerpt: "How to create exceptional mobile experiences that delight users and drive engagement.",
    author: "Mike Rodriguez",
    date: "Mar 5, 2024",
    readTime: "7 min read",
    views: "1.5K",
    image: "/placeholder-blog-5.jpg",
    category: "Design",
    featured: false,
    tags: ["Mobile Design", "Responsive", "UX"]
  },
  {
    title: "SEO Strategies for Modern Web Applications",
    excerpt: "Advanced SEO techniques for single-page applications and modern web frameworks.",
    author: "Lisa Thompson",
    date: "Mar 3, 2024",
    readTime: "9 min read",
    views: "1.9K",
    image: "/placeholder-blog-6.jpg",
    category: "SEO",
    featured: false,
    tags: ["SEO", "Web Apps", "Marketing"]
  }
];

interface BlogProps {
  showAll?: boolean;
}

export function Blog({ showAll = false }: BlogProps) {
  const displayPosts = showAll ? allPosts : allPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" gradient className="mb-4">
            Latest Insights & Stories
          </Typography>
          <Typography variant="p" className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay updated with our latest insights, tips, and industry news from our expert team.
          </Typography>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Array.from(new Set(allPosts.map(post => post.category))).map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {displayPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-10" />
                {post.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faCalendarAlt} className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <Typography variant="p" className="mb-4 line-clamp-2 text-muted-foreground">
                  {post.excerpt}
                </Typography>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full"
                    >
                      <FontAwesomeIcon icon={faTag} className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Post Meta */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faEye} className="h-3 w-3" />
                    {post.views} views
                  </span>
                </div>
                
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary-hover"
                >
                  Read More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Tags */}
        <div className="bg-accent/50 rounded-lg p-8 mb-12">
          <Typography variant="h3" className="mb-6 text-center">
            Popular Topics
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(allPosts.flatMap(post => post.tags))).map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {!showAll && (
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-lg font-medium text-primary hover:text-primary-hover transition-colors"
            >
              View All Projects
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}