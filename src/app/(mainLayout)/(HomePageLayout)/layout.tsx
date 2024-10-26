import Navbar from "../components/shared/Navbar/Navbar";
import NavbarMarquee from "../components/shared/Navbar/NavbarMarquee";

export default function HomePageLayout<T extends React.ReactNode>({
  children,
}: {
  children: T;
}) {
  return (
    <div className="  min-h-screen">
      <NavbarMarquee/>
        <Navbar/>
      <>{children}</>
    </div>
  );
}
