---
order: 4
title: Multi-Account
description: Managing multiple Telegram accounts in cligram.
icon: users
---

# Multi-Account Management

Cligram supports multiple Telegram accounts with complete session isolation, allowing you to seamlessly hot-swap between accounts directly within the TUI or manage them via the CLI.

---

### In-App Account Switcher (Recommended)

You can switch accounts instantly while using Cligram without exiting or restarting:

1. Ensure the message input box is not actively focused (press **Tab** or **Esc** if needed).
2. Press **`ctrl + a`** to open the **Account Switcher Modal**.
3. Use the arrow keys (**↑ / ↓**) to select any account on your device and press **Enter** to hot-swap into that account immediately.

---

### Adding an Account In-App (Inline Auth Wizard)

You can log into a new Telegram account directly from within Cligram:

1. Open the Account Switcher Modal with **`ctrl + a`**.
2. Select **`+ Add Account`** and press **Enter**.
3. An inline authentication wizard will guide you through:
   - Entering your international phone number (e.g. `+1234567890`).
   - Entering the Telegram login verification code.
   - Entering your Two-Factor Authentication (2FA) password if enabled.
4. Once completed, the new account is saved and loaded immediately.

---

### CLI Account Management

You can also manage accounts from your shell:

#### Adding an Account via CLI
```bash
cligram account --add
```
Creates a new session directory (e.g., `account2`) and triggers the terminal authentication flow.

#### Switching Accounts via CLI
```bash
cligram account
```
Opens an interactive terminal selector showing all accounts on your device.

#### Launching with a Specific Account
To launch Cligram directly with a specific account:
```bash
cligram -a account2
# or
cligram --account account2
```

---

### How It Works

- **Storage**: Each account lives in its own subdirectory inside `~/.cligram/` (e.g., `~/.cligram/account1/`, `~/.cligram/account2/`).
- **Complete Isolation**: Each account maintains separate session credentials, message history, and download caches.
- **Default Account**: Cligram defaults to the first configured account on your system (`account1`).
