import { Mail, Phone } from "lucide-react";

const ContactDetails = () => {
  return (
    <section
      id="contact-us"
      className="py-[200px] bg-gradient-to-b from-[#0c1a2a] to-[#203a56] text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
            Contact Us
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-center">
            For Speakership Opportunity
          </p>
          <div className="w-16 h-[3px] bg-white/50 mx-auto rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 relative z-10">
          {/* Surbhi */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 w-full ccws85 text-center shadow-xl hover:bg-white/15 transition-all duration-300">
            <h3 className="fs2rem font-semibold mb-2">Surbhi</h3>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="mailto:surbhi@guildlive.com"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors mb-5 mt-5"
              >
                <Mail size={18} />
                <span className="fs20">surbhi@guildlive.com</span>
              </a>
              {/* <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="fs20">+91 XXX XXX XXXX</span>
              </a> */}
            </div>
          </div>

          {/* Aditi Malik */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 w-full ccws85 text-center shadow-xl hover:bg-white/15 transition-all duration-300">
            <h3 className="fs2rem font-semibold mb-2">Aditi Malik</h3>
            <div className="space-y-3 text-sm text-white/80">
              <a
                href="mailto:aditi.malik@guildlive.com"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors mb-5 mt-5"
              >
                <Mail size={18} />
                <span className="fs20">aditi.malik@guildlive.com</span>
              </a>
              {/* <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span className="fs20">+91 XXX XXX XXXX</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Soft gradient overlay (for depth effect) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ContactDetails;
