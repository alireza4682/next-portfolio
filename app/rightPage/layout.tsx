import RightNavbar from "./rightNavbar.component";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <RightNavbar />
      {children}
    </section>
  );
}
