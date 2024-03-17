import type {NextAuthConfig} from "next-auth"
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import credentials from "next-auth/providers/credentials";
import path from "path";
const credentialsConfig =  credentials({
    name:"Credentials",
    credentials:{
        username:{
            label:"User Name"
        }, password :{
            label: "Password",
            type:"password"
        }
    },
    async authorize(credentials){
        
        if(credentials.username==="sk"&& credentials.password==="123" )return {
            name:"Naman"
        }
        else
            return null
        
    }

    
})
const config ={
    providers:[Google, credentialsConfig],
  
} satisfies NextAuthConfig;


export  const {handlers, auth, signIn, signOut} = NextAuth(config)