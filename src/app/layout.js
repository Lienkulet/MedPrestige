import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
    title: "HealthPoint - Advanced Healthcare Made Personal",
    description:
        "Professional healthcare services with personalized care for every patient.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}