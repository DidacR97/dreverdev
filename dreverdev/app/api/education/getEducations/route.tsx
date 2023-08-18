import { NextResponse } from 'next/server'
import { getAll } from "@/database/controllers/education"

export async function GET() {
    const educations = await getAll();
    return NextResponse.json(educations);
}