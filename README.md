# iMessage Mock PWA

An iPhone Messages interface mockup for UX testing. This app creates realistic-looking iMessage conversation screens with sliding message animations and interactive elements.

## Features

- 📱 **Full iPhone Messages UI**: Authentic-looking iMessage interface
- 🎬 **Sliding Message Animation**: Message bubbles slide in smoothly
- 🔊 **Notification Sound**: WhatsApp-style notification sound on message arrival
- ✨ **Pulsating Text Input**: Interactive text input that prompts user interaction
- 🔗 **Clickable Redirects**: Text input redirects to custom URLs per persona
- 📐 **Fully Responsive**: Works on all screen sizes and browsers
- ⚙️ **Easy Configuration**: Single JSON file for all content
- 🚫 **No Backend**: Completely static, easy to deploy

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see all available personas.

### Build for Production

```bash
npm run build
npm start
```

## URL Structure

The app now has **4 simple URLs** - one for each persona:

- `/personaA` - Sarah Chen (Coffee invitation)
- `/personaB` - Marcus Johnson (Project deadline)
- `/personaC` - Priya Patel (Exciting news)
- `/personaD` - Alex Rivera (Dinner plans)

## Customization

### Editing Content

All conversation content is stored in `config/notifications.json`. Edit this file to customize:

- **userName**: Name displayed in conversation
- **message**: The message text
- **avatarUrl**: URL to avatar image (using DiceBear API)
- **redirectLink**: Where the text input redirects when clicked

Example:

```json
{
  "personaA": {
    "userName": "Sarah Chen",
    "message": "Hey! Are you free for coffee tomorrow?",
    "avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen",
    "redirectLink": "https://example.com/personaA-response"
  }
}
```

### Custom Avatars

You can replace the avatar URLs with:
- Your own hosted images
- Different DiceBear styles
- Local images in `/public` folder

### Notification Sound

The app plays a notification sound from `/public/notification.mp3` when the message appears.

**To replace the sound:**
1. Add your MP3 file to `/public/notification.mp3`
2. Keep the filename as `notification.mp3`

**Note**: Some browsers block autoplay audio. The sound may require user interaction first.

### Redirect Links

Each persona has a `redirectLink` that opens when the text input is clicked. Update these in the JSON config:

```json
"redirectLink": "https://your-custom-url.com"
```

This could link to:
- Survey forms
- Response pages
- External websites
- Other app routes

## Features Breakdown

### iMessage Interface

- **Top Bar**: Back button, contact name with avatar, phone/video icons
- **Message Area**: Received message bubble with sliding animation
- **Bottom Bar**: Camera icon, pulsating text input, microphone icon

### Animations

1. **Message Slide-in**: Message bubble slides from left after 1 second
2. **Pulsating Input**: Text input continuously pulsates to draw attention
3. **Sound Effect**: Notification sound plays when message appears

### Interactivity

- **Text Input Click**: Redirects to the configured URL for each persona
- **Responsive Layout**: Adapts to all screen sizes

## QR Code Generation

For UX testing, generate QR codes for each persona URL:

1. Use [QR Code Generator](https://www.qr-code-generator.com/)
2. Generate codes for:
   - `https://your-domain.com/personaA`
   - `https://your-domain.com/personaB`
   - `https://your-domain.com/personaC`
   - `https://your-domain.com/personaD`

See `QR_CODE_GUIDE.md` for detailed instructions.

## Deployment

This app can be deployed to any static hosting service:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Build and deploy the `out` folder

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

## Technical Details

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Lucide React icons
- **Icons**: DiceBear API for avatars

## File Structure

```
/
├── app/
│   ├── [persona]/
│   │   └── page.tsx              # Dynamic persona routes
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage with all links
│   └── globals.css               # Global styles
├── components/
│   └── iMessageScreen.tsx        # Main Messages interface
├── config/
│   └── notifications.json        # All conversation content
└── public/
    ├── manifest.json             # PWA manifest
    └── notification.mp3          # Notification sound
```

## Browser Compatibility

Tested and working on:
- ✅ Chrome (desktop & mobile)
- ✅ Safari (desktop & mobile)
- ✅ Firefox (desktop & mobile)
- ✅ Edge

## Customization Tips

1. **Change message timing**: Edit the `setTimeout` delay in `iMessageScreen.tsx` (line ~42)
2. **Adjust pulsation speed**: Modify the animation duration in the CSS (line ~121)
3. **Sound volume**: Change `audio.volume` value in `iMessageScreen.tsx` (line ~48)

## License

MIT
