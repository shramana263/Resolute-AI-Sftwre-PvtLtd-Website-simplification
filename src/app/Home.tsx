import Hero from "@/components/Hero"
import Testimonial from "@/components/Testimonial"
import WhyBetter from "@/components/WhyBetter"
import Questions from "@/components/Questions"
import FeatureHighlights from "@/components/FeatureHighlights"
import TrustedBy from "@/components/TrustedBy"
import CallToAction from "@/components/CallToAction"

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <TrustedBy /> */}
      <FeatureHighlights />
      <Testimonial />
      {/* <WhyBetter /> */}
      <Questions />
      <CallToAction />
    </div>
  )
}
