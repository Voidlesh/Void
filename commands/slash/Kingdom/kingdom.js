const { EmbedBuilder, Embed } = require("discord.js");
const { ensure_user_kingdom } = require("./../../../handlers/functions");

module.exports = {
  name: "kingdom",
  description: "Shows information about kingdoms",
  type: 1,
  options: [],
  permissions: {
    DEFAULT_MEMBER_PERMISSIONS: "SendMessages",
  },
  run: async (client, interaction, config) => {

    let user = interaction.guild.members.catch.get(interaction.targetId);
    let data = client.kingdom.get(`${interaction.targetId}`);

    if (!client.kingdom.get(`${interaction.targetId}`)) {
      return interaction.reply({
        embeds: [
          new EmbedBuilder()
          .setTitle("You don't have a kingdom")
          .setDescription("First create a kingdom by using the `/createkingdom` command.")
          .setColor(client.wrongcolor)
        ],
      });
    }else {
        ensure_user_kingdom;
        interaction.reply({ embeds: [new EmbedBuilder()
        .setTitle(`${user.name}'s Kingdom`)
        .setColor(client.color)
        .addFields(
            { name: "Level", value: `${data.level}`, inline: true},
            { name: "Defence", value: `${data.defence}`, inline: true},
            { name: "Wheat", value: `${data.wheat}`, inline: true},
            { name: "Wood", value: `${data.wood}`, inline: true}
        )] });
    }
    } 
  };
