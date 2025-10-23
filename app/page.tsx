import Link from 'next/link';

export default function Home() {
  const personas = [
    { id: 'personaA', name: 'Elena' },
    { id: 'personaB', name: 'Reena' },
    { id: 'personaC', name: 'Cathy' },
    { id: 'personaD', name: 'Angie' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="grid grid-cols-2 gap-4">
          {personas.map((persona) => (
            <Link
              key={persona.id}
              href={`/${persona.id}`}
              className="block bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transform duration-200 text-center"
            >
              <h2 className="text-3xl font-semibold">{persona.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
