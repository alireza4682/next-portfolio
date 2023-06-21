import RightNavbar from "./rightNavbar.component";
export default function RightPageLayout(props: { children: React.ReactNode }) {
  return (
    <section>
      <RightNavbar />
      {props.children}
    </section>
  );
}
