---
order: 7
title: Troubleshooting
description: Common issues and how to solve them.
icon: code
---

# Troubleshooting

- **File picker does not open**: Make sure the message input is focused, then press `ctrl + a` again. Update to the latest version if it persists.
- **Messages not marked read**: Set `chat.readReceiptMode` to `instant`.
- **Others cannot see typing**: Set `chat.sendTypingState` to `true`.
- **Debugging**: If you encounter errors, you can view the logs by running `cligram log` or checking the log file at `/tmp/cligram.log`. Use these logs when reporting issues.
- **Where is data stored**: App data and session live under `~/.cligram/`.
