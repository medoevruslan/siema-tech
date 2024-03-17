import { OptionContainer } from '@/components/option-container/option-container'

import s from './price-section.module.css'

type Props = {
  prices: number[]
}
export const PriceSection = ({ prices }: Props) => {
  return (
    <div className={s.container}>
      {prices.length &&
        prices.map(price => (
          <OptionContainer className={s.price} key={price} textClassName={s.text}>
            ${price.toLocaleString('en-US')}
          </OptionContainer>
        ))}
    </div>
  )
}
