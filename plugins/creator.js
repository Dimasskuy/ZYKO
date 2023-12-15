import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ZYKO MD\nNICKNAME:👑 Owner ZYKO MD\nORG:ZYKO MD\nTITLE:soft\nitem1.TEL;waid=6282257529886:+62 822-5752-9886\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://www.youtube.com/@zDimassAjaa\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:freefiremax12d@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Dimass\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 24-11-2006\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
