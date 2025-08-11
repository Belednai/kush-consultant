import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

export function PreFooter() {
  return (
    <section className="footer-divider">
      <Container>
        <div className="py-12">
          <Typography variant="h3" className="text-center text-white mb-6">
            Ready to ensure your environmental compliance?
          </Typography>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

