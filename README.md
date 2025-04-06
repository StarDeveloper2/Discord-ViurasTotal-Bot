# Star Development - Discord ViurasTotal Bot

<div align="center">
  <img src="https://www2.0zz0.com/2025/04/06/00/564239430.png" alt="star dev Logo" width="200"/>
  <br>
  <h3>📂 Advanced File Scanning Bot with VirusTotal Integration</h3>
  <p>A powerful and efficient bot designed to scan links and files for potential threats using the VirusTotal API, ensuring enhanced security for your community. With multi-language support, seamless integration into Discord, and a user-friendly interface, this bot provides real-time safety checks for links and files, allowing you to easily verify their integrity before sharing them.</p>
  
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Discord.js](https://img.shields.io/badge/discord.js-v14.11.0-7289da)
![Node.js](https://img.shields.io/badge/node.js-v16.x-43853d)
</div>

---

## 📋 Features

- **🚫 VirusTotal Link Scanning**: Scans URLs using VirusTotal's API and checks for malicious content.
- **🖱️ Modal URL Input**: Prompts users with a modal to enter URLs for scanning.
- **📝 Slash Commands Support**: Uses /viurastotal command for users to scan URLs directly.
- **📊 Embed Results**: Displays scan results in a detailed Embed (safe or malicious).
- **🗃️ Scan Log Channel**: Logs scan results (URL, status, user) to a designated channel.
- **⚠️ Custom Alerts**: Sends red alerts for malicious links and green alerts for safe ones.
- **🔄 Button Interaction**: Interactive buttons for users to trigger the URL scanning modal.
- **🌍 Multi-language Support**: Supports multiple languages based on the language config setting.
- **🔧 Custom Configurations**: Configurable settings like API key, channels, and language in config.js.
- **🔒 Guild-specific Commands**: Commands only work in the designated guilds, ensuring controlled usage.

## ⚙️ Configuration

The bot is configured through the `config.js` file:

```javascript
module.exports = {
    token: 'YOUR_BOT_TOKEN', // This is the bot's token. You get it from the Discord Developer Portal.
    virustotalApiKey: 'YOUR_VIRUSTOTAL_API_KEY', // This is the API key you get from VirusTotal after creating an account.
    language: 'YOUR_BOT_LANGUAGE', // Set the bot's language. Choose 'en' for English or 'ar' for Arabic.
    
    clientId: 'YOUR_CLIENT_ID', // This is your Discord application's client ID, found in the Discord Developer Portal.
    guildId: 'YOUR_GUILD_ID', // This is the Discord server (guild) ID where the bot is used.

    scanChannelId: 'YOUR_SCAN_CHANNEL_ID', // Channel ID for sending link scan results when button is clicked.
    logChannelId: 'YOUR_LOG_CHANNEL_ID' // This is the ID of the channel where the bot will log details of the scans.
};
```

## 🤖 Commands

| Command | Description |
|---------|-------------|
| `/viurastotal url=<URL>` | Scan a link using VirusTotal |

## 🏗️ Project Structure

```
.
├── index.js                     # Main entry point
├── config.js                    # Bot configuration
├── package.json                 # Project dependencies
├── start.bat                    # Batch file to start the bot
├── install.bat                  # Batch file for installing dependencies
└── languages/
    ├── en.js                    # English translations
    └── ar.js                    # Arabic translations
└── commands/
    └── viurastotal.js           # Command file for viurastotal

```

## 📋 How to get VirusTotal API Key
1. Go to [VirusTotal](https://www.virustotal.com).
2. Create an account or log in.
3. Navigate to your account settings and generate an API key.
4. Paste the API key into the `config.js` file under `virustotalApiKey`.


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🔗 Links

- [Discord Server](https://discord.gg/std)
- [Youtube Explanation](https://youtu.be/nZrGZTTsBC8?si=V9yUsYYNond0RqBy)
- [GitHub Repository](https://github.com/StarDeveloper2/Discord-ViurasTotal-Bot)

## ⭐ Credits

Developed with 💙 by [Star Development](https://discord.gg/std) 
