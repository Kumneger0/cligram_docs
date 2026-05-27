---
order: 4
title: Multi-Account
description: Managing multiple Telegram accounts in cligram.
icon: users
---

# Multi-Account Management

cligram supports multiple Telegram accounts, allowing you to switch between them easily without logging out.

### Adding a New Account

To add a new account, run:

```bash
cligram account --add
```

This will:
1. Create a new session directory (e.g., `account2`).
2. Automatically trigger the login flow for the new account.
3. Once logged in, this account will be saved for future use.

### Switching Between Accounts

You can switch between your existing accounts using the `account` command:

```bash
cligram account
```

An interactive menu will appear showing all active accounts on your device. Use the arrow keys to navigate and press **Enter** to select the account you want to use.

### Starting with a Specific Account

If you want to start cligram with a specific account directly, use the `-a` or `--account` flag followed by the account's directory name:

```bash
cligram -a account2
```

### How It Works

- **Storage**: Each account is stored in its own subdirectory within `~/.cligram/` (e.g., `~/.cligram/account1`, `~/.cligram/account2`).
- **Default Account**: By default, cligram uses the first account it finds in your session directory. If no accounts exist, it defaults to `account1`.
- **Isolation**: Each account has its own local database, session files, and configuration, ensuring complete isolation between them.
