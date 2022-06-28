import Stripe from "stripe";

import axios from "axios";

export const stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
	apiVersion: "2020-08-27",
	appInfo: {
		name: "Ignews",
		version: "0.1.0",
	},
});

export const stripeApi = axios.create({
	baseURL: "http://localhost:1337/",
});
