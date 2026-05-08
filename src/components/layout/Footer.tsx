function Footer() {
  const currentYear = new Date().getFullYear();

  return(
    // <footer className="text-brand-primary shadow-lg border-t border-white/10 mx-10 pt-2 pb-2">
    //   e
    // </footer>

    <footer className=" text-brand-primary border-t border-white/10 py-5 mx-10">
      <div className="text-center md:text-left">
        <p className="font-bold text-lg text-brand-secondary">Songsak Thawaro</p>
        <p className="text-sm opacity-60">
          © {currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer