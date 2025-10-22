# Customization Guide

This guide will help you customize the notification content, avatars, backgrounds, and more.

## Editing Notification Content

All content is stored in `config/notifications.json`. This file contains 16 scenarios organized by persona and variant.

### JSON Structure

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

### Configuration Options

#### `userName` (string)
The name displayed at the top of the notification banner.

**Example:**
```json
"userName": "John Smith"
```

#### `message` (string)
The notification message text. Supports emojis!

**Example:**
```json
"message": "Meeting moved to 3pm 📅"
```

#### `avatarUrl` (string)
URL to the avatar image. Can be:
- External URL (like DiceBear)
- Local image in `/public` folder (e.g., `/avatars/person1.jpg`)
- Data URL (base64 encoded image)

**Examples:**
```json
// DiceBear (free avatar API)
"avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=YourName"

// Local image
"avatarUrl": "/avatars/sarah.jpg"

// Different DiceBear styles
"avatarUrl": "https://api.dicebear.com/7.x/personas/svg?seed=Sarah"
"avatarUrl": "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah"
```

**DiceBear Styles:**
- `avataaars` - Cartoon style
- `personas` - Illustrated portraits
- `notionists` - Notion-style avatars
- `bottts` - Robot avatars
- `identicon` - Geometric patterns

Browse more at: https://www.dicebear.com/styles/

#### `backgroundColor` (string)
Hex color code for the lock screen background. A gradient is automatically generated.

**Examples:**
```json
"backgroundColor": "#1a1a2e"  // Dark blue
"backgroundColor": "#2d4a3e"  // Forest green
"backgroundColor": "#4a1a3e"  // Purple
"backgroundColor": "#1a3a4a"  // Teal
```

**Color Palette Ideas:**
- Night: `#0a0a0a` to `#2a2a2a`
- Ocean: `#1a3a4a` to `#2a4a5a`
- Sunset: `#4a2a1a` to `#5a3a2a`
- Forest: `#1a3a2a` to `#2a4a3a`

#### `appName` (string)
The app name shown in the notification. Displayed in uppercase.

**Examples:**
```json
"appName": "WhatsApp"
"appName": "Messages"
"appName": "Slack"
"appName": "Teams"
```

## Using Custom Avatar Images

### Option 1: Local Images

1. Create an `avatars` folder in `/public`:
   ```
   /public/avatars/
   ```

2. Add your images:
   ```
   /public/avatars/person1.jpg
   /public/avatars/person2.jpg
   ```

3. Update the JSON:
   ```json
   "avatarUrl": "/avatars/person1.jpg"
   ```

### Option 2: External URLs

Use any image hosting service:
- Imgur
- Cloudinary
- Your own server

```json
"avatarUrl": "https://i.imgur.com/example.jpg"
```

### Option 3: DiceBear (Recommended for Prototyping)

Free, customizable avatars that don't require image files:

```json
"avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=UniqueNameHere"
```

Change the seed to generate different avatars.

## Background Customization

### Using Custom Background Images

If you want to use actual wallpaper images instead of solid colors:

1. Edit `components/IOSHomeScreen.tsx`

2. Find this section:
```tsx
<div
  className="relative w-full h-screen overflow-hidden flex items-center justify-center"
  style={{
    background: `linear-gradient(135deg, ${config.backgroundColor} 0%, ${adjustBrightness(config.backgroundColor, 20)} 100%)`,
  }}
>
```

3. Replace with:
```tsx
<div
  className="relative w-full h-screen overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage: `url(${config.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
```

4. Update your JSON:
```json
"backgroundImage": "/backgrounds/wallpaper1.jpg"
```

### Using Gradients

Keep the current setup but customize colors in the JSON.

## Notification Timing

To change when the notification appears, edit `components/IOSHomeScreen.tsx`:

```tsx
// Find this line (currently at line ~42):
const notificationTimer = setTimeout(() => {
  setShowNotification(true);
}, 1000);  // Change 1000 to delay in milliseconds

// Examples:
}, 500);   // Appear after 0.5 seconds
}, 2000);  // Appear after 2 seconds
}, 0);     // Appear immediately
```

## Animation Speed

To change the notification slide-up speed, edit `components/NotificationBanner.tsx`:

```tsx
// Find this line (currently around line ~21):
className={`absolute bottom-24 left-6 right-6 transition-all duration-500 ease-out ${
                                                                    // ^ Change duration-500

// Options:
duration-300  // Faster
duration-500  // Default (medium)
duration-700  // Slower
duration-1000 // Very slow
```

## Testing Your Changes

After editing `notifications.json`:

1. Save the file
2. The dev server will auto-reload
3. Refresh your browser
4. Navigate to the URL you changed

No rebuild necessary!

## Tips for Content Creation

1. **Keep messages realistic**: Use typical text message language
2. **Vary message length**: Some short, some longer
3. **Use emojis sparingly**: 1-2 per message maximum
4. **Test on mobile**: View on actual mobile devices before your UX session
5. **Consistent personas**: Keep userName the same across variants for each persona

## Common Issues

### Avatar not loading
- Check the URL is correct and publicly accessible
- Try using DiceBear URLs for testing
- Verify image file exists if using local images

### Colors look wrong
- Use 6-digit hex codes (e.g., `#1a1a2e` not `#1a1a2`)
- Include the `#` symbol
- Test on multiple devices as colors may appear differently

### Changes not appearing
- Save the file
- Refresh browser (Cmd/Ctrl + R)
- Check browser console for errors (F12)

## Need Help?

Check the main README.md for deployment and setup instructions.

