import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(images/minimalist_data_science_wireframe_gradient_background.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1
          className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          style={{
            textShadow:
              "-1px -1px 0 rgba(255,255,255,0.3), 1px -1px 0 rgba(255,255,255,0.3), -1px 1px 0 rgba(255,255,255,0.3), 1px 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          Hard Joshi
        </h1>
        <p className="text-xl lg:text-2xl font-normal mb-8 max-w-3xl mx-auto leading-relaxed text-neutral-200">
          Data Science & AI Student building solutions with data. Transforming
          complex information into actionable insights through structured
          problem-solving and predictive modeling.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToProjects}
            className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md min-h-[56px] flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button
            onClick={scrollToContact}
            className="border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-200 min-h-[56px] backdrop-blur-sm"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="https://linkedin.com/in/hardjoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/haardjoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
