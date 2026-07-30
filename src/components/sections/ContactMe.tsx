import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser"
import { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async () => {
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

      alert("Message sent!")

    } catch (error) {
      console.error(error)
      alert("Something went wrong!")
    }
  }

  return (
    <section id="contact" className="min-h-screen px-6 md:px-18 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-8">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col gap-4 flex-1">
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
              onClick={handleSubmit}
              className="bg-brand-secondary text-dark px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-opacity">
              Send Message
            </button>
          </div>
        </div>


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