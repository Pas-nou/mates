import Link from "next/link"
import Image from "next/image"

import './nav.css'

export default function Nav() {
    return (
        <nav id='navigation'>
            <ul>
                <li id="nav-home">
                    <Link href="/" >
                        <Image
                            src='/nav-icones/icone_home.png'
                            width={50}
                            height={50}
                            alt="icone en forme de maison"
                        />
                    </Link>
                </li>
                <li id="nav-heart">
                    <Link href="/boom" >
                        <Image
                            src='/nav-icones/icone_coeur.png'
                            width={50}
                            height={50}
                            alt="icone en forme de coeur"
                        />
                    </Link>
                </li>
                <li id="nav-controller">
                    <Link href="/manette" >
                        <Image
                            src='/nav-icones/icone_manette.png'
                            width={120}
                            height={120}
                            alt="icone en forme manette"
                            id="icone-controller"
                        />
                    </Link>
                </li>
                <li id="nav-profil">
                    <Link href="/profil" >
                        <Image
                            src='/nav-icones/icone_profil.png'
                            width={50}
                            height={50}
                            alt="icone en forme de personne"
                        />
                    </Link>
                </li>
                <li id="nav-faq">
                    <Link href="/faq" >
                        <Image
                            src='/nav-icones/icone_info.png'
                            width={50}
                            height={50}
                            alt="icone en forme de loupe"
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}