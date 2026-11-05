---
order: 9
title: FAQ
description: Frequently asked questions.
icon: book
---

# FAQ

#### What platforms are supported?
Cligram provides pre-built binaries for Linux (`amd64` archives, `.deb`, `.rpm`, `.apk`) and macOS (Apple Silicon `arm64`). Intel macOS (`amd64`) can build from source. Windows is supported via [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/).

#### Can I use multiple Telegram accounts?
Yes! Cligram fully supports multiple accounts. You can hot-swap between accounts live inside the app using the **Account Switcher Modal** (`ctrl + a` when the input is not focused) or manage accounts from your shell with `cligram account` and `cligram account --add`.

#### Where is my session data stored?
All session data and account configurations are stored locally on your machine under `~/.cligram/` (with individual accounts under `~/.cligram/accountN/`).
