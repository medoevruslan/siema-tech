import z from 'zod'

export const answerSchema = z.object({
  a: z.string().min(3),
  b: z.string().min(3),
  c: z.string().min(3),
  d: z.string().min(3),
})
export const quizSchema = z.object({
  answers: answerSchema,
  completed: z.boolean(),
  correct: answerSchema.keyof(),
  id: z.string().min(1),
  price: z.number(),
  question: z.string().min(3),
})

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
