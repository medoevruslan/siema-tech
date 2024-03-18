import React from 'react';

import ImageHand from '@/assets/hand.png';
import ImageHand2x from '@/assets/hand@2x.png';
import { Container } from '@/components/container/container';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { useGameContext } from '@/context/game.context';
import { useMediaQuery } from 'usehooks-ts';

import s from './game-over.module.css';

export function GameOver() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { isWin, quiz, step } = useGameContext();

  const earned = step < 1 ? 0 : isWin ? quiz[step] : quiz[step - 1].price;

  return (
    <section className={s.gameOver}>
      <Container className={s.container}>
        <img alt={'hero'} className={s.heroImage} srcSet={`${ImageHand}, ${ImageHand2x} 2x`} />
        <div>
          <Typography className={s.totalScore} mobile={isMobile} variant={'question'}>
            Total score:
          </Typography>
          <Typography className={s.heading} mobile={isMobile} variant={'headline'}>
            ${earned as React.ReactNode} earned
          </Typography>
          <Button as={'a'} href={'/game'} variant={'primary'}>
            <Typography mobile={isMobile} variant={'button'}>
              Try Again
            </Typography>
          </Button>
        </div>
      </Container>
    </section>
  );
}
