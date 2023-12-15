import fetch from 'node-fetch';
import { FormData, Blob } from 'formdata-node';
import { fileTypeFromBuffer } from 'file-type';
import { ToZombi } from '../lib/zyko.js'

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) {
        throw 'Tidak ada media yang ditemukan';
    }
    let media = await q.download();
    
    const result = await ToZombi(media);
    
    if (!result) {
        throw 'Terjadi kesalahan saat mengonversi gambar ke zombie.';
    }
    
    const tag = `@${m.sender.split('@')[0]}`;
    
    return conn.sendMessage(m.chat, {
        image: result,
        caption: `Request by: ${tag}`,
        mentions: [m.sender]
    }, {
        quoted: m
    });
}

handler.help = ["jadizombie"].map(v => v + " (Balas foto)");
handler.tags = ["internet"];
handler.command = /^(jadizombie)$/i;
handler.limit = true;
export default handler;

