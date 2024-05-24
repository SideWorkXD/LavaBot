const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const embed = new EmbedBuilder()
        .setColor("#0099ff")
        .setTitle("<:SupportsCommands:1243577824477188197> **Basic Commands**")
        .addFields(
          {
            name: "<a:All_connect:1230899360976470160> Ping",
            value: "Check the bot's latency",
          },
          {
            name: "<a:music:1241029884902641778> Play",
            value: "Clear the song queue of this server",
          },
          {
            name: "<:discordverify:861292720324476968> Support",
            value: "Support Server Links",
          },
          {
            name: "<a:utility:1241028673797099520> Help",
            value: "Display all the helps command",
          },
        )
        .setImage(
          "https://media.discordapp.net/attachments/1155424116887797790/1222196420241653882/standard_1.gif?ex=6615561d&is=6602e11d&hm=24c48480bcee4c72ee4358ddb3b28142c9445a5496ec64f472240a55eeda6206&=",
        );

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
