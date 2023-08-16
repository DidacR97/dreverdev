import { NextResponse } from 'next/server'
import { useExperience } from "@/hooks/useExperience"

export async function PUT(request: Request) {
    const req = await request.json();
    const { update } = useExperience();
    const experiences = await update(req.id,req.params);
    return NextResponse.json(experiences);
}