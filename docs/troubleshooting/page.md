---
order: 8
title: Troubleshooting
description: Common issues, voice call diagnostics, and debugging tools.
icon: code
---

# Troubleshooting

### Voice Calling Issues

- **Voice call fails or audio is silent:**
  If a voice call fails to connect or has no sound:
  1. Ensure you have an audio server backend installed:
     - **PipeWire:** Install `pipewire-audio` or `pipewire-utils`.
     - **PulseAudio:** Install `pulseaudio-utils`.
     - **ALSA:** Install `alsa-utils`.
  2. Run the loopback test in your terminal to verify microphone and speaker communication:
     ```bash
     cligram call-helper --loopback
     ```
- **"Cannot call peer due to privacy settings":**
  The remote user has configured Telegram to restrict incoming phone calls from non-contacts or everyone.

---

### File Attachments & File Picker

- **"No GUI file picker found":**
  On Linux, attaching files (`ctrl + a` when the input is focused) requires a native desktop dialog. Install `zenity` (GNOME/GTK) or `kdialog` (KDE):
  ```bash
  # Debian / Ubuntu
  sudo apt install zenity

  # Arch Linux
  sudo pacman -S zenity
  ```
- **Stuck attachment:**
  If you stage an attachment and decide not to send it, press **Esc** while the attachment preview chip is visible.

---

### Media Viewing

- **Media does not open on Enter:**
  On Linux, Cligram delegates media opening to `xdg-open`. Ensure `xdg-utils` is installed:
  ```bash
  sudo apt install xdg-utils
  ```
  Downloaded media is cached under `~/.cache/cligram/media/`.

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

