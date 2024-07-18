import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

export async function GET() {
    return NextResponse.json({ message: "Let's play user!" })
}

export async function POST(request: Request) {
    try {
        const prisma = new PrismaClient();

        const { pseudo } = await request.json();

        if (!pseudo) {
            return NextResponse.json({ message: "Pseudo is required" }, { status: 400 });
        }

        const result = await prisma.user.create({
            data: {
                pseudo: pseudo
            }
        })

        return NextResponse.json({ message: "New user created with the id ${result.id}" })
    } catch (err) {
        return NextResponse.json({ error: err })
    }
}