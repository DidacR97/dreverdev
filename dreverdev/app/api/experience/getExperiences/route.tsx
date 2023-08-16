import { NextResponse } from 'next/server'
import { getAll } from "@/database/controllers/experience"

export async function GET() {
    const experiences = await getAll();
    return NextResponse.json(experiences);
}