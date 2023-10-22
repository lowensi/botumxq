const Discord = require('discord.js');//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
         //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);
    } //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Anıyoruz.')//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5