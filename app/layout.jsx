import React from 'react'
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';


export const metadata = {
    title: "myhome | find the perfect rental",
    description: "find the pefect home",
    keywords: "rental, find rentals, find properties"
}


const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html lang='en'>
                <body>
                    <Navbar />
                    <main>{children}</main>
                </body>
            </html>
        </AuthProvider>
    )
}

export default MainLayout