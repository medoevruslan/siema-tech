import quiz from './data.json'

export type Quiz = {
  answers: Answer
  completed: boolean
  correct: keyof Answer
  id: string
  price: number
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
