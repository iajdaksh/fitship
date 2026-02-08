import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs" 

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null

        const adminEmail = process.env.ADMIN_EMAIL
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

        if (credentials.email !== adminEmail) return null

        const isValid = bcrypt.compareSync(
          credentials.password,
          adminPasswordHash!
        )

        if (!isValid) return null

        return {
          id: "admin",
          email: adminEmail,
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
}
