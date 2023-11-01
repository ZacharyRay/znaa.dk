import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/Zachonrobot.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Om mig',
  description:
    'Jeg hedder Zachary, og er webudvikler fra Nyborg. Jeg er far, og så har jeg en masse andre interesser.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Om Mig: Zachary - webudvikler, musiker og far

          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            Hej, og velkommen til min side! Jeg hedder Zachary. Min profession er webudvikler og så er jeg fra Nyborg, hvor jeg også er opvokset. Men jeg er lidt mere end det; jeg er også en dedikeret far, hygge-musiker, og historienørd!
            </p>
            <p><strong>Min professionelle rejse</strong></p>
            <p>
            Til daglig arbejder jeg hos Mobile Industrial Robots i Odense. Her arbejder jeg som webudvikler og projektleder på diverse web-platforme. Noget jeg virkelig elsker! Derudover har jeg en række interesser, der spænder fra programmering til verdenshistorie, rumforskning og lasergravering. Min nysgerrighed, driver mig til altid at søge nye udfordringer og løsninger, både i mit arbejde og i livet generelt.
            </p>
            <p><strong>Min mission</strong></p>
            <p>
            Min professionelle mission er at gøre den digitale verden mere tilgængelig, transparent og mindre forvirrende for virksomheder. Jeg har set mange virksomheder blive tilbudt over-komplicerede webløsninger, dårlig service og endeløse SEO analyser, der ikke gør andet end at tømme bankkontoen. Det kunne jeg godt tænke mig at ændre på. Jeg er altid meget transparens, bund ærlig ønsker altid alle det bedste.
            </p>
            <p><strong>Mine værdier</strong></p>
            <p>
            Passion: Hvad enten det er at kode, synge i et rock band eller tilbringe med min familie, gør jeg det med hele mit hjerte!
Nysgerrighed: Jeg tror på livslang læring. Verden er et fascinerende sted, fyldt med næsten alt for mange spændende ting at lære om.
Integritet: For mig handler det om at gøre det rigtige, selv når ingen ser det. Det betyder at være ærlig, transparent og retfærdig i alle aspekter af livet.

            </p>
            <p><strong>Tak</strong></p>
            <p>Tak fordi du kiggede ind for at lære mig lidt bedre at kende. Lad os tage en snak om, hvad jeg kan hjælpe dig med.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
         
            <SocialLink href="https://instagram.com/zacharyaagesen/" icon={InstagramIcon} className="mt-4">
              Følg på Instagram
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/zachary-aagesen-90329094/" icon={LinkedInIcon} className="mt-4">
              Connect på LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:zacharyaagesen@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              zacharyaagesen@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
