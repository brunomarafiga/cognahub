// server/api/categorias.get.ts
import categoriasData from '~/assets/data/categorias.json'
import type { CategoriasData } from '~/types/api'

export default defineEventHandler((event): CategoriasData => {
  // Configura cabeçalho de cache HTTP para otimização de rede
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=86400')

  return categoriasData as CategoriasData
})
