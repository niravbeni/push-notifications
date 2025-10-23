# QR Code Generation Guide

Quick guide for creating QR codes for your iMessage mock PWA personas.

## Quick Method: Online QR Code Generator

Use any of these free services:

1. **QR Code Generator** - https://www.qr-code-generator.com/
2. **QR Code Monkey** - https://www.qrcode-monkey.com/
3. **QR Tiger** - https://www.qrcode-tiger.com/

## URLs to Generate QR Codes For

Once your app is deployed, create QR codes for these **4 URLs**:

### Persona URLs

- **Elena**: `https://your-domain.com/personaA`
- **Reena**: `https://your-domain.com/personaB`
- **Cathy**: `https://your-domain.com/personaC`
- **Angie**: `https://your-domain.com/personaD`

## For Testing (localhost)

During development, you can test with localhost URLs:

**Note**: Participants need to be on the same network

Use your computer's IP address instead of `localhost`:
- Example: `http://192.168.1.100:3000/personaA`

### Find your IP address:
- **Mac**: System Settings → Network → Your Connection → Details
- **Windows**: Open CMD and type `ipconfig`
- **Or use**: `node scripts/list-urls.js http://YOUR-IP:3000`

## Generating QR Codes

### Online Method

1. Go to one of the QR code generators above
2. Select "URL" type
3. Enter your persona URL (e.g., `https://your-domain.com/personaA`)
4. Customize design if desired
5. Download as PNG or SVG
6. Repeat for all 4 personas

### Batch Generation Script

If you need to generate all 4 QR codes at once, you can use this Node.js script:

```bash
npm install qrcode
```

Create `generate-qr-codes.js`:

```javascript
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://your-domain.com';
const personas = [
  { id: 'personaA', name: 'Elena' },
  { id: 'personaB', name: 'Reena' },
  { id: 'personaC', name: 'Cathy' },
  { id: 'personaD', name: 'Angie' },
];

const outputDir = './qr-codes';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

personas.forEach(persona => {
  const url = `${baseUrl}/${persona.id}`;
  const filename = path.join(outputDir, `${persona.name.toLowerCase()}.png`);
  
  QRCode.toFile(filename, url, {
    width: 500,
    margin: 2,
  }, (err) => {
    if (err) throw err;
    console.log(`Generated: ${filename} → ${url}`);
  });
});
```

Run: `node generate-qr-codes.js`

## Printing Tips

- **Size**: Print at least 2×2 inches (5×5 cm) for easy scanning
- **Testing**: Scan each QR code before printing final versions
- **Labels**: Add persona names below QR codes for easy identification
- **Durability**: Consider laminating for physical UX testing scenarios

## QR Code Layout

For your UX testing setup, you might want to create labels like:

```
┌─────────────────┐
│                 │
│   [QR CODE]     │
│                 │
├─────────────────┤
│     Elena       │
│ Coffee Invite   │
└─────────────────┘
```

## Testing Checklist

Before your UX session:

- [ ] Generate all 4 QR codes
- [ ] Test each QR code with multiple devices
- [ ] Verify correct persona loads
- [ ] Check message appears correctly
- [ ] Test text input redirect works
- [ ] Print and laminate (if needed)

## File Naming Convention

Suggested naming for your QR code files:

- `elena-qr.png` - Elena (personaA)
- `reena-qr.png` - Reena (personaB)
- `cathy-qr.png` - Cathy (personaC)
- `angie-qr.png` - Angie (personaD)

## Advanced: Custom QR Code Styling

Many generators allow you to customize:
- Colors (use your brand colors)
- Add logo in center
- Rounded corners
- Pattern styles

Just ensure the QR code remains scannable after customization!

## Troubleshooting

**QR code doesn't scan:**
- Increase size (print larger)
- Ensure good contrast
- Check lighting conditions
- Try different QR scanner apps

**Wrong page loads:**
- Verify URL in QR code is correct
- Check for typos in domain
- Ensure app is deployed and accessible

**Need to update URLs:**
- Simply regenerate QR codes with new URLs
- No need to change the app code
