---
order: 7
title: Configuration
description: Customizing your cligram experience and Ghost Mode.
icon: settings
---

# Configuration

You can customize your Cligram experience either interactively within the TUI or by editing the JSON configuration file directly.

---

### In-App Ghost Mode Settings Modal (Recommended)

Press **`F2`** or **`,`** (comma, when the message input is not focused) from anywhere in Cligram to open the **Ghost Mode Settings Modal**:

- **Read Messages:** Toggle how read receipts are sent:
  - `default`: Only marks messages as read when you actively interact (e.g. reply, react).
  - `instant`: Marks messages as read as soon as you view them in the viewport.
  - `never`: Completely invisible; messages are never marked as read.
- **Read Stories:**
  - `Disabled (Ghost)`: View stories anonymously without notifying the author (default).
  - `Enabled`: Send normal view notifications to story authors.
- **Send Typing State:**
  - `Enabled`: Broadcasts "typing..." when you compose a message (default).
  - `Disabled`: Suppresses typing indicator for complete invisibility.

> [!TIP]
> **Live Hot-Reload:** Any changes made inside the Ghost Mode modal are written directly to disk and take effect immediately—no application restart required!

---

### Configuration File

All settings are persisted in `~/.cligram/user.config.json`.

#### Example `user.config.json`

```json
{
  "chat": {
    "sendTypingState": true,
    "readReceiptMode": "default"
  },
  "readStories": false
}
```

#### Available Fields

| Key | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `chat.sendTypingState` | boolean | `true` | When set to `false`, hides the "typing..." indicator from peers while you type. |
| `chat.readReceiptMode` | string | `"default"` | Controls read receipt delivery: `"default"`, `"instant"`, or `"never"`. |
| `readStories` | boolean | `false` | When set to `false`, views stories anonymously without notifying the owner. |

> [!NOTE]
> **Desktop Notifications:** Cligram automatically dispatches native desktop notifications for incoming messages and calls while respecting Telegram mute preferences. Notifications are intelligently suppressed for the chat actively focused in your viewport.

