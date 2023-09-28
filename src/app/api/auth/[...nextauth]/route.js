
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"


export const authOptions = {
    
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
        
          async authorize(credentials) {
            
            // Add logic here to look up the user from the credentials supplied
            const {email, password} = credentials
            console.log(credentials)
           const user = {id: 1}
           return user
          
          }
        })
      ],

    pages: {
        signIn: '/login'
    }
  }
  const handler = NextAuth(authOptions)
  export {handler as GET, handler as POST}