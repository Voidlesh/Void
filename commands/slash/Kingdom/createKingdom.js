const { EmbedBuilder, Embed } = require("discord.js");
const { ensure_user_kingdom } = require("./../../../handlers/functions");

module.exports = {
  name: "createkingdom",
  description: "Creates your own kingdom",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (client, interaction, config) => {

    if (client.kingdom.get(`${interaction.targetId}`)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setTitle("Kingdom already exists")
            .setDescription("You already have built a kingdom! Type `/kingdom` to see your kingdom stats.")
            .setColor(client.wrongcolor)
        ]
      })
    }

    ensure_user_kingdom;

    interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setTitle("Succesfully created Kingdom")
          .setColor(0x57f287)
          .setDescription("Your succesfully created your own kingdom. Type `/kingdom` to see some stats."), // TODO: ADD BUTTONS INSTEAD OF CMD
      ],
    });
  },
};
