import { useGameContext } from '@/context/game.context';
import clsx from 'clsx';

import s from './mobile-burger.module.css';

export function MobileBurger() {
  const { isMobileOpen, setIsMobileOpen } = useGameContext();

  return (
    <div
      className={clsx(s.container, isMobileOpen && s.open)}
      onClick={() => setIsMobileOpen(!isMobileOpen)}
    >
      <span className={s.line} />
      <span className={s.line} />
      <span className={s.line} />
    </div>
  );
}
