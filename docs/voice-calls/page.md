---
order: 6
title: Voice Calling
description: Make and receive 1-to-1 voice calls in your terminal.
icon: terminal
---

# Voice Calling

Cligram supports making and receiving 1-to-1 voice calls directly in your terminal.

---

### How to Call

1. Navigate to a user in your **Users** or **All** list.
2. Press **`ctrl + p`** to initiate a voice call.
3. Press **`Alt + H`** at any time to cancel dialing.

---

### Call States

Outgoing and incoming calls transition through interactive states:

- **Dialing:** Initial call setup (`📞 Calling <User>...`).
- **Ringing:** The remote contact's device has received the call and is ringing (`🔔 Ringing <User>...`).
- **Connecting:** Establishing the audio connection (`🔄 Connecting with <User>...`).
- **Active:** The call is connected. The duration timer begins, and the status bar displays `[P2P]` (direct peer-to-peer) or `[Relay]` (routed through Telegram servers) connection status.

---

### Incoming Calls

When someone calls you, an incoming call popup appears over your terminal:

- Press **`a`** to accept the call.
- Press **`d`** or **`Esc`** to decline.

---

### In-Call Controls

| Action | Shortcut | Context |
| :--- | :--- | :--- |
| **Toggle Mute** | `Alt + M` | During an active call |
| **Hang Up** | `Alt + H` | During an active call or dialing |

While a call is active, a status bar pinned at the top of your terminal displays the contact name, call duration, connection type (`[P2P]` or `[Relay]`), and your mute status (`🔇 MUTED`).

---

### Testing Microphone & Speakers

You can test that your microphone and speakers work with Cligram by running:

```bash
cligram call-helper --loopback
```
