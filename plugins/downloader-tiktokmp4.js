//APIKEY
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = conn.parseMention(tag)
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

let view = await fetch(`https://saipulanuar.ga/api/download/tiktokview?url=${args[0]}`)
let don = await view.json()
let jsoon = don.result
let done = `▣\n┆➵ Author : ${jsoon.author}\n┆➵ Play : ${jsoon.playCount}\n┆➵ Publish : ${jsoon.createdAt}\n┆➵ Likes : ${jsoon.likesCount}\n┆➵ Command : ${jsoon.commentCount}\n┆➵ Shares : ${jsoon.shareCount}\n⟡ ━━┄┄┄┈┈┈\nDescription:\n${jsoon.description}`
conn.reply(m.chat, 'Proses', m)
await conn.sendHydrated2(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, done, json.video, 'https://instagram.com/al.0fficial_/', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@aldiganzoffc', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Audio', `.tikaudio ${args[0]}`]], m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i
export default handler
