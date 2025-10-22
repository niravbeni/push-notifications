# Push Notification Mock PWA

An iOS lock screen notification mockup for UX testing. This app creates realistic-looking iPhone lock screens with customizable notifications that slide up from the bottom.

## Features

- 🎨 **16 Unique Scenarios**: 4 personas × 4 variants each
- 📱 **iOS Lock Screen UI**: Authentic-looking iPhone lock screen with real-time clock
- 🎬 **Animated Notifications**: Smooth slide-up animation with notification sound
- 🎯 **Fully Responsive**: Works on all screen sizes and browsers
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

Open [http://localhost:3000](http://localhost:3000) to see all available routes.

### Build for Production

```bash
npm run build
npm start
```

## URL Structure

All notification screens follow this pattern:

```
/[persona]/[variant]
```

### Available URLs

- **Persona A**: `/personaA/1`, `/personaA/2`, `/personaA/3`, `/personaA/4`
- **Persona B**: `/personaB/1`, `/personaB/2`, `/personaB/3`, `/personaB/4`
- **Persona C**: `/personaC/1`, `/personaC/2`, `/personaC/3`, `/personaC/4`
- **Persona D**: `/personaD/1`, `/personaD/2`, `/personaD/3`, `/personaD/4`

## Customization

### Editing Content

All notification content is stored in `config/notifications.json`. Edit this file to customize:

- **userName**: Name displayed in the notification
- **message**: Message text
- **avatarUrl**: URL to avatar image (currently using DiceBear API)
- **backgroundColor**: Hex color for the lock screen background
- **appName**: App name shown in notification (e.g., "WhatsApp")

Example:

```json
{
  "personaA": {
    "1": {
      "userName": "Sarah Chen",
      "message": "Hey! Are you free for coffee tomorrow?",
      "avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahChen",
      "backgroundColor": "#1a1a2e",
      "appName": "WhatsApp"
    }
  }
}
```

### Custom Avatars

You can replace the avatar URLs with:
- Your own hosted images
- Different DiceBear styles (change the URL)
- Base64 encoded images

### Notification Sound

The app attempts to play a notification sound from `/public/notification.mp3`. 

**To add your own sound:**
1. Find or create a notification sound (`.mp3` format recommended)
2. Replace `/public/notification.mp3` with your sound file
3. Keep the filename as `notification.mp3` or update the reference in `components/IOSHomeScreen.tsx`

**Note**: Some browsers block autoplay audio. The sound may not play until the user interacts with the page.

## QR Code Generation

For your UX testing scenario, you can generate QR codes for each URL using:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [qrcode.react](https://www.npmjs.com/package/qrcode.react) for programmatic generation
- Browser extensions

## Deployment

This app can be deployed to any static hosting service:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **GitHub Pages**: Build and deploy the `out` folder

## Technical Details

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## File Structure

```
/
├── app/
│   ├── [persona]/
│   │   └── [variant]/
│   │       └── page.tsx          # Dynamic route handler
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage with all links
│   └── globals.css               # Global styles
├── components/
│   ├── IOSHomeScreen.tsx         # Main lock screen component
│   └── NotificationBanner.tsx    # Notification component
├── config/
│   └── notifications.json        # All notification content
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

## License

MIT
