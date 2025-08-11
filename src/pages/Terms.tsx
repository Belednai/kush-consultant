import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { useEffect } from "react";
const BRAND_COLOR = "#446551";

const Terms = () => {
  useEffect(() => {
    // Ensure page starts at top when navigating here
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Terms of Service - Your Company";

    // Inject Font Awesome (scoped to this page load; noop if already present)
    const existing = document.querySelector(
      'link[data-fa-cdn="true"]'
    ) as HTMLLinkElement | null;
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
      link.crossOrigin = "anonymous";
      link.referrerPolicy = "no-referrer";
      link.setAttribute("data-fa-cdn", "true");
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>

      <main className="flex-1 py-12 lg:py-20">
        <Container>
          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <Typography
              variant="h1"
              className="mb-8 flex items-center gap-3"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-file-contract"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              <span>Terms of Service</span>
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-circle-check"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              1. Acceptance of Terms
            </Typography>
            <Typography variant="p" className="mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-id-card-clip"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              2. Use License
            </Typography>
            <Typography variant="p" className="mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on Your Company's website for personal, non-commercial transitory viewing only.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-triangle-exclamation"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              3. Disclaimer
            </Typography>
            <Typography variant="p" className="mb-6">
              The materials on Your Company's website are provided on an 'as is' basis. Your Company makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-scale-balanced"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              4. Limitations
            </Typography>
            <Typography variant="p" className="mb-6">
              In no event shall Your Company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Your Company's website.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-pen-ruler"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              5. Revisions and Errata
            </Typography>
            <Typography variant="p" className="mb-6">
              The materials appearing on Your Company's website could include technical, typographical, or photographic errors. Your Company does not warrant that any of the materials on its website are accurate, complete or current.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-link"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              6. Links
            </Typography>
            <Typography variant="p" className="mb-6">
              Your Company has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Your Company of the site.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-rotate"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              7. Site Terms of Use Modifications
            </Typography>
            <Typography variant="p" className="mb-6">
              Your Company may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-gavel"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              8. Governing Law
            </Typography>
            <Typography variant="p" className="mb-6">
              Any claim relating to Your Company's website shall be governed by the laws of the jurisdiction in which Your Company operates without regard to its conflict of law provisions.
            </Typography>

            <Typography variant="p" className="mt-12 text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Terms;
