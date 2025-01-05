import { create } from "zustand";

interface AuthState{
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token ?: string;
    user ?: {
        name : string;
        email : string;
    }

    //Vamos a definir algunas acciones en Zustand
    login:(email:string, password:string) => void;
    logout:() => void;
}


//set algo que vamos a disparar 
export const useAuthStore = create<AuthState>()( (set) => ({
    status :  'checking',
    token: undefined,
    user: undefined,

    login:(email:string, password:string) => {
        set({
            status:'authenticated',
            token:'ABC123',
            user:{
                name: 'John Doe',
                email: email
            }
        })
    },
    logout:() => {
        set({
            status:'unauthenticated',
            token: undefined,
            user: undefined
        })
    }
}))