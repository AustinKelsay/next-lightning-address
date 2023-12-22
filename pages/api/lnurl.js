import runCors from "@/utils/cors";

export default function handler(req, res) {
    if (!runCors(req, res)) return;
    
    const metadata = [
        ["text/plain", "Sample LNURL-PAY endpoint"]
    ];
    const response = {
        callback: `${process.env.BACKEND_URL}/api/callback`,
        maxSendable: 100000000, // milisatoshis
        minSendable: 1000,      // milisatoshis
        metadata: JSON.stringify(metadata),
        tag: "payRequest"
    };
    res.status(200).json(response);
}