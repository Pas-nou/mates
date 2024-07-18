import { redirect } from 'next/navigation';

import Image from "next/image";

import './config.css'

// * Récupération des avatars

const getAvatar = async () => {
  const res = await fetch(`http://localhost:3000/api/avatar`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Récupération des jeux/catégories

const getGames = async () => {
  const res = await fetch(`http://localhost:3000/api/game`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

// * Création d'un user 

async function onSubmit(formData: FormData) {
  "use server";

  const rawFormData = {
    name: formData.get("pseudo"),
  };

  const result = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rawFormData),
  });

  if (result.status === 400) {
    redirect("/");
  }
}

export default async function Configuration() {

  // * récupération des avatars.

  const avatars = await getAvatar();

  // * Récupération des jeux

  const games = await getGames();

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
      action={onSubmit}>
        <label htmlFor="pseudo"></label>
        <input
          id="pseudo"
          name="pseudo"
          type="text"
          placeholder="Quel est ton pseudo?" />
        <label htmlFor="avatar"></label>
        <select
          id="avatar"
          name="avatar">
          <option value="">Choisis ton avatar</option>
          {avatars.map((avatar: {id: number, name: string}) => (
            <option key={avatar.id} value={avatar.name}>{avatar.name}</option>
          )) }
        </select>
        <label htmlFor="plateform"></label>
        <select
          id="plateform"
          name="plateform">
          <option value="">Sur quelle plateforme tu joues?</option>
          <option value="PC">PC</option>
          <option value="PlayStation 5">PlayStation 5</option>
          <option value="Xbox One">Xbox One</option>
          <option value="PlayStation 4">PlayStation 4</option>
          <option value="Xbox Series S/X">Xbox Series S/X</option>
          <option value="Nintendo Switch">Nintendo Switch</option>
          <option value="iOS">iOS</option>
          <option value="Android">Android</option>
        </select>
        <label htmlFor="categorie"></label>
        <select
          id="categorie"
          name="categorie">
          <option value="">Tes categories preferees?</option>
          {games.map((game: {id: number, categorie: string}) => (
            <option key={game.id} value={game.categorie}>{game.categorie}</option>
          )) }
        </select>
        <label htmlFor="game"></label>
        <select
          id="game"
          name="game">
          <option value="">Tes jeux preferes?</option>
          {games.map((game: {id: number, name: string}) => (
            <option key={game.id} value={game.name}>{game.name}</option>
          )) }
        </select>
      </form>
      <div id="button-container-homepage">
        <a type='submit' href="/configuration" id='button-homepage'>Matchmaking</a>
      </div>
    </main>
  );
}
