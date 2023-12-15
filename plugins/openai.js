import fetch from "node-fetch"
import axios from "axios"
import { gpt } from '../lib/zyko.js'
let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "Input Teks"
    try {
            await m.reply(wait)
            let res = await gpt(text)
            await m.reply(res.reply)
    } catch (e) {
        throw eror
    }
}
handler.help = ['ai', 'openai', 'zy'].map(v => v + ' <text>')
handler.tags = ['openai'];
handler.command = /^(ai|openai|zy)$/i;
handler.limit = 2
export default handler;





