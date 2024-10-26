import Navbar from "../components/shared/Navbar/Navbar";

export default function HomePageLayout<T extends React.ReactNode>({
  children,
}: {
  children: T;
}) {
  return (
    <div className=" min-h-screen">
        <Navbar/>
      <>{children}</>
    </div>
  );
}
