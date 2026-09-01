import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700/60 to-transparent h-[1px] w-full" />
      <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-400">
        <span>Terms & Conditions</span>
        <span>|</span>
        <span>Privacy Policy</span>
      </div>
      <div className="flex items-center gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={social.name}
            className="flex items-center justify-center w-9 h-9 p-2 transition-all duration-200 border rounded-xl border-white/10 bg-white/5 hover:bg-white/15 hover:border-white/25 hover:scale-110 active:scale-95"
          >
            <img src={social.icon} className="w-4 h-4 object-contain" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-xs md:text-sm text-neutral-400">© 2026 Omm Atrayu Piri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
