---
order: 2
title: Installation
description: How to install and run cligram.
icon: rocket
---

# Installation

### 1. Quick Install (Recommended)

Install the latest release of Cligram on Linux or macOS with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/Kumneger0/cligram/main/install.sh | bash
```

The script automatically detects your operating system and architecture, downloads the latest release, and places the binary in your local environment.

---

### 2. Pre-Built Binaries & Packages

You can also download pre-built binaries and native packages directly from [GitHub Releases](https://github.com/Kumneger0/cligram/releases):

- **Linux:** Standalone archives (`.tar.gz`) or native packages (`.deb`, `.rpm`, `.apk`) for `x86_64` and `arm64`.
- **macOS:** Standalone archives (`.tar.gz`) for Apple Silicon (`arm64`) and Intel (`x86_64`).
- **Windows:** Supported via [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/).

---

### 3. Building from Source

To compile Cligram directly from source code, refer to the [BUILD.md guide on GitHub](https://github.com/Kumneger0/cligram/blob/main/BUILD.md).

---

### 4. Optional Desktop Utilities (Linux)

- **File Picker (`ctrl + a` in input):** Cligram uses `zenity` (GNOME) or `kdialog` (KDE) to open a graphical file dialog when attaching files.
- **Media & Link Opener:** Cligram uses `xdg-open` (`xdg-utils`) to open links and downloaded media in your default desktop applications.
