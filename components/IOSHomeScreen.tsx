'use client';

import { useEffect, useState } from 'react';
import { Wifi, Signal } from 'lucide-react';
import NotificationBanner from './NotificationBanner';

interface IOSHomeScreenProps {
  config: {
    userName: string;
    message: string;
    avatarUrl: string;
    backgroundColor?: string;
    backgroundImage?: string;
    appName: string;
  };
}

export default function IOSHomeScreen({ config }: IOSHomeScreenProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      });
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Show notification after a short delay
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      // Try to play notification sound (if available)
      try {
        const audio = new Audio('/notification.mp3');
        audio.volume = 0.5;
        audio.play().catch((error) => {
          // Audio autoplay is often blocked by browsers - this is expected
          console.log('Audio autoplay prevented (this is normal):', error);
        });
      } catch {
        // Sound file not found - this is okay
        console.log('Notification sound not available (optional)');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(notificationTimer);
    };
  }, []);

  // Determine background style
  const getBackgroundStyle = () => {
    if (config.backgroundImage) {
      return {
        backgroundImage: `url(${config.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
    return {
      background: `linear-gradient(135deg, ${config.backgroundColor || '#1a1a2e'} 0%, ${adjustBrightness(config.backgroundColor || '#1a1a2e', 20)} 100%)`,
    };
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      style={getBackgroundStyle()}
    >
      {/* Phone Container */}
      <div className="relative w-full h-full max-w-[430px] max-h-[932px] flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-4 text-white drop-shadow-lg">
          <div className="flex items-center gap-1">
            <Signal className="w-4 h-4" fill="currentColor" />
            <span className="text-xs font-semibold">5G</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4" fill="currentColor" />
            {/* Full Battery Icon */}
            <div className="relative w-6 h-3 border-[1.5px] border-white rounded-[2px] flex items-center">
              <div className="absolute inset-[1.5px] bg-white rounded-[1px]"></div>
              <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[1.5px] h-[6px] bg-white rounded-r-[1px]"></div>
            </div>
          </div>
        </div>

        {/* Lock Screen Clock */}
        <div className="flex-1 flex flex-col justify-start items-center pt-20 text-white">
          <div className="text-xl font-medium opacity-90 drop-shadow-lg">{currentDate}</div>
          <div className="text-8xl font-thin mt-2 tracking-tight drop-shadow-2xl">{currentTime}</div>
        </div>

        {/* Notification Banner */}
        {showNotification && (
          <NotificationBanner
            userName={config.userName}
            message={config.message}
            avatarUrl={config.avatarUrl}
            appName={config.appName}
          />
        )}

        {/* Bottom Indicator */}
        <div className="flex justify-center pb-6">
          <div className="w-32 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Helper function to adjust brightness of hex color
function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, ((num >> 16) & 0xff) + amt);
  const G = Math.min(255, ((num >> 8) & 0xff) + amt);
  const B = Math.min(255, (num & 0xff) + amt);
  return `#${((R << 16) | (G << 8) | B).toString(16).padStart(6, '0')}`;
}

