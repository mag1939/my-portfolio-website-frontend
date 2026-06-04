function ContactMe() {
  return (
    <section id="contact" className="min-h-screen px-6 md:px-18 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-8">
        Contact Me
      </h2>

      <div className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Your name"
          className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors"
        />
        <textarea
          placeholder="Your message"
          rows={5}
          className="w-full bg-white/5 border border-brand-secondary/20 rounded-xl px-4 py-3 text-sm text-brand-primary placeholder:text-brand-primary/25 outline-none focus:border-brand-secondary transition-colors resize-y"
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-1">
          <button className="bg-brand-secondary text-dark px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-opacity">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;