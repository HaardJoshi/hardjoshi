import { Users, Monitor, Coffee, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: "Course Representative",
      company: "University of East London",
      location: "London, UK",
      period: "September 2023 – Present",
      icon: Users,
      achievements: [
        "Represented a cohort of 100+ students, gathering systematic feedback on course content and delivery",
        "Analyzed and synthesized feedback into clear, data-backed proposals for presentation to faculty",
        "Successfully negotiated curriculum enhancements, demonstrating strong communication and advisory skills"
      ]
    },
    {
      role: "Lab Technician Intern",
      company: "University of East London",
      location: "London, UK", 
      period: "January 2025 – April 2025",
      icon: Monitor,
      achievements: [
        "Responsible for the stability and performance of the university's critical data analysis computing labs",
        "Proactively monitored system health, performed regular maintenance, and resolved complex hardware issues",
        "Guaranteed 99.9% system uptime, ensuring uninterrupted access to vital resources for students and faculty"
      ]
    },
    {
      role: "Bar Supervisor",
      company: "Aldgate Tap",
      location: "London, UK",
      period: "September 2023 – Present", 
      icon: Coffee,
      achievements: [
        "Managed a team of 10+ staff during high-volume service periods, requiring rapid, effective decision-making",
        "Designed and implemented new workflow protocols to reduce bottlenecks and optimize staff allocation", 
        "Improved operational efficiency by 20% in a high-pressure environment"
      ]
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Building leadership skills and technical expertise through diverse professional roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                          {exp.role}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-lg font-medium text-primary-600">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-neutral-500">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <p className="text-sm text-neutral-600 font-medium">
                            {exp.period}
                          </p>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2.5 flex-shrink-0"></div>
                            <span className="text-neutral-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Leadership & Technical Impact
          </h3>
          <p className="text-neutral-700 leading-relaxed">
            My diverse professional experience has honed both technical problem-solving abilities 
            and leadership skills. From managing computing infrastructure with 99.9% uptime to 
            leading teams of 10+ staff and improving operational efficiency by 20%, I bring a 
            proven track record of delivering results under pressure while maintaining high standards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
