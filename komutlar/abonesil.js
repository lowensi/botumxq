let Discord = require("discord.js")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let database = require("quick.db")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let ayarlar = require("../ayarlar.json")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => {
let aboneyetkilisi = await database.fetch(`aboneyetkilisi.${message.guild.id}`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonelog = await database.fetch(`abonelog.${message.guild.id}`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
if(!abonerol) return message.channel.send(`Abone rolü ayarlanmamış! Ayarlamak İçin r!abone-rol @Rol`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!abonelog) return message.channel.send(`Abone log kanalı ayarlanmamış! Ayarlamak İçin r!abone-log #kanalismi`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!aboneyetkilisi) return message.channel.send(`Abone yetkili rolü ayarlanmamış! Ayarlamak İçin r!abone-y-rol @rol`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(aboneyetkilisi)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  if(!message.mentions.users.first()) return message.channel.send(`Bir Üye Etiketle!`)
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  await(abonekisi.roles.remove(abonerol))
  message.channel.send(`Kullanıcıdan abone rolünü başarıyla aldın :white_check_mark: `)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const embed = new Discord.MessageEmbed()
  .setTitle(`Abone Rolü Alındı!`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolünü Alan Kişi:`, `Adı:${message.author.tag} İD:${message.author.id}`, true)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .addField(`Abone Rolü Alınan   Kişi`, `${user}`, true)
  .addField(`Mesaj linki`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`, true)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor(`BLUE`)
  .setFooter(`${client.user.username} Abone Sistemi`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.guild.channels.cache.get(abonelog).send(embed)
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abonesil'],//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'asil'
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}

