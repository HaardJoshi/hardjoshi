import {
  ExternalLink,
  Calendar,
  TrendingUp,
  Shield,
  BarChart3,
  Camera,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Time Series Forecasting of Financial Market Data",
      period: "Present",
      description:
        "Forecasting equity price movements from historical market data to identify potential trends. Engineered a time-series model in Python, using walk-forward validation to simulate live trading conditions.",
      image: "images/minimalist_blue_financial_charts_graphs_data.jpg",
      technologies: [
        "Python",
        "Time Series Analysis",
        "Walk-forward Validation",
        "Pandas",
        "NumPy",
      ],
      icon: TrendingUp,
      status: "In Progress",
    },
    {
      title: "Snappy AI",
      period: "June 2025",
      description:
        "Rust desktop utility with screenshot capture, OCR text extraction using Tesseract, and AI-powered analysis. Cross-platform implementation with privacy-focused local processing.",
      image: "images/ocr_text_extraction_technology_process_illustration.jpg",
      technologies: ["Rust", "Tesseract OCR", "egui", "Cross-platform"],
      icon: Camera,
      status: "Completed",
    },
    {
      title: "Interactive KPI Dashboard for School Performance",
      period: "Feb 2025 – Apr 2025",
      description:
        "Faced with unstructured academic data that was difficult for non-technical faculty to interpret. Delivered an intuitive Power BI dashboard, enabling stakeholders to self-serve insights and track key metrics.",
      image: "images/clean_blue_data_visualization_dashboard_modern_ui_ux.jpg",
      technologies: [
        "Power BI",
        "Data Visualization",
        "Stakeholder Management",
        "Self-service Analytics",
      ],
      icon: BarChart3,
      status: "Completed",
    },
    {
      title: "Predictive Modelling for Heart Disease Risk",
      period: "December 2024",
      description:
        "Challenged to build a high-accuracy model to predict patient health outcomes from a noisy, complex dataset. Executed a back-end workflow, including data pre-processing, feature engineering, and model selection.",
      image:
        "images/neural_network_visualization_blue_machine_learning_ai_technical.jpg",
      technologies: [
        "K-Nearest Neighbors",
        "Feature Engineering",
        "Data Pre-processing",
        "Scikit-learn",
      ],
      icon: Shield,
      status: "Completed",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Demonstrating applied expertise through hands-on data science and AI
            projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-semantic-success/10 text-semantic-success"
                          : "bg-primary-100 text-primary-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-neutral-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <button className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
