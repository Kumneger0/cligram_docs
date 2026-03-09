---
order: 2
title: Installation
description: How to install and run cligram.
icon: rocket
---

# Installation

### 1. Download or Build cligram

- **Pre-built binaries:** [Download from releases page](https://github.com/Kumneger0/cligram/releases) (Linux, macOS).
- **Build from source:** See this [guide](https://github.com/Kumneger0/cligram/blob/main/install.md) for instructions.
- **Windows Support:** While not officially supported, you can try running cligram using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/).

### 2. Using Docker

```bash
docker run --rm -it -v cligram_data:/root/.cligram \
  kumneger/cligram:latest
```

This persists your session.

**Note on File Attachments:** When using Docker, cligram runs in an isolated environment and cannot directly access files from your host machine. To attach a file, you first need to copy it into the running Docker container using the `docker cp` command. For example:

```bash
docker cp /path/to/your/file.jpg <container_id>:/root/
```

Once the file is copied, you can then attach it from within cligram.
