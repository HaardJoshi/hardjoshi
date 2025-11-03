import { Code, Brain, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python (Pandas, NumPy, Scikit-learn)", "SQL", "Rust"],
      color: "text-primary-500",
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      skills: [
        "Classical Machine Learning",
        "Statistical Modeling",
        "Time Series Analysis",
        "Data Visualization",
        "ETL Processes",
      ],
      color: "text-primary-500",
    },
    {
      icon: Database,
      title: "Tools & Technologies",
      skills: [
        "Power BI",
        "Advanced Excel",
        "Jupyter Notebooks",
        "Git",
        "Tesseract OCR",
      ],
      color: "text-primary-500",
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="images/neural_network_visualization_blue_machine_learning_ai_technical.jpg"
          alt="Neural Network Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming, machine learning, and
            data visualization technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  <div
                    className={`p-3 bg-primary-100 rounded-lg inline-block mb-4`}
                  >
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-neutral-700 text-base">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-white rounded-xl border border-neutral-200">
            <Globe className="w-6 h-6 text-primary-500" />
            <div className="text-left">
              <h4 className="font-semibold text-neutral-900">Languages</h4>
              <p className="text-neutral-600">
                English, Gujarati, Hindi (all fluent)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
