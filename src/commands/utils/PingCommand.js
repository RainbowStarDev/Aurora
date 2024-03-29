import { Command, MessageEmbed } from '../../utils/structures/index.js'

export default class PingCommand extends Command {
  constructor() {
    super({
      data: {
        name: 'ping',
        description: 'Shows to you my current ping and shard.',
        permissions: undefined,
        options: [{
          name: 'option',
          description: 'Choose if you want to see the status of every shards',
          type: 3,
          required: false,
          choices: [{
            name: 'shards',
            value: 'shards'
          }]
        }]
      },
      category: 'utils'
    })
  }

  execute(ctx) {
    const option = ctx.args.get('option')
    switch (option?.value) {
      case 'shards': {
        ctx.reply('heatbeat_ping', {
          content: `Testing`,
          ephemeral: true
        })
      }
      default: {
        const embed = new MessageEmbed()
        embed.setDefaultColor('DEFAULT')
        embed.setDescription(`${ctx.getBotEmoji('heatbeat_ping')} **Ping:** ${(ctx.client.ws.ping).toFixed(2)}ms!\n${ctx.getBotEmoji('computer')} **Shard:** ${ctx.client.shard.ids}/${ctx.client.shard.count}`)
        ctx.send({
          embeds: [embed.build()],
          ephemeral: true
        })
      }
    }
  }
}
