import { Cursor } from "@/components/Cursor";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CmykRule } from "@/components/CmykRule";
import { Nav } from "@/components/Nav";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

/**
 * Public-site chrome: shows on every marketing page, not on /admin.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <CmykRule />
      <Nav />
      <Ticker />
      <main>{children}</main>
      <Footer />
    </>
  );
}
