
const BACKEND_URL = process.env.BACKEND_URL
import runCors from "@/utils/cors";

export default async function handler(req, res) {
    if (!runCors(req, res)) return;
    
    const { slug } = req.query

    if (!slug || slug === 'undefined') {
        res.status(404).json({ error: 'Not found' })
        return
    }

    if (slug === 'bitcoinplebdev') {
        const metadata = [
            ["text/plain", "Sample LNURL-PAY endpoint"]
        ];

        res.status(200).json({ 
            callback: `${BACKEND_URL}/api/callback/bitcoinplebdev`,
            maxSendable: 1000000,
            minSendable: 1000,
            metadata: JSON.stringify(metadata),
            tag: 'payRequest'
        })
        return
    }
}