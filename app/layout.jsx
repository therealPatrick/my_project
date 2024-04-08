import React from 'react'
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: "myhome | find the perfect rental",
    description: "find the pefect home",
    keywords: "rental, find rentals, find properties"
}


const MainLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}

export default MainLayout