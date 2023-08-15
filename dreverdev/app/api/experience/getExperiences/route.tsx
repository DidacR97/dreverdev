import { NextResponse } from 'next/server'
import { useExperience } from "@/hooks/useExperience"

export async function GET() {
    const { getAll } = useExperience();
    const experiences = await getAll();
    return NextResponse.json(experiences);
}