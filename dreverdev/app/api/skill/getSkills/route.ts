import { NextResponse } from 'next/server'
import { getAll } from "@/database/controllers/skill"

export async function GET() {
    const skills = await getAll();
    return NextResponse.json(skills);
}