import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, address, phone, description, urgency } = await req.json();

    if (!name || !email || !address) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "meloovesminecraft@gmail.com",
            subject: "New Contact Form Submission",
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Unit Number:</strong><br/>${address}</p>
                <p><strong>Phone:</strong><br/>${phone}</p>
                <p><strong>Issue description:</strong><br/>${description}</p>
                <p><strong>Issue urgency:</strong><br/>${urgency}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}