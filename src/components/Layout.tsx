import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showFooterDivider?: boolean;
}

const Layout = ({ children, showFooterDivider = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      {showFooterDivider && <div className="footer-divider"></div>}
      <Footer />
    </div>
  );
};

export default Layout;