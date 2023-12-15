import cheerio from "cheerio";
import fetch from "node-fetch";
import got from "got";
import axios from 'axios'
import { searchTemplates, capcutdl } from '../lib/zyko.js'
// ...

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

    let lister = [
        "search",
        "down"
    ];

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|");
    if (!lister.includes(feature)) return m.reply("*Example:*\n.capcut search|vpn\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v).join("\n"));

    if (lister.includes(feature)) {

        if (feature == "search") {
            if (!inputs) return m.reply("Input query link\nExample: .capcut search|vpn");
            await m.reply("wait"); // Ganti dengan pesan yang sesuai
            try {
                let res = await searchTemplates(inputs)
                let teks = res.map((item, index) => {
                    return `🔍 *[ RESULT ${index + 1} ]*

📢 *title:* ${item.title}
🌐 *url:* ${item.link}
🖼️ *image:* ${item.detail[0].imageSrc}
🔖 *name:* ${item.detail[0].link}
📅 *time:* ${item.detail[0].time}
📄 *template:* ${item.detail[0].template}
🎥 *video:* ${item.detail[0].videoSrc}
📝 *description:* ${item.detail[0].description}
`

                }).filter(v => v).join("\n\n________________________\n\n")
                await m.reply(teks)
            } catch (e) {
                await m.reply("eror"); // Ganti dengan pesan yang sesuai
            }
        }

        if (feature == "down") {
            if (!inputs) return m.reply("Input query link\nExample: .capcut app|link");
            await m.reply("wait"); // Ganti dengan pesan yang sesuai
            try {
                let item = await capcutdl(inputs)
                let cap = `🔍 *[ RESULT ]*

📢 *title:* ${item.title}
💡 *size:* ${item.size}

${footer} // Ganti dengan nilai yang sesuai
`
                conn.sendMessage(m.chat, { video: { url: item.url }, caption: cap }, { quoted: m })
            } catch (e) {
                await m.reply("eror"); // Ganti dengan pesan yang sesuai
            }
        }
    }
}


// ...

handler.help = ['capcut'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(capcut)$/i
handler.limit = 4
export default handler

/* New Line */
/*
BY LORENZOMD
BY ZYKO MD
*/