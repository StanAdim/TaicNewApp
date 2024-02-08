type UserCredential = {
    email: string,
    password: string
}
type User = {
    id: number,
    name:string,
    email: string,
}
type UserInfo = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}


export const useAuthStore = defineStore('auth', () => {
    const user = ref < User | null>(null)
    const isLoggedIn = computed(() => !!user.value)
    const userError = ref <any>(null)

    //Fetch User
    async function fetchUser() {
        const {data,error} = await useApiFetch('/api/user');
        if(data.value){
            user.value = data.value as User
        }
        userError.value = error.value?.statusCode
        // console.log(error)
        return {
            data,error
        }
    }
    //Register User
    async function register(info: UserInfo){
        await useApiFetch('/sanctum/csrf-cookie');
        const registerRespose = await useApiFetch('/auth/register',{
          method: 'POST',
          body: info as UserInfo
        });
        // console.log(registerRespose)
        navigateTo('/guest/login')
        return registerRespose;
    }
    //Login User
    async function login(credentials: UserCredential){
        await useApiFetch('/sanctum/csrf-cookie');
        const loginResponse = await useApiFetch('/auth/login',{
          method: 'POST',
          body: credentials as UserCredential
        });
        await fetchUser()
        navigateTo('/auth/dashboard')
        return loginResponse;
    }
    async function logout(){
        await useApiFetch('/auth/logout',{
            method: 'POST'
        })
        user.value = null
        navigateTo('/guest/login')
    }
  
    return { user, login, fetchUser, isLoggedIn, userError,logout,register }
  })