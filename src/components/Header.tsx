import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-neutral-900">Hard Joshi</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-neutral-700 hover:text-primary-500 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Download CV Button */}
        <a
          href="Hard_Joshi.pdf"
          download="Hard_Joshi.pdf" // This suggests a filename to the user
          className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <Download className="w-4 h-4 inline mr-2" />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
