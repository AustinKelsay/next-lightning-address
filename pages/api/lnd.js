import axios from "axios"

const LND_HOST = process.env.LND_HOST;
const LND_MACAROON = process.env.LND_MACAROON;

export default async function handler(req, res) {
    try {
        const response = await axios.post(`${LND_HOST}/v1/invoices`, {
            value: req.body.amount,
            description_hash: req.body.description_hash
        }, {
            headers: {
                'Grpc-Metadata-macaroon': LND_MACAROON,
            }
        });

        res.status(200).json(response.data.payment_request);
    } catch (error) {
        // console.error(inspect(error, false, undefined, true));
        console.error('Error (server) fetching data from LND:', error.message);
        res.status(500).json({ message: 'Error fetching data' });
    }
}