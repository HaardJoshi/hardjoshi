import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // New state to track submission status
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Updated handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/mqagvbga", {
        // <-- REPLACE WITH YOUR URL
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Message sent successfully!",
        });
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Handle server errors
        const data = await response.json();
        const errorMessage =
          data.errors?.map((err: any) => err.message).join(", ") ||
          "Something went wrong.";
        setStatus({
          submitting: false,
          success: false,
          error: true,
          message: errorMessage,
        });
      }
    } catch (error) {
      // Handle network errors
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Network error. Please try again.",
      });
    }
  };

  const contactInfo = [
    // ... (your contactInfo array is perfect, no change needed)
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* ... (your header/title section is perfect, no change needed) ... */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ... (your Contact Information column is perfect, no change needed) ... */}

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
                Send a Message
              </h3>

              {/* Use the new handleSubmit */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ... (all your <input> and <textarea> fields are perfect) ... */}

                {/* (Keep all your input fields for name, email, subject, message here) */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting} // Disable button while sending
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>

                {/* Status Message */}
                {status.message && (
                  <p
                    className={`text-center ${
                      status.error
                        ? "text-semantic-error"
                        : "text-semantic-success"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ... (your footer is perfect, no change needed) ... */}
      </div>
    </section>
  );
};

export default Contact;
