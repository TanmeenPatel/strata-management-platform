import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    const { name, email } = await req.json();
    const client = await clientPromise;
    const db = await client.db("users");
    await db.collection('users').insertOne({name, email});
    (await cookies()).set("username", name, { maxAge: 60 * 60 * 24 * 365 });
    (await cookies()).set("email", email, { maxAge: 60 * 60 * 24 * 365 });
    return NextResponse.json({message:"user registered!"});
}