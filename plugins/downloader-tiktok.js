import axios from "axios"
import fetch from "node-fetch"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
 if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZSNayJdDb/`
    await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
    m.reply(md)
    let spas = "                "
    let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/tiktok?apikey=YT:LORENZOBOTMD&url=${text}`)
    let f = await res.json()
    let json = f.result
	let cap = `${spas}*「 T I K T O K 」*

*📛Author:* ${json.nickname}
*📒Title:* ${json.description}

${footer}`
conn.sendMessage(m.chat, { video: { url: json.video }, caption: cap }, { quoted: m})
};
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

export default handler

