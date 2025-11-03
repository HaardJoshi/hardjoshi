import { Award, CheckCircle, Calendar } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      credentialId: "a86cbc43-a084-484e-a961-6e1e4605c1f0",
      icon: Award,
      verified: true
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals", 
      issuer: "Microsoft",
      credentialId: "b3c6f29d-523c-41e6-a947-c834e683c58f",
      icon: Award,
      verified: true
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft", 
      credentialId: "99a451d1-2247-4e81-800c-405c7bb8b74e",
      icon: Award,
      verified: true
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      credentialId: "Y6B3QPYZL5RD",
      icon: Award,
      verified: true
    },
    {
      name: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      credentialId: "6efada96-111b-4dfe-81db-2419b613d82b",
      icon: Award,
      verified: true,
      date: "Nov 10, 2024"
    },
    {
      name: "Learning SQL Programming",
      issuer: "LinkedIn Learning",
      icon: Award,
      verified: true,
      date: "Nov 3, 2024"
    }
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Certifications
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Validating continuous learning and expertise in data science and AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-primary-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary-600" />
                    </div>
                    {cert.verified && (
                      <CheckCircle className="w-5 h-5 text-semantic-success" />
                    )}
                  </div>
                </div>

                {/* Certification Details */}
                <h3 className="font-semibold text-lg text-neutral-900 mb-2 leading-tight">
                  {cert.name}
                </h3>
                
                <p className="text-primary-600 font-medium mb-3">
                  {cert.issuer}
                </p>

                {/* Credential ID */}
                <div className="mb-3">
                  <p className="text-xs text-neutral-500 uppercase tracking-wide font-medium mb-1">
                    Credential ID
                  </p>
                  <p className="text-sm text-neutral-700 font-mono bg-neutral-50 px-2 py-1 rounded">
                    {cert.credentialId}
                  </p>
                </div>

                {/* Issue Date */}
                {cert.date && (
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
            <div className="text-neutral-600">Total Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
            <div className="text-neutral-600">Microsoft Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-neutral-600">Verified Credentials</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
