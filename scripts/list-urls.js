#!/usr/bin/env node

/**
 * Simple script to list all available URLs
 * Run with: node scripts/list-urls.js [base-url]
 */

const baseUrl = process.argv[2] || 'http://localhost:3000';
const personas = ['personaA', 'personaB', 'personaC', 'personaD'];
const variants = ['1', '2', '3', '4'];

console.log('\n📱 Push Notification Mock PWA - All URLs\n');
console.log('═'.repeat(50));

personas.forEach(persona => {
  console.log(`\n${persona.toUpperCase().replace('PERSONA', 'Persona ')}:`);
  variants.forEach(variant => {
    const url = `${baseUrl}/${persona}/${variant}`;
    console.log(`  • Variant ${variant}: ${url}`);
  });
});

console.log('\n' + '═'.repeat(50));
console.log(`\n📊 Total: ${personas.length * variants.length} unique URLs\n`);
console.log('💡 To use with your deployed domain:');
console.log('   node scripts/list-urls.js https://your-domain.com\n');

