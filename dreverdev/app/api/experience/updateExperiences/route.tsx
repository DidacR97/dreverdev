import { NextResponse } from 'next/server'
import { update } from "@/database/controllers/experience";

export async function PUT(request: Request) {
    const req = await request.json();
    return NextResponse.json(await update(req.id,req.params));
}