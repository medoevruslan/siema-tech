import ImageHand from '@/assets/hand.png'
import ImageHand2x from '@/assets/hand@2x.png'
import { Container } from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './home.module.css'

export const Home = () => {
  return (
    <section className={s.hero}>
      <Container className={s.container}>
        <img alt={'hero image'} srcSet={`${ImageHand}, ${ImageHand2x} 2x`} />
        <div>
          <Typography className={s.heading} variant={'headline'}>
            Who wants to be
            <br />a millionaire?
          </Typography>
          <Button as={'a'} href={'/game'} variant={'primary'}>
            <Typography variant={'button'}>Start</Typography>
          </Button>
        </div>
      </Container>
    </section>
  )
}
