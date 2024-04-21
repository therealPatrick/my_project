import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        // invoked on successful sign in
        async signIn({ profile }) {
            // 1. connect to database
            // 2. check if the user exists
            // 3. if not, the add user to the database
            // 4. Return true to allow sign in
        },
        // modifies the session object
        async session({ session }) {
            // 1. Get user from the database
            // 2. Assign the user id to the session
            // 3. Return session
        },
    },
}