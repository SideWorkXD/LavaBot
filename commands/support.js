const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
      const supportServerLink = "https://discord.gg/BsdfHF6r2M";
      const instaLink = "https://www.instagram.com/ig.billo";
      const twitterLink = "https://twitter.com/BilloXd";
      const youtubeLink = "https://www.youtube.com/@iambilloxd";
      const embed = new EmbedBuilder()
        .setColor("#b300ff")
        .setAuthor({
          name: "Support Server",
          iconURL:
            "https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&",
          url: "https://discord.gg/BsdfHF6r2M",
        })
        .setDescription(
          `<:discordverify:861292720324476968> **Join our Discord server for support and updates:**\n- *Discord* - ${supportServerLink}\n\n <a:diamond:859462733233782815> **Follow us on:**\n- *Instagram* - ${instaLink}\n- *Twitter* - ${twitterLink}\n- *YouTube* - ${youtubeLink}`,
        )
        .setImage(
          "https://media.discordapp.net/attachments/1230408029191540807/1232262395867693156/standard_1.gif?ex=6651afc9&is=66505e49&hm=1bc7d9abf84252e15004d2b6a677bc05b7bcfb59fc24b2ea1c993a704cc801d7&=&width=550&height=194",
        )
        .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
