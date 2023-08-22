import { NextResponse } from 'next/server'
import { sendMail } from '@/services/sendMail';

export async function POST(request: Request) {
    try {
        const {email, where, why} = await request.json();
        const status = sendMail(email, where, why);
        return NextResponse.json({ "nocida": "2" });
    } catch (error) {
        return NextResponse.json(error);
    }
}