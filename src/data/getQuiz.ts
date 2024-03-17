import quiz from './data.json'

type Quiz = {
  answers: Answer
  correct: keyof Answer
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
