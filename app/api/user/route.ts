import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

interface ErrorResponse {
    error: string;
}

const prisma = new PrismaClient();

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error });
    }
}

// * Création d'un nouvel utilisateur

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

// * Suppression d'un utilisateur

export async function DELETE(request: Request) {
    try {
        const { userId } = await request.json();
        console.log("Received DELETE request with userId:", userId);

        if (!userId) {
            console.error("Error: Missing userId in request body");
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        const userExists = await prisma.user.findUnique({ where: { id: userId } });
        if (!userExists) {
            console.error(`Error: User with ID ${userId} does not exist`);
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        await prisma.user_Game.deleteMany({
            where: { userId: userId }
          });

          await prisma.user_Platform.deleteMany({
            where: { userId: userId }
          });

        await prisma.user.delete({
            where: { id: userId }
        });

        return NextResponse.json({ message: `User deleted successfully` });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

// * Modification des informations de l'utilisateur

export async function PUT(request: Request) {
    try {
        const { userId, pseudo, avatarId, platformIds, gameIds } = await request.json();

        if (!userId) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        // Fetch the user along with their current relations
        const userExists = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                games: true,
                platforms: true,
            },
        });

        if (!userExists) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Update the user
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                pseudo: pseudo || userExists.pseudo,
                avatarId: avatarId ? parseInt(avatarId) : userExists.avatarId,
                games: {
                    set: gameIds ? gameIds.map((gameId: number) => ({ gameId })) : userExists.games.map(g => ({ gameId: g.gameId })),
                },
                platforms: {
                    set: platformIds ? platformIds.map((platformId: number) => ({ platformId })) : userExists.platforms.map(p => ({ platformId: p.platformId })),
                },
            }
        });

        return NextResponse.json({ message: `User updated successfully`, user: updatedUser });
    } catch (err: any) {
        const errorResponse: ErrorResponse = {
            error: err.message || "Something went wrong"
        };

        return NextResponse.json(errorResponse, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

