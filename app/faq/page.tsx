import Image from "next/image";

import Nav from "../components/nav";

import './faq.css'

export default function Faq() {
  return (
    <main id="faq-page">
      <section id="section-faq">
        <Image
          src='/logo_mates.png'
          width={100}
          height={100}
          alt='Logo of Mates'
        />
        <header id="title-container-faq">
          <h1 id="title-faq">FAQ</h1>
        </header>

        <article id="article-faq">
          <h2 id="article-title">Pourquoi l'application Mates ne fonctionne-t-elle pas ?</h2>
          <p id="article-text">Ah, la fameuse question ! En ce moment, Mates est en train de prendre un petit somme bien merite apres avoir eu un petit coup de fatigue. Nous avons aussi entendu dire qu’il s’essaie à la meditation zen avant de revenir en pleine forme. Soyez patients, et n’oubliez pas de lui envoyer de bonnes ondes !</p>
        </article>
        <article id="article-faq">
          <h2 id="article-title">Puis-je toujours trouver des joueurs même si l’application ne marche pas ?</h2>
          <p id="article-text">Malheureusement, même les meilleurs joueurs ne peuvent pas faire apparaître des partenaires de jeu avec un simple coup de baguette magique… ou avec un bouton 'Matchmacking'. En attendant que Mates se reveille, nous vous conseillons d’essayer la methode antique : les rencontres en face-à-face et les invitations pour une partie de jeu de societe ! 😉</p>
        </article>
        <article id="article-faq">
          <h2 id="article-title">Que dois-je faire si je rencontre un bug en utilisant Mates ?</h2>
          <p id="article-text">Ah, les bugs ! C’est un peu comme des petits monstres caches dans notre code. Si vous en rencontrez un, imaginez qu’il est en train de faire la fete avec ses amis et qu’il a oublie de nous prévenir. Envoyez-nous un message et nous promettons de les attraper et de les mettre en vacances forcees.</p>
        </article>
        <article id="article-faq">
          <h2 id="article-title">Mates propose-t-il des conseils pour les joueurs en herbe pendant cette periode d’indisponibilite ?</h2>
          <p id="article-text">Bien sur ! Voici quelques conseils pour les aventuriers du jeu :</p>
          <ul>
            <li id="article-text">1- Ne vous laissez pas distraire par les charmes d’un canape confortable (même si c’est tentant).</li>
            <li id="article-text">2- Explorez des jeux de société vintage et decouvrez les secrets du papier et du carton.</li>
            <li id="article-text">3- Prenez le temps de vous entraîner à faire des blagues incroyablement mauvaises, car chaque bon joueur a besoin d’un bon sens de l’humour !</li>
          </ul>
        </article>
        <article id="article-faq">
          <h2 id="article-title">Quand Mates sera-t-il de nouveau operationnel ?</h2>
          <p id="article-text">Mates est comme une star de cinéma en pause : il est occupe à se refaire une beaute et à se preparer pour son grand retour. Nous ne pouvons pas encore donner de date précise, mais nous vous promettons que l’attente en vaudra la peine ! En attendant, amusez-vous et n’oubliez pas que la vraie partie se passe parfois dans le monde reel !</p>
        </article>
      </section>
      <Nav />
    </main>
  );
}
