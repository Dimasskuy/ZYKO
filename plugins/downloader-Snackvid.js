import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
import { Snackvid } from '../lib/zyko.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://s.snackvideo.com/p/i7nONwj0`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    m.reply(md)
    let spas = "                "
    let res = await Snackvid(text)
	let cap = `${spas}*「 S N A C K  」*

${footer}`
conn.sendMessage(m.chat, { video: { url: res.without_watermark }, caption: cap }, { quoted: m})
};
handler.help = ['snackvid'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(snackvid)$/i
handler.limit = true
export default handler
