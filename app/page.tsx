import Link from 'next/link';

export default function Home() {
  const personas = ['personaA', 'personaB', 'personaC', 'personaD'];
  const variants = ['1', '2', '3', '4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Push Notification Mock PWA</h1>
        <p className="text-gray-400 mb-8">
          Select a persona and variant to view the iOS lock screen notification
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona) => (
            <div key={persona} className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 capitalize">
                {persona.replace('persona', 'Persona ')}
              </h2>
              <div className="space-y-2">
                {variants.map((variant) => (
                  <Link
                    key={variant}
                    href={`/${persona}/${variant}`}
                    className="block bg-gray-700 hover:bg-gray-600 transition-colors rounded-md px-4 py-2 text-center"
                  >
                    Variant {variant}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Configuration</h3>
          <p className="text-gray-400 mb-2">
            Edit the content in{' '}
            <code className="bg-gray-700 px-2 py-1 rounded text-sm">
              config/notifications.json
            </code>{' '}
            to customize messages, avatars, and backgrounds.
          </p>
          <p className="text-gray-400">
            Each URL follows the pattern:{' '}
            <code className="bg-gray-700 px-2 py-1 rounded text-sm">
              /[persona]/[variant]
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
