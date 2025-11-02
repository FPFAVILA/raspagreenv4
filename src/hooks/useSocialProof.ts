import { useState, useEffect } from 'react';
import { SocialProofNotification } from '../types';

const SOCIAL_PROOF_MESSAGES = [
  { user: 'João S.', prize: 'um prêmio incrível! 🎁' },
  { user: 'Ana P.', prize: 'acabou de ganhar! ✨' },
  { user: 'Carlos M.', prize: 'algo especial! 🏆' },
  { user: 'Maria L.', prize: 'raspou 3 iguais! 🎉' },
  { user: 'Pedro K.', prize: 'ganhou agora mesmo! 💰' },
  { user: 'Julia R.', prize: 'um prêmio surpresa! ⭐' },
  { user: 'Rafael T.', prize: 'teve muita sorte! 🍀' },
  { user: 'Camila B.', prize: 'acabou de raspar 3 iguais!' },
];

export const useSocialProof = () => {
  const [notifications, setNotifications] = useState<SocialProofNotification[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const message = SOCIAL_PROOF_MESSAGES[currentIndex];
      const notification: SocialProofNotification = {
        id: `notif_${Date.now()}`,
        user: message.user,
        prize: message.prize,
        timestamp: new Date()
      };

      setNotifications(prev => [notification, ...prev.slice(0, 2)]);
      setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_MESSAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return notifications;
};