import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
require('dotenv').config()

let cid = process.env.DISCORD_CLIENTID ? process.env.DISCORD_CLIENTID : "";
let csecret = process.env.DISCORD_SECRET? process.env.DISCORD_SECRET : "";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Discord],
})