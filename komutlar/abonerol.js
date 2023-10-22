let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`Abone rolü başarıyla ${rol} olarak ayarlandı.`)
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: false,
  aliases: ['abone-rol'],//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  perm: 0
}
exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'abonerol'
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.play = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kullanım: '!abonerol @rol',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  açıklama: 'Abone Rolünü Ayarlarsınız',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: 'Abone'
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
