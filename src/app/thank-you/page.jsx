import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Tak fordi du tilmeldte dig.',
  description: 'Jeg sender dig en email, hver gang jeg udgiver et nyt blogindlæg, udgiver et nyt projekt eller har noget interessant at dele, som jeg tror, ​​du gerne vil høre om. Du kan til enhver tid afmelde dig.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Tak fordi du tilmeldte dig."
      intro="Jeg sender dig en email, hver gang jeg udgiver et nyt blogindlæg, udgiver et nyt projekt eller har noget interessant at dele, som jeg tror, ​​du gerne vil høre om. Du kan til enhver tid afmelde dig."
    />
  )
}
