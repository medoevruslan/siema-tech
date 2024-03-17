import { OptionContainer } from '@/components/option-container/option-container'
import clsx from 'clsx'

import s from './price-section.module.css'

type Price = {
  completed: boolean
  id: string
  value: number
}

type Props = {
  currentOptionId: string
  prices: Price[]
}
export const PriceSection = ({ currentOptionId, prices }: Props) => {
  return (
    <div className={s.container}>
      {prices.length &&
        prices.map(({ completed, id, value }) => (
          <OptionContainer
            className={clsx(s.price, completed && s.completed, currentOptionId === id && s.active)}
            key={value}
            textClassName={s.text}
          >
            ${value.toLocaleString('en-US')}
          </OptionContainer>
        ))}
    </div>
  )
}
