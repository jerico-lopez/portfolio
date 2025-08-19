import type { ReactNode } from "react";

type SocialLinks = {
  icon: ReactNode;
  href: string;
  label: string;
};

type SocialBubblesProps = {
  links: SocialLinks[];
  size?: string;
};

const SocialBubbles = ({ links, size = "w-7 h-7 md:w-12 md:h-12" }: SocialBubblesProps) => {
  return (
    <div className="flex items-start justify-start mt-3">
      {links.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`${size} rounded-full hover:bg-cyan-600 text-white flex items-center justify-center text-2xl hover:scale-110 hover:shadow-[0_0_12px_#00fff5] transition-all duration-300`}
        >
          {icon}
        </a>
      ))}
    </div>  
  );
};

export default SocialBubbles;
