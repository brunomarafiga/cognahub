// server/api/quizzes/[id].get.ts
import testeSociais from '~/assets/data/teste_sociais.json'
import testeDados from '~/assets/data/teste_dados.json'
import testeProjetos from '~/assets/data/teste_projetos.json'
import type { QuizData } from '~/types/api'

const quizzesMap: Record<string, QuizData> = {
  sociais: testeSociais as QuizData,
  dados: testeDados as QuizData,
  projetos: testeProjetos as QuizData
}

export default defineEventHandler((event): QuizData => {
  const id = getRouterParam(event, 'id')

  if (!id || !(id in quizzesMap)) {
    throw createError({
      statusCode: 404,
      statusMessage: `Quiz '${id}' não encontrado. Os IDs válidos são: ${Object.keys(quizzesMap).join(', ')}.`
    })
  }

  // Configura cabeçalho de cache HTTP
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=86400')

  return quizzesMap[id]
})
