import { redirect } from 'next/navigation';

import Image from "next/image";

import './profil.css'

// * Déclaration des types

interface User {
  id: number;
  pseudo: string;
  avatarId: number | null;
  platforms: { platformId: number }[];
  games: { gameId: number }[];
}

interface Avatar {
  id: number,
  url: string,
}

interface Platform {
  id: number,
  name: string,
}

interface Game {
  id: number,
  name: string,
  categorie: string,
}

// * Récupération des données

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

// * Récupération des utilisateurs

const getUsers = async () => {
  const res = await fetch(`http://localhost:3000/api/user`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};


// * Modification d'un utilisateur

async function onSubmit(formData: FormData) {
  "use server";

  const rawFormData = {
    pseudo: formData.get("pseudo"),
    avatarId: formData.get("avatar"),
    platformId: formData.get("platform"),
    gameId: formData.get("game"),
  };

  const result = await fetch("http://localhost:3000/api/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });

  if (result.status === 200) {
    redirect("/boom");
  }
}

export default async function Profil() {

  // * récupération des avatars.

  const avatars = await getAvatar();

  // * Récupération des jeux

  const games = await getGames();

  // * Récupération des plateformes

  const platforms = await getPlatform();

  // * Récupération des utilisateurs

  const users = await getUsers()

  const lastUser = users.findLast((user: User) => user.id !== null)

  const avatarUser = avatars.find((avatar: Avatar) => avatar.id === lastUser.avatarId)

  const platformUser = platforms.find((platform: Platform) =>
    (lastUser.platforms || []).some((p: { platformId: number }) => p.platformId === platform.id)) || { name: "" };

  const gameUser = games.find((game: Game) =>
    (lastUser.games || []).some((g: { gameId: number }) => g.gameId === game.id)) || { name: "", categorie: "" };

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
          placeholder="Quel est ton pseudo?"
          defaultValue={lastUser.pseudo || ""} />
        <label htmlFor="avatar" />
        <select
          id="avatar"
          name="avatar"
          defaultValue={avatarUser?.id || ""}
        >
          <option value="">{avatarUser?.name || "Sélectionne ton avatar"}</option>
          {avatars.map((avatar: { id: number, name: string, url: string }) => (
            <option key={avatar.id} value={avatar.id}>{avatar.name}</option>
          ))}
        </select>
        <label htmlFor="platform" />
        <select
          id="platform"
          name="platform"
          defaultValue={platformUser.id || ""}
        >
          <option value="">{platformUser.name || "Sur quelle plateforme tu joues?"}</option>
          {platforms.map((platform: { id: number, name: string }) => (
            <option key={platform.id} value={platform.id}>{platform.name}</option>
          ))}
        </select>
        <label htmlFor="categorie" />
        <select
          id="categorie"
          name="categorie"
          defaultValue={gameUser.id || ""}
        >
          <option value="">{gameUser.categorie || "Ta categorie preferee?"}</option>
          {games.map((game: { id: number, categorie: string }) => (
            <option key={game.id} value={game.id}>{game.categorie}</option>
          ))}
        </select>
        <label htmlFor="game" />
        <select
          id="game"
          name="game"
          defaultValue={gameUser.id || ""}
        >
          <option value="">{gameUser.name || "Ton jeu prefere?"}</option>
          {games.map((game: { id: number, name: string }) => (
            <option key={game.id} value={game.id}>{game.name}</option>
          ))}
        </select>
        <div id="button-container-homepage">
          <a href='/boom' id='button-homepage'>Actualisation</a>
        </div>
      </form>
    </main>
  );
}
