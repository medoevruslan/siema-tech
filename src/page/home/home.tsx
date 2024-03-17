import ImageHand from '@/assets/hand 1.png'
import ImageHand2x from '@/assets/hand 1@2x.png'
import { Container } from '@/components/container/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './home.module.css'

export const Home = () => {
  return (
    <section className={s.hero}>
      <Container className={s.container}>
        <picture>
          <source srcSet={`${ImageHand}, ${ImageHand2x} 2x`} />
          <img alt={'hero image'} src={ImageHand} />
        </picture>
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
