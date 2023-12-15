import fetch from 'node-fetch'
import cheerio from "cheerio"
import { fetchUser } from '../lib/zyko.js'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `🚩 *Example:* ${usedPrefix+command} zzyko_04`
let res = await fetchUser(text)
let cap = `*/ STALKING TIKTOK \\*

Username: ${res.username}
Fullname: ${res.fullName}
Bio: ${res.bio}
Likes: ${res.likes}
Followers: ${res.followers}
Following: ${res.following}

${global.footer}`
conn.sendMessage(m.chat, { image: { url: res.profileImage }, caption: cap }, { quoted: m})
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalker']
handler.command = /^(tiktokstalk)$/i
handler.limit = true 
export default handler
