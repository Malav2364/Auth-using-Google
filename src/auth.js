import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {getUserByEmail} from './data/users'
import { get } from "node:https";
import { error } from "node:console";

export const {
    handlers : {GET, POST},
    auth,
    signIn,
    signOut

} = NextAuth({
    session : {
        strategy  :  "jwt"
    },
    secret : process.env.AUTH_SECRET,
    providers : [
        CredentialsProvider({
            async authorize(credentials) {
                if(credentials == null) return null;
                try{
                    const user = getUserByEmail(credentials?.email);
                    if (user) {
                        const isMatched = user?.password === credentials?.password
                        if (isMatched) {
                            return user;
                        } else{
                            throw new Error("Check Your Credentials")
                        }
                    } else {
                        throw new Error("User Not Found")
                    }
                } catch(error){
                    throw new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId : process.env.CLIENT_ID,
            clientSecret : process.env.CLIENT_SECRET,
            authorization : {
                params : {
                    prompt : "consent",
                    access_type : "offline",
                    response_type : "code"
                }
            }
        })
    ]
})
