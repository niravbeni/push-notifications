#!/usr/bin/env node

/**
 * Simple script to list all available URLs
 * Run with: node scripts/list-urls.js [base-url]
 */

const baseUrl = process.argv[2] || 'http://localhost:3000';
const personas = [
  { id: 'personaA', name: 'Elena', desc: 'Coffee invitation' },
  { id: 'personaB', name: 'Reena', desc: 'Project deadline' },
  { id: 'personaC', name: 'Cathy', desc: 'Exciting news' },
  { id: 'personaD', name: 'Angie', desc: 'Dinner plans' },
];

console.log('\n💬 iMessage Mock PWA - All URLs\n');
console.log('═'.repeat(60));

personas.forEach(persona => {
  const url = `${baseUrl}/${persona.id}`;
  console.log(`\n${persona.name}`);
  console.log(`  Message: ${persona.desc}`);
  console.log(`  URL: ${url}`);
});

console.log('\n' + '═'.repeat(60));
console.log(`\n📊 Total: ${personas.length} personas\n`);
console.log('💡 To use with your deployed domain:');
console.log('   node scripts/list-urls.js https://your-domain.com\n');

