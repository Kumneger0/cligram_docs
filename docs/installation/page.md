---
order: 2
title: Installation
description: How to install and run cligram.
icon: rocket
---

# Installation

### 1. Download or Build cligram

- **Pre-built binaries:** [Download from GitHub Releases](https://github.com/Kumneger0/cligram/releases):
  - **Linux (`amd64` / `x86_64`):** Standalone archive (`.tar.gz`) or native packages (`.deb`, `.rpm`, `.apk`).
  - **macOS (`arm64` - Apple Silicon):** Standalone archive (`.tar.gz`).
- **Building from source:**
  Cligram requires **Go 1.25+** with **Cgo enabled** and a C++ compiler.
  ```bash
  git clone https://github.com/Kumneger0/cligram.git
  cd cligram
  make build
  # (Optional) install system-wide to /usr/local/bin:
  sudo make install
  ```
  *Note:* Native voice calling dependencies are downloaded automatically during `make build`.
- **Windows Support:** While not natively supported, you can run Cligram using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/).

---

### 2. Optional Desktop Utilities (Linux)

- **File Picker (`ctrl + a` in input):** Cligram uses `zenity` (GNOME) or `kdialog` (KDE) to open a graphical file dialog when attaching files.
- **Media & Link Opener:** Cligram uses `xdg-open` (`xdg-utils`) to open links and downloaded media in your default desktop applications.
