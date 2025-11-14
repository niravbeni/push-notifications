'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, Phone, Video, Camera, Mic } from 'lucide-react';
import Image from 'next/image';

interface IMessageScreenProps {
  config: {
    userName: string;
    message: string;
    avatarUrl: string;
    redirectLink: string;
  };
}

export default function IMessageScreen({ config }: IMessageScreenProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  
  // Determine if this is a voicemail (phone number) or a message (named contact)
  const isVoicemail = config.userName.startsWith('(');

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Show message after a short delay
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
      // Try to play notification sound
      try {
        const audio = new Audio('/notification.mp3');
        audio.volume = 0.5;
        audio.play().catch((error) => {
          console.log('Audio autoplay prevented (this is normal):', error);
        });
      } catch {
        console.log('Notification sound not available (optional)');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(messageTimer);
    };
  }, []);

  const handleInputClick = () => {
    window.location.href = config.redirectLink;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-white">
      {/* iPhone Container */}
      <div className="relative w-full h-screen max-w-[430px] max-h-[932px] flex flex-col bg-white">
        {/* Top Bar */}
        <div className="fixed top-0 left-0 right-0 max-w-[430px] mx-auto flex items-center justify-between px-4 py-3 bg-[#f6f6f6] border-b border-gray-200 z-10">
          <button className="flex items-center gap-1 text-blue-500">
            <ChevronLeft className="w-6 h-6" />
            <span className="text-base">{isVoicemail ? 'Voicemails' : 'Messages'}</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={config.avatarUrl}
                alt={config.userName}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-base">{config.userName}</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-blue-500" />
            <Video className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-white px-4 pb-32 flex flex-col items-start">
          <div className="pt-[72px]">
          <div
            className={`flex items-start gap-2 transition-all duration-500 ease-out ${
              showMessage ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={config.avatarUrl}
                alt={config.userName}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Message Bubble */}
            <div className="flex flex-col gap-1 max-w-[70%]">
              <div className="relative bg-[#e5e5ea] rounded-2xl rounded-tl-sm px-4 py-2">
                <p className="text-base text-gray-900 whitespace-pre-line">
                  {config.message.split(/(Transcript:)/).map((part, index) => 
                    part === 'Transcript:' ? (
                      <span key={index} className="text-gray-500">{part}</span>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  )}
                </p>
              </div>
              <span className="text-xs text-gray-500 ml-2">{currentTime}</span>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div 
          className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto flex items-center gap-2 px-2 py-2 pb-2 bg-[#f6f6f6] border-t border-gray-200 z-10"
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 8px)' }}
        >
          <button className="p-2">
            <Camera className="w-6 h-6 text-gray-600" />
          </button>

          <div
            onClick={handleInputClick}
            className="flex-1 bg-green-100 rounded-full px-4 py-2 border border-green-300 cursor-pointer pulsate"
          >
            <span className="text-base text-gray-600">iMessage</span>
          </div>

          <button className="p-2">
            <Mic className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Pulsating Animation */}
      <style jsx>{`
        @keyframes pulsate {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
            border-color: rgba(34, 197, 94, 0.3);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.2);
            border-color: rgba(34, 197, 94, 0.6);
          }
        }

        .pulsate {
          animation: pulsate 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

