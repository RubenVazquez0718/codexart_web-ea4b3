// src/components/WhatsAppButton.tsx
import type { FC } from 'react';

const WhatsAppButton: FC = () => {
  return (
    <a
      href="https://wa.me/9931830220"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 font-medium hover:bg-emerald-700 transition-colors"
    >
      <i className="fab fa-whatsapp" />
      <span>Contáctanos</span>
    </a>
  );
};

export default WhatsAppButton;