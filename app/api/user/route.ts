import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

interface ErrorResponse {
    error: string;
}

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        console.log('et coucou')
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error });
    }
}

export async function POST(request: Request) {
    try {
        const prisma = new PrismaClient();

        const { pseudo, avatarId, platformId, gameId } = await request.json();

        if (!pseudo) {
            return NextResponse.json({ message: "Pseudo is required" }, { status: 400 });
        }

        const result = await prisma.user.create({
            data: {
                pseudo: pseudo,
                avatarId: avatarId ? parseInt(avatarId) : null,
                platforms: {
                    create: platformId ? { platformId: parseInt(platformId) } : [],
                },
                games: {
                    create: gameId ? { gameId: parseInt(gameId) } : [],
                },
            }
        })
        await prisma.$disconnect();

        return NextResponse.json({ message: `New user created with the id ${result.id}` })
    } catch (err: any) {
        const errorResponse: ErrorResponse = {
            error: err.message || "Something went wrong"
        };

        return NextResponse.json(errorResponse, { status: 500 });
    }
}