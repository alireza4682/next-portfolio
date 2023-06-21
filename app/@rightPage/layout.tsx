import RightNavbar from "./rightNavbar.component";
export default function Layout(props: {
  children: React.ReactNode;
  experience: React.ReactNode;
}) {
  return (
    <section>
      <RightNavbar />
      {props.children}
      {props.experience}
    </section>
  );
}
