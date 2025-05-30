import clientPromise from "@/lib/mongodb";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const category = searchParams.get('category');

		const client = await clientPromise;
		const db = client.db("announcements");
		
		let query = {};
		if (category && category !== 'all') {
			query = { category };
		}

		const announcements = await db
			.collection("announcements")
			.find(query)
			.toArray();
			
		const data = announcements.map((doc) => ({
			...doc,
			_id: doc._id.toString()
		}));
		return NextResponse.json(data);
	} catch (error) {
		console.error("Failed to fetch announcements", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}