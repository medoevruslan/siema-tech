import ImageHand from '@/assets/hand.png'
import ImageHand2x from '@/assets/hand@2x.png'
import { Container } from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useGameContext } from '@/context/game.context'

import s from './game-over.module.css'

export const GameOver = () => {
  const { quiz, step } = useGameContext()

  const earned = step < 1 ? 0 : quiz[step].price

  return (
    <section className={s.gameOver}>
      <Container className={s.container}>
        <img alt={'hero image'} srcSet={`${ImageHand}, ${ImageHand2x} 2x`} />
        <div>
          <Typography variant={'question'}>Total score:</Typography>
          <Typography className={s.heading} variant={'headline'}>
            ${earned} earned
          </Typography>
          <Button as={'a'} href={'/game'} variant={'primary'}>
            <Typography variant={'button'}>Try Again</Typography>
          </Button>
        </div>
      </Container>
    </section>
  )
}
