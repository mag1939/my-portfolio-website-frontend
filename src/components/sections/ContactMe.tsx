import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser"
import { useState } from "react";

function ContactMe() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)
  const [formErrors, setFormErrors] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async () => {
    setFormErrors(null)
    setStatus(null)
    if (!formData.subject || !formData.from_name || !formData.from_email || !formData.message) {
      setFormErrors("Please fill out all the fields before sending the Message!")
      return
    }
    setIsSending(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
      // reset leftover input from successful sending attempt.
      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: ""
      })

    } catch (error) {
      setStatus("error")
      console.error(error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen px-6 md:px-18 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-8">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        <form
          className="flex flex-col gap-4 flex-1"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit()
          }}>
            <input
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value})}
              type="text"
              placeholder="Subject"
              className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors"
            />
            <input
              value={formData.from_name}
              onChange={(e) => setFormData({ ...formData, from_name: e.target.value})}
              type="text"
              placeholder="Your name"
              className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors"
            />
            <input
              value={formData.from_email}
              onChange={(e) => setFormData({ ...formData, from_email: e.target.value})}
              type="email"
              placeholder="Your email"
              className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors"
            />
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value})}
              placeholder="Your message"
              rows={5}
              className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors resize-y"
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-1">
              <button
                type="submit"
                disabled={isSending}
                className={`text-dark px-6 py-2.5 rounded-full font-bold text-sm active:scale-95 active:translate-y-0.5 transition-transform
                  ${isSending ?
                    "bg-gray-500 cursor-not-allowed" :
                    "bg-brand-secondary hover:opacity-80 transition-opacity"}`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div className={`px-6 py-2.5 text-sm font-medium ${
                  status === "success" ? "text-green-400" : "text-red-400"
                }`}>
                  {status === "success"
                  ? "Sending successful!~"
                  : "Something went wrong. Please try again or reach me through other channels."}

                </div>
              )}

              {formErrors && (
                <div className="px-6 py-2.5 text-sm font-medium text-red-400">
                  {formErrors}
                </div>
              )}

            </div>


        </form>

        {/* Find me on */}
        <div className="flex flex-col text-brand-primary flex-1">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-2">
            Find me on
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <FaEnvelope/>
              <a href="mailto:songsak.st@hotmail.com" className="hover:text-brand-secondary transition-colors">songsak.st@hotmail.com</a>
            </div>
            <div className="flex gap-2 items-center">
              <FaLinkedin/>
              <a href="https://www.linkedin.com/in/songsak-st-7b3a81184/" className="hover:text-brand-secondary transition-colors">Songsak Thawaro</a>
            </div>
            <div className="flex gap-2 items-center">
              <FaGithub/>
              <a href="https://github.com/mag1939" className="hover:text-brand-secondary transition-colors">mag1939</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactMe;