import { FormType } from '@/types/index.d';

export default {
  addActivity(state: any, payload: FormType) {
    state.activityList.push(payload)
  },
}
