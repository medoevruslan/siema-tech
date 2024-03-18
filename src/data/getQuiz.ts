import { Quiz } from '@/schema/quiz.schema'

import quiz from './data.json'

export const getQuiz = () => quiz as Quiz[];
