import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { Command } from 'imperial-discord';

const cmdData = new SlashCommandBuilder()
  .setName('avatar')
  .setDescription(
    'Get the avatar URL of the selected user, or your own avatar.'
  )
  .addUserOption((option) =>
    option.setName('target').setDescription("The user's avatar to show")
  );

const cmdExecuter = async (interaction: CommandInteraction) => {
  const user = interaction.options.getUser('target');
  if (user) {
    return interaction.reply(
      `${user.username}'s avatar: ${user.displayAvatarURL({
        format: 'png',
        size: 1024,
        dynamic: true,
      })}`
    );
  }
  return interaction.reply(
    `Your avatar: ${interaction.user.displayAvatarURL({
      format: 'png',
      size: 1024,
      dynamic: true,
    })}`
  );
};

export const cmd = new Command(cmdData, cmdExecuter);
