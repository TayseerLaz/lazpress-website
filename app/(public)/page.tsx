import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Quote } from "@/components/Quote";
import { Specs } from "@/components/Specs";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Services />
      <Process />
      <Work />
      <Quote />
      <Specs />
      <CTA />
    </>
  );
}
