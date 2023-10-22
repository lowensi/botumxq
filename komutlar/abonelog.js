let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`Bir kanal etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonelog #kanal`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  database.set(`abonelog.${message.guild.id}`, log.id)//Electra Code , Telif Hakları//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5 Vardır, https://discord.gg/mMMpTt5
  message.channel.send(`Abone kanalı başarıyla ${log} olarak ayarlandı.`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['abone-log'],//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
  name: 'abonelog'
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonelog #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5