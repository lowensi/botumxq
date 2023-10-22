let database = require("quick.db")
let ayarlar = require("../ayarlar.json")
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abone-y-rol @rol`)
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id)
  message.channel.send(`Abone yetkilisi başarıyla ${rol} olarak ayarlandı.`)
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/VcfpUgtajB
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-y-rol'],
  perm: 0
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {
  name: 'abone-yetkili-rol'
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.play = {
  kullanım: '!abone-y-rol @rol',
  açıklama: 'Abone Yetkili Rolünü Ayarlarsınız',
  kategori: 'Abone'
}
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5