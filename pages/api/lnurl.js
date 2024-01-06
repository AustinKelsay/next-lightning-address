import { runMiddleware, corsMiddleware } from "@/utils/middleware";

export default async function handler(req, res) {
    await runMiddleware(req, res, corsMiddleware);

    const metadata = [
        ["text/plain", "Sample LN-ADDRESS endpoint"]
    ];
    const response = {
        callback: `${process.env.BACKEND_URL}/api/callback/bitcoinplebdev`,
        maxSendable: 100000000, // milisatoshis
        minSendable: 1000,      // milisatoshis
        metadata: JSON.stringify(metadata),
        tag: "payRequest"
    };
    res.status(200).json(response);
}
