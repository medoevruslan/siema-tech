import z from 'zod';

export const answerSchema = z.object({
  a: z.string().min(1),
  b: z.string().min(1),
  c: z.string().min(1),
  d: z.string().min(1),
});
export const quizSchema = z.array(
  z.object({
    answers: answerSchema,
    completed: z.boolean(),
    correct: answerSchema.keyof(),
    id: z.string().min(1),
    price: z.number(),
    question: z.string().min(3),
  })
);

export type Quiz = z.infer<typeof quizSchema>;
