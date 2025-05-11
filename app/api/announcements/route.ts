import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db("announcements");
		const announcements = await db
			.collection("announcements")
			.find({})
			.toArray();
		const data = announcements.map((doc) => ({
			...doc,
			_id: doc._id.toString()
		}));
		return NextResponse.json(announcements);
	} catch (error) {
		console.error("Failed to fetch announcements", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}