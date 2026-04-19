---
order: 3
title: Usage
description: Navigation, shortcuts, and working in chats.
icon: terminal
---

# Usage

### Quick Start

- **Login:** Run `cligram` and follow the prompts if you are not logged in.
- **Logout:** Run `cligram logout`.
- **Upgrade:** On Debian/Ubuntu/Alpine, run `cligram upgrade`.

### Layout

- **Sidebar:** Your chats list (Users, Groups, Channels).
- **Chat Area:** Messages of the selected chat.
- **Focus:** The active area has a green border. Use Tab to switch.

### Indicators

- **●** Online Status: A yellow icon before a user's name indicates they are online.
- **●** Unread Messages: A red icon followed by a number in brackets (e.g., (3)) indicates the number of unread messages in a chat.

### Navigation & Shortcuts

- **Focus**: Tab toggles focus between sidebar and chat.
- **Move**: ↑ / k moves up; ↓ / j moves down.
- **Latest Message**: Shift + ↓ gets the latest message (only in MainView).
- **Filter (sidebar)**: c = Channels, g = Groups, u = Users.
- **Search**: `ctrl + k` opens search. Type to search; results appear below. Tab switches between input and results. Enter opens selection; Esc closes.
- **Forums**: Navigate to a group, hit Enter. If it has topics, they will list in the main view. Select one with Enter to open; exit a topic with Backspace.

### Working in Chats

Select messages by moving with ↑/↓ (or k/j) in the chat area.

- **d**: delete
- **r**: reply
- **e**: edit
- **f**: forward
- **u**: DM the sender (from a group)

### Compose & Attachments

- **ctrl + a**: Toggle the file picker when the input is focused.
- After picking a file, optionally add a caption, then press Enter to send. You may need to press Tab to focus on the input box after selecting the file.
- You will see a text indicating that the file is being uploaded.

### Reading Behavior

- **Typing indicator**: If enabled, others see “typing…” while you compose.
- **Read receipts** (`chat.readReceiptMode`):
  - `default`: Mark read only when you interact (e.g., reply).
  - `instant`: Mark read as soon as you view.
  - `never`: Never mark read automatically.
