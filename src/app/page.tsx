import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { CompletedProjects } from "@/components/sections/completed-projects";
import { Clients } from "@/components/sections/clients";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Services Preview */}
        <Services />

        {/* About Section */}
        <About />
        
        {/* Team Section removed for home page only */}

        {/* Projects Showcase */}
        <Projects />

        {/* Client Success Stories */}
        <CompletedProjects />

        {/* Featured Clients */}
        <Clients />

        {/* Latest Blog Posts */}
        <Blog />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}