const { SlashCommandBuilder } = require('discord.js');
const path = require('path');
const languageConfig = require(path.join(__dirname, '..', 'config.js')).language;

const lang = require(path.join(__dirname, '..', 'languages', `${languageConfig}.js`));

module.exports = {
  data: new SlashCommandBuilder()
    .setName('viurastotal')
    .setDescription(lang.viurastotalDescription)
    .addStringOption(option =>
      option.setName('url')
        .setDescription(lang.urlOptionDescription)
        .setRequired(true)
    ),
};
