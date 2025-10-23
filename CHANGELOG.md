# Changelog

## Latest Updates - iMessage Interface Transformation

### 🎨 Complete UI Overhaul

Transformed the app from iOS lock screen notifications to a full iPhone Messages (iMessage) interface.

#### Major Changes

**New Interface:**
- Full iPhone Messages UI with authentic styling
- Top bar with back button, contact name/avatar, and phone/video icons
- Message area with sliding message bubbles
- Bottom input bar with camera, pulsating text input, and microphone icons

**Simplified URL Structure:**
- **Before**: 16 URLs (`/personaA/1`, `/personaA/2`, etc.)
- **After**: 4 URLs (`/personaA`, `/personaB`, `/personaC`, `/personaD`)

**New Features:**
- Pulsating text input animation to prompt user interaction
- Clickable text input that redirects to custom URLs
- Classic white Messages background (iOS style)
- Sliding message bubble animation from left
- Notification sound still plays on message arrival

**Configuration Changes:**
- Simplified JSON structure (removed variants)
- Added `redirectLink` field for text input redirects
- Removed `backgroundImage` field (no longer needed)

### 📝 Files Created

- `components/iMessageScreen.tsx` - New Messages interface component

### 📝 Files Modified

- `config/notifications.json` - Restructured to 4 personas (no variants)
- `app/[persona]/page.tsx` - Moved from `[variant]` subfolder
- `app/page.tsx` - Updated to show 4 persona links
- `README.md` - Complete rewrite for iMessage interface
- `scripts/list-urls.js` - Updated for new URL structure

### 🗑️ Files Deleted

- `app/[persona]/[variant]/` - Removed variant routing
- `components/IOSHomeScreen.tsx` - Replaced with iMessage interface
- `components/NotificationBanner.tsx` - No longer needed

### 🎯 New Configuration Format

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

### ✨ Features

- Full iPhone Messages interface
- Sliding message animation (1 second delay)
- Pulsating text input (draws attention)
- WhatsApp notification sound on message appear
- Clickable text input redirects to custom URLs
- Responsive design for all devices

---

## Previous Updates

### ✨ Lock Screen Features (Stable Backup Branch)

The original lock screen notification interface is preserved in the `stable-backup` branch.

#### Features:
- Full battery icon
- Background wallpaper support (Unsplash images)
- iOS lock screen with real-time clock
- 16 notification screens (4 personas × 4 variants)
- Notification slide-up animation
- WhatsApp notification sound

---

Last updated: October 22, 2025
