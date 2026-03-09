---
order: 8
title: FAQ
description: Frequently asked questions.
icon: book
---

# FAQ

#### What platforms are supported?
cligram provides pre-built binaries for Linux and macOS. Windows is not officially supported, but you can try running cligram using [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/).

#### Can I use multiple Telegram accounts?
No, only a single Telegram account is supported at a time.

#### Does cligram support bots, groups, or media management?
Bot interaction is now supported (beta). Group chat is supported for writing messages, but you cannot view the full member list. Advanced media features are not yet implemented, but are planned for future releases.

#### Where is my session data stored?
Session data is stored in `~/.cligram/` on your system. If using Docker, a volume is used to persist this data.

#### How do I update cligram?
Download the latest release from the [releases page](https://github.com/Kumneger0/cligram/releases) or rebuild from source. If you are on Debian, Ubuntu, or Alpine Linux, you can upgrade to the latest version using `cligram upgrade`.
