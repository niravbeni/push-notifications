'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface NotificationBannerProps {
  userName: string;
  message: string;
  avatarUrl: string;
  appName: string;
}

export default function NotificationBanner({
  userName,
  message,
  avatarUrl,
  appName,
}: NotificationBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className={`absolute bottom-24 left-6 right-6 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={avatarUrl}
                alt={userName}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">
                {appName}
              </span>
              <span className="text-xs text-gray-500">now</span>
            </div>
            <div className="text-sm font-semibold text-gray-900 mb-0.5">
              {userName}
            </div>
            <div className="text-sm text-gray-700 line-clamp-2">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

