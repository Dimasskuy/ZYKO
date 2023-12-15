import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
if (!args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://www.instagram.com/reel/Co18PSBAmkh/?igshid=MmJiY2I4NDBkZg==`
let res = await fetch(`https://new-api-lorenzo.cyclic.app/api/download/instagram?apikey=YT:LORENZOBOTMD&url=${args[0]}`)
let data = await res.json()
let json = data.result
let cap = `Title: ${json.title}\n${footer}`
conn.sendMessage(m.chat, { video: { url: json.url }, caption: cap }, { quoted: m})
};
handler.help = ['igdl', 'instagram']
handler.tags = ['downloader']
handler.command = /^(igdl|instagram|ig)$/i
handler.limit = true
export default handler