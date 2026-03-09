---
order: 5
title: Configuration
description: Customizing your cligram experience.
icon: settings
---

# Configuration

Customize your cligram experience by editing the config file at `~/.cligram/user.config.json`.

### Example Configuration

```json
{
  "chat": {
    "sendTypingState": true,
    "readReceiptMode": "default"
  },
  "readStories": false,
  "privacy": {
    "lastSeenVisibility": "everyone"
  }
}
```

### Options

- **chat.sendTypingState**: Show "typing..." status (`true` = default, `false` = never show).
- **chat.readReceiptMode**:
  - `"default"`: Marks as read only when you interact (default).
  - `"instant"`: Marks as read when you view messages.
  - `"never"`: Never automatically marks as read.
- **readStories**: Whether to mark stories as read; defaults to `false`.
- **privacy.lastSeenVisibility**:
  - `"everyone"`: Anyone can see your last seen time.
  - `"contacts"`: Only contacts can see your last seen.
  - `"nobody"`: No one can see your last seen.
  - If not set: Uses your Telegram privacy settings.


All settings are optional. Changes take effect the next time you start cligram.
