import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compare } from "bcrypt";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [

        CredentialsProvider({

            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "erkandemir@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                })
                if (!user) {
                    return null;
                }

                const passMatch = await compare(credentials?.password, user?.password || "");

                if (!passMatch) {
                    return null;
                }

                return {
                    id: `${user.id}`,
                    email: user.email, // brasi Eklenmeli Email Alıyorsun Ama Email Degeri Yok sadece id vardı ozaman id alıcaktın
                }

            }
        }),
    ],


    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    username: user.email
                }
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.email
                }
            }
        }
    }
}