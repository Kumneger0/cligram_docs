---
order: 3
title: Usage
description: Navigation, shortcuts, and working in chats.
icon: terminal
---

# Usage

### Quick Start

- **Launch:** Run `cligram` in your terminal. Follow the interactive prompts to log in if it is your first time.
- **Account Switcher:** Press `ctrl + a` (when not typing in the input box) to open the in-app account switcher, or run `cligram account` via the CLI.
- **Ghost Mode Settings:** Press `F2` or `,` to open the Ghost Mode settings modal and toggle privacy features live.
- **Logout:** Run `cligram logout` to terminate the active session.
- **Upgrade:** On Debian/Ubuntu/Alpine, run `cligram upgrade` to fetch the latest release.

---

### Layout

- **Sidebar (Left):** Displays your dialogs split across 5 category tabs.
- **Message Stream (Right):** Viewport-based conversation history rendering styled chat bubbles with sender attribution, reactions, and media badges.
- **Message Input (Bottom):** Text input box for typing messages, staging attachments, and autocomplete. When in read-only channels or muted chats, it transforms into an informative status banner.
- **Focus:** The active pane is highlighted with a green border. Press **Tab** or **Shift + Tab** to switch focus between the sidebar, message stream, and input box.

---

### Sidebar Tabs & Filtering

Switch between dialog categories at any time:

- **a**: **All** – Unified list of all dialogs.
- **u**: **Users** – Direct 1-to-1 conversations.
- **g**: **Groups** – Group chats and supergroups.
- **c**: **Channels** – Broadcast channels.
- **b**: **Bots** – Automated Telegram bots.

---

### Status Indicators & Badges

- **● (Yellow):** Online status indicator next to a user's name.
- **● (Red + Count):** Number of unread messages in a chat (e.g., `(3)`).
- **(edited):** Appears next to messages that have been modified in real time.
- **🔇 MUTED:** Appears in the top status bar when your microphone is muted during a call.
- **Service Messages:** System notifications (such as members joining via invite links, leaves, or pinned messages) render as centered, italicized badges distinct from normal message bubbles.
---

### Viewport Navigation

When focused on the message stream:

- **↑ / k:** Move up one message.
- **↓ / j:** Move down one message.
- **Page Up (pgup):** Scroll half-page up.
- **Page Down (pgdown):** Scroll half-page down.
- **Home:** Jump to the earliest loaded message.
- **End:** Jump to the latest message.
- **Shift + ↓:** Scroll to the bottom and fetch newest messages.
- **i:** Jump directly to the message input box.

---

### Working in Chats

Select a message in the stream using navigation keys, then press:

- **r:** Reply to the selected message.
- **e:** Edit the selected message (if authored by you).
- **d:** Delete the selected message (prompts confirmation modal).
- **f:** Forward the selected message (opens dialog quick-picker).
- **ctrl + r:** Open the **Emoji Reactions** modal to react to the message.
- **u:** Open a direct message with the message author (when inside a group).
- **m:** Open the interactive **Group Member Roster** modal (inside groups or channels).
- **Enter:**
  - On a **media message**: Downloads the asset to `~/.cache/cligram/media/` and launches it in your system's default media player.
  - On a **Telegram link** (`t.me/+hash`, `t.me/c/...`, `@user`): Dispatches the in-app link router or join preview modal.
  - On an **external URL**: Opens the link in your desktop browser.
  - On a **forum group**: Opens the list of forum topics.
- **c:** When focused on a broadcast channel post that has comments, opens the in-app **Discussion Comments** modal.

---

### Links & Channel Join Previews

Cligram includes an in-app link router that resolves Telegram links directly without opening an external browser:

- **Opening Links:**
  - Select any message containing a Telegram link (`t.me/+hash`, `t.me/c/...`, public `@handle`, or `https://t.me/...`) and press **`Enter`**.
  - Or type `/open <link>`, `/join <link>`, or `@handle` directly into the message input and press **`Enter`**.
- **Join Preview Modal:** Opening an invite link or unjoined channel displays an interactive modal showing:
  - Channel or group title, description, and member or subscriber counts.
  - Admin approval requirement notice (if required).
  - Single-key actions: **`[Enter]`** to Join (or Request to Join), and **`[Esc]`** or **`q`** to dismiss.
- **Unjoined Public Channels:** When viewing an unjoined public channel in your chat stream, the message input transforms into an **`[Enter] Join`** prompt (press **`Tab`** to focus).

---

### Voice Calling

Cligram supports 1-to-1 voice calling:

- **ctrl + p:** Initiate a voice call to the selected user (from Users or All list).
- **a:** Accept an incoming call.
- **d / Esc:** Decline an incoming call.
- **Alt + M:** Toggle microphone mute / unmute during an active call.
- **Alt + H:** Hang up or cancel a call.

An in-call status bar remains pinned at the top of the interface displaying the contact name, call duration, connection type (`[P2P]` / `[Relay]`), and your mute status.

---

### Compose, Attachments & Bot Autocomplete

When the message input is focused:

- **Type message + Enter:** Send message.
- **Per-Dialog Drafts:** Unsent message text typed in the input field is automatically preserved per dialog. When switching between chats or tabs, your draft is remembered and restored the moment you return. Sending the message clears the draft.
- **ctrl + a:** Launch the native GUI file picker (`zenity` / `kdialog`) to attach a file.
  - A staged file is shown as an **Attachment Preview Chip**: `📎 filename (size) • [Esc] Detach`.
  - Press **Esc** to remove the attachment before sending.
  - Press **Enter** to upload and send the file with an optional caption.
- **Bot Commands (`/`):** Typing `/` in a bot chat or a group with bots opens the **Bot Command Autocomplete Overlay**:
  - Filter commands dynamically as you type.
  - Use **↑ / ↓** to select a command.
  - Press **Tab** or **Enter** to autocomplete the command.
  - Press **Esc** to dismiss the autocomplete popup.

---

### Global Overlays & Modals

- **ctrl + k:** Open the **Search Palette** to search through all chats, channels, and messages.
- **ctrl + a (outside input):** Open the **Account Switcher Modal** to swap accounts or run the inline auth wizard.
- **F2 or , (outside input):** Open the **Ghost Mode Settings Modal** to toggle read receipts and typing status live.
- **alt + s:** Open the **Stories Viewer Overlay** to view user stories anonymously.
- **Esc:** Close any active modal dialog and return to the main view.
