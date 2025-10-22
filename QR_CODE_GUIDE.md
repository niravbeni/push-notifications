# QR Code Generation Guide

For your UX testing scenario where participants scan QR codes to access different notification screens.

## Quick Method: Online QR Code Generator

Use any of these free services:

1. **QR Code Generator** - https://www.qr-code-generator.com/
2. **QR Code Monkey** - https://www.qrcode-monkey.com/
3. **QR Tiger** - https://www.qrcode-tiger.com/

## URLs to Generate QR Codes For

Once your app is deployed, create QR codes for these URLs:

### Persona A
- `https://your-domain.com/personaA/1`
- `https://your-domain.com/personaA/2`
- `https://your-domain.com/personaA/3`
- `https://your-domain.com/personaA/4`

### Persona B
- `https://your-domain.com/personaB/1`
- `https://your-domain.com/personaB/2`
- `https://your-domain.com/personaB/3`
- `https://your-domain.com/personaB/4`

### Persona C
- `https://your-domain.com/personaC/1`
- `https://your-domain.com/personaC/2`
- `https://your-domain.com/personaC/3`
- `https://your-domain.com/personaC/4`

### Persona D
- `https://your-domain.com/personaD/1`
- `https://your-domain.com/personaD/2`
- `https://your-domain.com/personaD/3`
- `https://your-domain.com/personaD/4`

## For Testing (localhost)

During development, you can test with localhost URLs, but note that:
- Participants need to be on the same network
- Use your computer's IP address instead of `localhost`
- Example: `http://192.168.1.100:3000/personaA/1`

To find your IP address:
- **Mac**: System Settings → Network → Your Connection → Details
- **Windows**: Open CMD and type `ipconfig`

## Batch Generation Script

If you need to generate all 16 QR codes at once, you can use this Node.js script:

```bash
npm install qrcode
```

Create a file `generate-qr-codes.js`:

```javascript
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://your-domain.com';
const personas = ['personaA', 'personaB', 'personaC', 'personaD'];
const variants = ['1', '2', '3', '4'];

const outputDir = './qr-codes';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

personas.forEach(persona => {
  variants.forEach(variant => {
    const url = `${baseUrl}/${persona}/${variant}`;
    const filename = path.join(outputDir, `${persona}-${variant}.png`);
    
    QRCode.toFile(filename, url, {
      width: 500,
      margin: 2,
    }, (err) => {
      if (err) throw err;
      console.log(`Generated: ${filename}`);
    });
  });
});
```

Run: `node generate-qr-codes.js`

## Printing Tips

- Print QR codes at least 2x2 inches (5x5 cm) for easy scanning
- Test each QR code before printing final versions
- Label each QR code with the persona and variant for your reference
- Consider laminating for durability if using in physical spaces

## Testing QR Codes

Before your UX session:
1. Generate all 16 QR codes
2. Test each one with multiple devices
3. Verify the notification content is correct
4. Check responsiveness on different screen sizes

