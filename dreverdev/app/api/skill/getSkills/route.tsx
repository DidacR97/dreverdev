import { NextResponse } from 'next/server'
import { useSkill } from "@/hooks/useSkill"

export async function GET() {
    const { getAll } = useSkill();
    const experiences = await getAll();
    return NextResponse.json(experiences);
}