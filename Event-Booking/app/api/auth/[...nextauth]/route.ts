import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          name: "user name",
          id: 1,
          username: "example@email.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
