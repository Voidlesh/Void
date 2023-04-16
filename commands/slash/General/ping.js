const { EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "Replies with pong!",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (client, interaction, config, db) => {
    const msg = interaction.reply({
      embeds: [new EmbedBuilder().setTitle(`Pong! :ping_pong:`)],
      fetchReply: true,
    });
    const timestamp = msg.editedTimestamp
      ? msg.editedTimestamp
      : msg.createdTimestamp;
    const latency = `\`\`\`ini\n[ ${Math.floor(
      msg.createdTimestamp - timestamp
    )}ms ]\`\`\``;
    const apiLatency = `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\`\`\``;
    await interaction({
      embeds: [
        new EmbedBuilder()
          .addFields(
            { name: "API Latenz", value: apiLatency, inline: true },
            { name: "Meine Latenz", value: latency, inline: true }
          )
          .setTimestamp()
          .setColor(0x57F287), // NOT WORKING (TEST IT)
      ],
    });
  },
};
