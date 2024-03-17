import quiz from './data.json'

export type Quiz = {
  answers: Answer
  correct: keyof Answer
  disabled?: boolean
  price: string
  question: string
}

type Answer = {
  a: string
  b: string
  c: string
  d: string
}

export const getQuiz = () => {
  return quiz as Quiz[]
}
