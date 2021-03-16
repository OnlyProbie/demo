import { FormType } from '@/types/index.d';

export default {
  tableList(state: any) {
    return (search: string) => {
      state.activityList.filter((data: FormType) => !search || data.name.toLowerCase().includes(search.toLowerCase()));
    }
  },
}
