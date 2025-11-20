import 'normalize.css';
import './globals.css';
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: 'Planets Fact',
  description: 'A simple app to learn about the planets in our solar system',
  icons: {
    icon: "/icons/favicon.ico"
  }
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${antonio.className} ${leagueSpartan.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
