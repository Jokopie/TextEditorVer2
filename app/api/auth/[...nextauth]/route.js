import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  jwt: {
    encryption: true,
    signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,  
    encryptionKey: process.env.JWT_ENCRYPTION_KEY, 
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          console.log(user);
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {email: user.email, username: user.username};

          // return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.username = user.username; 
      }
      return token;
    },
    async session(session, token) {
      // console.log(session);
      // console.log(token);
      if (token) {
        session.user.email = token.email;
        session.user.username = token.username;
      }
        
      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
