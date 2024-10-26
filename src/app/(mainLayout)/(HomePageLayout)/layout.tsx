import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import NavbarMarquee from "../components/shared/Navbar/NavbarMarquee";

export default function HomePageLayout<T extends React.ReactNode>({
  children,
}: {
  children: T;
}) {
  return (
    <div className="  ">
      <NavbarMarquee />
      <Navbar />
      <div className="h-screen">
      {children}
      </div>
      <Footer />
    </div>
  );
}
