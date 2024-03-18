import ImageHand from '@/assets/hand.png';
import ImageHand2x from '@/assets/hand@2x.png';
import { Container } from '@/components/container/container';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

import s from './home.module.css';

export function Home() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className={clsx(s.hero, isMobile && s.mobile)}>
      <Container className={s.container}>
        <img
          alt={'hero image'}
          className={s.heroImage}
          srcSet={`${ImageHand}, ${ImageHand2x} 2x`}
        />
        <div className={s.heroHeading}>
          <Typography className={s.heading} mobile={isMobile} variant={'headline'}>
            Who wants to be
            <br />a millionaire?
          </Typography>
          <Button
            as={'a'}
            className={s.startBtn}
            fullwidth={isMobile}
            href={'/game'}
            variant={'primary'}
          >
            <Typography variant={'button'}>Start</Typography>
          </Button>
        </div>
      </Container>
    </section>
  );
}
