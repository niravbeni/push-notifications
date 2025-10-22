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
      "backgroundImage": "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80",
      "appName": "WhatsApp"
    }
  }
}
```

**Note**: You can use either `backgroundImage` (for wallpapers) OR `backgroundColor` (for solid colors with gradient).

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

The app now supports **both wallpaper images and solid colors**!

### Option 1: Background Images (Wallpapers) - RECOMMENDED

Use the `backgroundImage` field with any image URL:

```json
"backgroundImage": "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80"
```

**Image Sources:**

1. **Unsplash** (Free, high quality):
   - Browse: https://unsplash.com/
   - Search for: "wallpaper", "gradient", "nature", "abstract"
   - Right-click image → Copy Image Address
   - Use URLs like: `https://images.unsplash.com/photo-xxxxx?w=800&q=80`

2. **Local Images**:
   ```json
   "backgroundImage": "/wallpapers/my-image.jpg"
   ```
   Place images in `/public/wallpapers/` folder

3. **Your Own Hosted Images**:
   ```json
   "backgroundImage": "https://your-domain.com/wallpaper.jpg"
   ```

**Best Practices:**
- Use images around 800-1200px wide (optimized for mobile)
- JPG format for photos, PNG for graphics
- Avoid very busy images (text needs to be readable)
- Dark or muted colors work best for visibility

### Option 2: Solid Colors with Gradient

Use `backgroundColor` instead of `backgroundImage`:

```json
"backgroundColor": "#1a1a2e"
```

This creates a gradient automatically!

**Color Examples:**
```json
"backgroundColor": "#1a1a2e"  // Dark blue
"backgroundColor": "#2d4a3e"  // Forest green  
"backgroundColor": "#4a1a3e"  // Purple
"backgroundColor": "#1a3a4a"  // Teal
```

### Finding Great Wallpapers

**Recommended Unsplash Collections:**
- Gradients: https://unsplash.com/s/photos/gradient
- Abstract: https://unsplash.com/s/photos/abstract-wallpaper
- Nature: https://unsplash.com/s/photos/nature-wallpaper
- Minimal: https://unsplash.com/s/photos/minimal-wallpaper

**Other Free Sources:**
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/
- iOS Wallpapers: Search "iPhone wallpapers" online

### Adding Unsplash Images

1. Go to https://unsplash.com/
2. Search for your desired wallpaper
3. Click on an image
4. Right-click the image → "Copy Image Address"
5. Paste into your JSON:
   ```json
   "backgroundImage": "https://images.unsplash.com/photo-..."
   ```

**Tip**: Add `?w=800&q=80` to the end of Unsplash URLs for optimized loading!

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

