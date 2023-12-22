import { bech32 } from 'bech32';
import runCors from "@/utils/cors";

function encodeLnurl(url) {
    const words = bech32.toWords(Buffer.from(url, 'utf8'));
    return bech32.encode('lnurl', words, 2000).toUpperCase();
}

export default function handler(req, res) {
    if (!runCors(req, res)) return;
    
    const originalUrl = `${process.env.BACKEND_URL}/api/lnurl`
    const encodedLnurl = encodeLnurl(originalUrl);

    res.status(200).json({
        lnurl: encodedLnurl
    })
}