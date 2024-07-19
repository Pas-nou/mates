import { redirect } from 'next/navigation';
import Image from "next/image";
import './user.css'

// * Récupération des avatars

const getAvatar = async () => {
  const res = await fetch(`http://localhost:3000/api/avatar`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Récupération des jeux/catégories

const getGames = async () => {
  const res = await fetch(`http://localhost:3000/api/game`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Récupération des plateformes

const getPlatform = async () => {
  const res = await fetch(`http://localhost:3000/api/platform`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Création d'un user 

async function onSubmit(formData: FormData) {
  "use server";

  const rawFormData = {
    pseudo: formData.get("pseudo"),
    avatarId: formData.get("avatar"),
    platformId: formData.get("platform"),
    gameId: formData.get("game"),
  };

  const result = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });

  if (result.status === 200) {
    redirect("/boom");
  }
}

export default async function User() {
  // * récupération des avatars.

  const avatars = await getAvatar();

  // * Récupération des jeux

  const games = await getGames();

  // * Récupération des plateformes

  const platforms = await getPlatform();

  return (
    <main id="configuration-page">
      <Image
        src='/logo_mates.png'
        width={100}
        height={100}
        alt='Logo of Mates'
      />
      <form
        id="input-container"
        action={onSubmit}
      >
        <label htmlFor="pseudo" />
        <input
          id="pseudo"
          name="pseudo"
          type="text"
          placeholder="Quel est ton pseudo?" />
        <label htmlFor="avatar" />
        <select
          id="avatar"
          name="avatar"
        >
          <option value="">Choisis ton avatar</option>
          {avatars.map((avatar: { id: number, name: string, url: string }) => (
            <option key={avatar.id} value={avatar.id}>{avatar.name}</option>
          ))}
        </select>
        <label htmlFor="platform" />
        <select
          id="platform"
          name="platform">
          <option value="">Sur quelle plateforme tu joues?</option>
          {platforms.map((platform: { id: number, name: string }) => (
            <option key={platform.id} value={platform.id}>{platform.name}</option>
          ))}
        </select>
        <label htmlFor="categorie" />
        <select
          id="categorie"
          name="categorie">
          <option value="">Tes categories preferees?</option>
          {games.map((game: { id: number, categorie: string }) => (
            <option key={game.id} value={game.id}>{game.categorie}</option>
          ))}
        </select>
        <label htmlFor="game" />
        <select
          id="game"
          name="game">
          <option value="">Tes jeux preferes?</option>
          {games.map((game: { id: number, name: string }) => (
            <option key={game.id} value={game.id}>{game.name}</option>
          ))}
        </select>
        <div id="button-container-homepage">
          <button type='submit' id='button-homepage'>Matchmaking</button>
        </div>
      </form>
    </main>
  );
}
