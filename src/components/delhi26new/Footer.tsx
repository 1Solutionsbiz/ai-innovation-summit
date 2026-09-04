const Footer = () => (
  <footer id="contact" className="bg-[#202020] py-12 text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_.8fr] lg:px-8">
      <div>
        <div className="text-3xl font-black">AI Innovation<br />SUMMIT</div>
        <p className="mt-5 max-w-md text-xs leading-5 text-white/45">
          Join the brightest minds in Artificial Intelligence and Innovation at the AI Innovation Summit 2026.
        </p>
        <p className="mt-10 text-xs text-white/35">© 2026 AI Innovation Summit. All rights reserved.</p>
      </div>
      <div>
        <h3 className="text-sm font-bold">Connect With Us</h3>
        <p className="mt-4 text-xs leading-6 text-white/50">info@aiinnovationsummit.in</p>
        <p className="text-xs leading-6 text-white/50">Delhi, India</p>
        <div className="mt-6 flex gap-5 text-xs text-white/50">
          <a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">YouTube</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
