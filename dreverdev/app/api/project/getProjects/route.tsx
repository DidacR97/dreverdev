import { NextResponse } from 'next/server'
import { getAll } from "@/database/controllers/project"

export async function GET() {
    const projects = await getAll();
    return NextResponse.json(projects);
}