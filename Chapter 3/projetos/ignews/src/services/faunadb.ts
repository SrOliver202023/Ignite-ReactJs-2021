import { Client } from "faunadb";
import { query as q } from "faunadb";

export const faunaDBConnection = new Client({
	secret: process.env.FAUNADB_KEY,
	domain: "db.us.fauna.com",
});

export async function registerEmail(email: String): Promise<Boolean> {
	// FQL Syntax

	try {
		await faunaDBConnection.query(
			q.If(
				q.Not(q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email)))),
				q.Create(q.Collection("users"), { data: { email } }),
				q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email)))
			)
		);

		return true;
	} catch (err) {
		console.log(err);

		return false;
	}
}
