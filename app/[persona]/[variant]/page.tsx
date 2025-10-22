'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import notificationsData from '@/config/notifications.json';
import IOSHomeScreen from '@/components/IOSHomeScreen';

export default function PersonaPage() {
  const params = useParams();
  const persona = params.persona as string;
  const variant = params.variant as string;

  const [notificationConfig, setNotificationConfig] = useState<any>(null);

  useEffect(() => {
    // Get the configuration for this persona/variant
    const config = (notificationsData as any)[persona]?.[variant];
    if (config) {
      setNotificationConfig(config);
    }
  }, [persona, variant]);

  if (!notificationConfig) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Configuration Not Found</h1>
          <p className="text-gray-400">
            Invalid persona ({persona}) or variant ({variant})
          </p>
        </div>
      </div>
    );
  }

  return <IOSHomeScreen config={notificationConfig} />;
}

