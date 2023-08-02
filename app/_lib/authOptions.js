import CredentialsProvider from "next-auth/providers/credentials";
import { firebaseAuth, firebaseApp, firebaseConfig } from "./firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        location: { label: "Location", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          //TODO: authorize with firebase

          const userCredential = await signInWithEmailAndPassword(
            firebaseAuth,
            credentials.email,
            credentials.password
          );

          if (userCredential.user) return Promise.resolve(userCredential.user);
        } catch (error) {
          console.error("firebase auth error", error);
          return Promise.resolve(null);
        }
      },
    }),
  ],

  // pages: {
  //   signIn: "../_component/SignUp",
  // },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
