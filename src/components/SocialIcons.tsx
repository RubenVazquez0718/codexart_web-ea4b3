// src/components/SocialIcons.tsx
import type { FC } from 'react';

const SocialIcons: FC = () => {
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/codexart', icon: 'facebook-f' },
    { name: 'Instagram', url: 'https://instagram.com/codexart', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/codexart', icon: 'linkedin-in' },
    { name: 'YouTube', url: 'https://youtube.com/codexart', icon: 'youtube' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-gray-700 hover:text-primary text-xl transition-colors"
        >
          <i className={`fab fa-${social.icon}`} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;