import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subas Nepali | Software Engineering & Cybersecurity Intern Portfolio",
  description:
    "Portfolio of Subas Nepali, 5th-semester BICTE student at Tribhuvan University and Cybersecurity Intern building secure, performant web apps with Next.js, React, and MySQL. Seeking software engineering internships.",
  openGraph: {
    title: "Subas Nepali | Software Engineering & Cybersecurity Intern Portfolio",
    description:
      "Portfolio of Subas Nepali, 5th-semester BICTE student at Tribhuvan University and Cybersecurity Intern building secure, performant web apps with Next.js, React, and MySQL. Seeking software engineering internships.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-neutral-950 text-neutral-200">
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light');}}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
