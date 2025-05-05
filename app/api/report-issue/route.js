import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
    const body = await request.json();
    const client = await clientPromise; 
    const db = client.db("issues");
    
    const issueData = {
        ...body,
        status: 'new',
        createdAt: new Date(),
        updatedAt: new Date()
    };
    
    const result = await db.collection('issues').insertOne(issueData);
    
    return NextResponse.json({ 
        message: 'Issue report submitted successfully', 
        issueId: result.insertedId 
    }, { status: 201 });
    
    } catch (error) {
        console.error('Error in report-issue API:', error);
        return NextResponse.json({ 
            message: 'Failed to submit issue report' 
        }, { status: 500 });
    }
}