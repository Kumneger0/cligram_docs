---
order: 8
title: Troubleshooting
description: Common issues, voice call diagnostics, and debugging tools.
icon: code
---

# Troubleshooting

### Voice Calling Issues

- **Voice call fails or audio is silent:**
  Run the loopback test in your terminal to verify microphone and speaker communication:
  ```bash
  cligram call-helper --loopback
  ```
- **"Cannot call peer due to privacy settings":**
  The remote user has configured Telegram to restrict incoming phone calls from non-contacts or everyone.

---

### File Attachments & File Picker

- **"No GUI file picker found":**
  On minimal Linux window managers, install `zenity` or `kdialog` to enable the graphical file picker dialog.

---

### Media Cache

Downloaded photos, videos, and media files are saved locally under `~/.cache/cligram/media/`.

---

### Logs & Diagnostics

- **View real-time logs:**
  Run the log viewer command:
  ```bash
  cligram log
  ```
  Or inspect the log file directly at `/tmp/cligram.log`.
- **Storage Directory:**
  All session data and configurations reside under `~/.cligram/`.
