export interface IUser {
  name: string
  age: number
}

interface IState {
  token: string
  userData: IUser | null
}

export const useUserStore = defineStore({
  id: 'userStore',
  state: (): IState => ({
    token: '',
    userData: null
  }),
  actions: {
    fetchUserData() {
      setTimeout(() => {
        this.userData = { name: 'codermey', age: 18 }
      }, 10 * 1000)
    }
  },
  persist: true
})
