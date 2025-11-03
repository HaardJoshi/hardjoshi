import { GraduationCap, MapPin } from 'lucide-react'

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                I build solutions with data. My approach is rooted in the craft of structured 
                problem-solving, turning messy, real-world information into clear, actionable insights. 
                I have hands-on experience taking projects from initial data wrangling to deploying 
                robust predictive models and creating visualizations that tell a compelling story.
              </p>
              
              <p>
                I'm motivated by the challenge of building tools that are technically sound and 
                genuinely useful. As a Data Science and AI student at the University of East London, 
                I'm on track for a First-Class Honours degree while developing expertise in machine 
                learning, statistical modeling, and data visualization.
              </p>
            </div>

            {/* Education Details */}
            <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-neutral-900">
                    BSc. (Hons) Data Science and Artificial Intelligence
                  </h3>
                  <p className="text-primary-600 font-medium">University of East London, London, UK</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4" />
                    <span>Expected Graduation: May 2026</span>
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    On track for a First-Class Honours
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    <strong>Relevant Coursework:</strong> Data Structures, Machine Learning, 
                    Corporate Finance, Financial Accounting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-neutral-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    First-Class Honours
                  </h3>
                  <p className="text-neutral-600">
                    Target Achievement
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
