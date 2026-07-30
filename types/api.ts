// types/api.ts

export interface CategoriaItem {
  titulo: string
  autor?: string
  descricao: string
  capa: string
  link: string
}

export type CategoriasData = Record<string, CategoriaItem[]>

export type QuestionType = 'AG' | 'MC' | 'VF' | string

export interface QuizQuestion {
  id: string
  disciplina: string
  tipo: QuestionType
  tipo_original_comentario?: string
  contexto?: string
  pergunta: string
  afirmacoes?: string[]
  vfStatements?: string[]
  opcoes: string[]
  resposta: string
}

export interface QuizData {
  title: string
  questions: QuizQuestion[]
}
