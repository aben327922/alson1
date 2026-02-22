import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/923102564594"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default WhatsAppButton;
