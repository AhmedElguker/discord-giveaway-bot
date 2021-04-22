// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('Check your DMs!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/ghaku/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setURL('https://github.com/ghaku/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/ghaku/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'Duration is stated in a number and a time variable.\nPrize can be anything but it has to be above one.')
            .addField('Example:', `${prefix}giveaway 10h $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as the prize.`)
                        .addField(`${prefix}media-giveaway [media] [duration] [prize]`, 'Media has to be an image/gif link. (In order for this to work the link has to start with either `http://` or `https://`.)\nDuration is stated in a number and a time variable.\nPrize can be anything but it has to be above one.')
            .addField('Example:', `${prefix}media-giveaway https://image.url/image.png 10h $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as the prize and https://image.url/image.png as the image.`)
            .setFooter('Made with 💖 and discord.js by ghaku', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
            }
        if (!message.guild) {
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/ghaku/discord-giveaway-bot')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setURL('https://github.com/ghaku/discord-giveaway-bot')
            .setColor('7289da')
            .setDescription(`You want to create a giveaway bot yourself?\n[Check out our Github page!](https://github.com/ghaku/discord-giveaway-bot)`)
            .addField(`${prefix}giveaway [duration] [prize]`, 'Duration is stated in a number and a time variable.\nPrize can be anything but it has to be above one.')
            .addField('Example:', `${prefix}giveaway 10h $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as the prize.`)
                        .addField(`${prefix}media-giveaway [media] [duration] [prize]`, 'Media has to be an image/gif link. (In order for this to work the link has to start with either `http://` or `https://`.)\nDuration is stated in a number and a time variable.\nPrize can be anything but it has to be above one.')
            .addField('Example:', `${prefix}media-giveaway https://image.url/image.png 10h $9.99 Nitro\nCreates a 10 hour long giveaway with '$9.99 Nitro' as prize and https://image.url/image.png as the image.`)
            .setFooter('Made with 💖 and discord.js by ghaku', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
