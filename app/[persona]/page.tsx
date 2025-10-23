'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import notificationsData from '@/config/notifications.json';
import IMessageScreen from '@/components/iMessageScreen';

export default function PersonaPage() {
  const params = useParams();
  const persona = params.persona as string;

  const [personaConfig, setPersonaConfig] = useState<any>(null);

  useEffect(() => {
    // Get the configuration for this persona
    const config = (notificationsData as any)[persona];
    if (config) {
      setPersonaConfig(config);
    }
  }, [persona]);

  if (!personaConfig) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Configuration Not Found</h1>
          <p className="text-gray-600">
            Invalid persona: {persona}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Valid personas: personaA, personaB, personaC, personaD
          </p>
        </div>
      </div>
    );
  }

  return <IMessageScreen config={personaConfig} />;
}

