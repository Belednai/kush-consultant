import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { useEffect } from "react";

const BRAND_COLOR = "#446551";

const Privacy = () => {
  useEffect(() => {
    // Ensure page starts at top when navigating here
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = "Privacy Policy - Your Company";

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
                className="fa-solid fa-shield-halved"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              <span>Privacy Policy</span>
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-user-shield"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              1. Information We Collect
            </Typography>
            <Typography variant="p" className="mb-6">
              We collect information you provide directly to us, including when you create an account, make a purchase, sign up for our newsletter, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-gears"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              2. How We Use Your Information
            </Typography>
            <Typography variant="p" className="mb-6">
              We use the information we collect to provide, maintain, and improve our services, process your transactions, send you technical notices and support messages, and respond to your comments and questions.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-people-arrows"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              3. Information Sharing
            </Typography>
            <Typography variant="p" className="mb-6">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-lock"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              4. Data Security
            </Typography>
            <Typography variant="p" className="mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-cookie-bite"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              5. Cookies and Tracking Technologies
            </Typography>
            <Typography variant="p" className="mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
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
              6. Your Rights
            </Typography>
            <Typography variant="p" className="mb-6">
              You have the right to access, update, or delete your personal information. You can also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-children"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              7. Children's Privacy
            </Typography>
            <Typography variant="p" className="mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, please do not provide any information on this website.
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
              8. Changes to This Policy
            </Typography>
            <Typography variant="p" className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date.
            </Typography>

            <Typography
              variant="h2"
              className="mt-8 mb-4 flex items-center gap-2"
              style={{ color: BRAND_COLOR }}
            >
              <i
                className="fa-solid fa-envelope-circle-check"
                style={{ color: BRAND_COLOR }}
                aria-hidden="true"
              />
              9. Contact Us
            </Typography>
            <Typography variant="p" className="mb-6">
              If you have any questions about this privacy policy or our treatment of your personal data, please contact us using the contact information provided on our website.
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

export default Privacy;

