import { FormType } from '@/types/index.d'

export default {
  add(content: any, payload: FormType) {
    content.commit('addActivity', payload)
  },
}
