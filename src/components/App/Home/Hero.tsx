import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import ParticleGenerator from "./Particles";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-96 flex items-center px-6 pt-12 lg:min-h-[85vh] lg:px-24 lg:pt-0"
    >
      <div className="absolute left-0 top-32 -z-50 h-screen w-full overflow-hidden">
        <ParticleGenerator />
      </div>

      <div className="glow-1 absolute left-12 top-12" />
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-[1] flex-col items-center gap-6 lg:items-start">
          <div className="flex max-w-fit items-center gap-3 rounded-full border border-primary bg-card px-6 py-1 text-primary">
            <span>FreelanceGo</span>
            <Sparkles size={20} />
          </div>
          <h1 className="text-center text-4xl lg:text-start lg:text-6xl/[1.1]">
            Connecting Exceptional{" "}
            <span className="text-primary">Talents & Opportunities</span>
          </h1>
          <h2 className="text-center text-sm lg:text-start lg:text-base">
            Meet the best freelancers with variouse talents and people who grace
            em. FreelanceGo ease your experience!. Lorem ipsum dolor sit amet
            consectetur adipisicing !
          </h2>
          <div className="relative w-full overflow-hidden rounded-full border bg-card py-0.5 lg:w-[420px]">
            <Input
              placeholder="Find some talents"
              className="border-none bg-transparent ps-6"
            />
            <Button
              size={"sm"}
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full px-4"
            >
              Discover
            </Button>
          </div>
        </div>
        <div className="w-full flex-[1]">
          <HeroImages />
        </div>
      </div>
      <div className="glow-1 absolute bottom-0 right-40 lg:bottom-32" />
    </section>
  );
};

export default Hero;
