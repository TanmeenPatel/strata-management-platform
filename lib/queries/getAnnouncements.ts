import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";

export async function getAnnouncements() {
	const client = await clientPromise;
	const db = client.db("announcements");
	const announcements = await db
		.collection("announcements")
		.find({})
		.toArray();
	return announcements.map((doc) => ({
		...doc,
		_id: doc._id.toString()
	}));
}