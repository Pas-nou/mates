const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function main() {
    const avatars = [
        { name: 'Avatar tout mignon 1', url: 'avatars/avatar(1).jpg' },
        { name: 'Avatar tout mignon 2', url: 'avatars/avatar(2).jpg' },
        { name: 'Avatar tout mignon 3', url: 'avatars/avatar(3).jpg' },
        { name: 'Avatar tout mignon 4', url: 'avatars/avatar(4).jpg' },
        { name: 'Avatar tout mignon 5', url: 'avatars/avatar(5).jpg' },
        { name: 'Avatar tout mignon 6', url: 'avatars/avatar(6).jpg' },
        { name: 'Avatar tout mignon 7', url: 'avatars/avatar(7).jpg' },
        { name: 'Avatar tout mignon 8', url: 'avatars/avatar(8).jpg' },
        { name: 'Avatar tout mignon 9', url: 'avatars/avatar(9).jpg' },
        {name: 'Avatar tout mignon 10', url: 'avatars/avatar(10).jpg' },
    ];

    const platforms = [
        { name: 'PC' },
        { name: 'PlayStation 5' },
        { name: 'Xbox One' },
        { name: 'PlayStation 4' },
        { name: 'Xbox Series S/X' },
        { name: 'Nintendo Switch' },
        { name: 'iOS' },
        { name: 'Android' },
    ];

    const games = [
        {
            name: 'Fortnite',
            categorie: 'Battle Royale',
        },
        {
            name: 'Minecraft',
            categorie: 'Sandbox',
        },
        {
            name: 'Overwatch',
            categorie: 'FPS',
        },
        {
            name: 'Call of Duty: Warzone',
            categorie: 'Battle Royale',
        },
        {
            name: 'League of Legends',
            categorie: 'MOBA',
        },
        {
            name: 'Valorant',
            categorie: 'FPS',
        },
        {
            name: 'Mortal Kombat 11',
            categorie: 'Fighting',
        },
        {
            name: 'Rainbow Six Siege',
            categorie: 'Tactical Shooter',
        },
        {
            name: 'Rocket League',
            categorie: 'Sports',
        },
        {
            name: 'Among Us',
            categorie: 'Social Deduction',
        },
        {
            name: 'Apex Legends',
            categorie: 'Battle Royale',
        },
        {
            name: 'Genshin Impact',
            categorie: 'Action RPG',
        },
        {
            name: 'Borderlands 3',
            categorie: 'Action RPG',
        },
        {
            name: 'NBA 2K22',
            categorie: 'TPS',
        },
        {
            name: 'Splatoon 2',
            categorie: 'TPS',
        },
        {
            name: 'Fall Guys: Ultimate Knockout',
            categorie: 'Battle Royale',
        },
        {
            name: 'Sea of Thieves',
            categorie: 'Action-Adventure',
        },
        {
            name: 'Warframe',
            categorie: 'TPS',
        },
        {
            name: 'Destiny 2',
            categorie: 'MMORPG',
        },
        {
            name: 'The Division 2',
            categorie: 'Action RPG',
        },
        {
            name: 'Phasmophobia',
            categorie: 'Horror',
        },
        {
            name: 'Dead by Daylight',
            categorie: 'Horror',
        },
        {
            name: 'World of Warcraft',
            categorie: 'MMORPG',
        },
        {
            name: 'Team Fortress 2',
            categorie: 'FPS',
        },
        {
            name: 'Counter-Strike: Global Offensive',
            categorie: 'FPS',
        },
        {
            name: 'Dota 2',
            categorie: 'MOBA',
        },
        {
            name: 'Smite',
            categorie: 'MOBA',
        },
        {
            name: 'Fortnite: Battle Royale',
            categorie: 'Battle Royale',
        },
        {
            name: 'Roblox',
            categorie: 'Sandbox',
        },
        {
            name: 'PlayerUnknown\'s Battlegrounds (PUBG)',
            categorie: 'Battle Royale',
        },
        {
            name: 'Halo: The Master Chief Collection',
            categorie: 'FPS',
        },
        {
            name: 'Rocket Arena',
            categorie: 'TPS',
        },
        {
            name: 'Spellbreak',
            categorie: 'Battle Royale',
        },
        {
            name: 'Brawlhalla',
            categorie: 'Fighting',
        },
        {
            name: 'Paladins',
            categorie: 'FPS',
        },
        {
            name: 'For Honor',
            categorie: 'Fighting',
        },
        {
            name: 'Monster Hunter: World',
            categorie: 'RPG',
        },
        {
            name: 'Terraria',
            categorie: 'Sandbox',
        }
    ];    

    // * Importing avatars

    for (const avatar of avatars) {
        await prisma.avatar.create({
            data: avatar,
        });
    }

    // * Importing plateforms

    for (const platform of platforms) {
        await prisma.platform.create({
            data: platform,
        });
    }

    // * Importing games

    for (const game of games) {
        await prisma.game.create({
            data: game,
        });
    }

    console.log('Avatars, Platforms and Games imported successfully!')
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });