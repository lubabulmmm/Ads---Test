import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

// In-memory user data (dummy)
let users: User[] = [
  { id: "1", username: "user1", email: "zeze@gmail.com", password: "password1" },
  { id: "2", username: "user2", email: "user2@example.com", password: "password2" },
];

// Function to add a new user (used for registration)
export function addUser(newUser: User) { // Specify the type for newUser
  users.push(newUser);
}

// NextAuth configuration
export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = users.find(
          (user) =>
            (user.email === credentials?.email || user.username === credentials?.email) &&
            user.password === credentials?.password
        );
      
        if (user) {
          return { id: user.id, email: user.email, name: user.username };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});
