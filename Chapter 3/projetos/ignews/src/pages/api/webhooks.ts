import { NextApiRequest, NextApiResponse } from "next";

export default function Webhooks(req: NextApiRequest, res: NextApiResponse) {
	console.log("Evento recebido!");

	res.status(200).json({ msg: true });
}
