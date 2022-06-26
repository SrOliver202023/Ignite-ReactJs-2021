import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { registerEmail } from "../../../services/faunadb";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			authorization: {
				params: {
					scope: "read:user",
				},
			},
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn(data) {
			const { email } = data.user;

			const result =
				(await registerEmail(String(email))) === true ? true : false;

			return result;
		},
	},
});
