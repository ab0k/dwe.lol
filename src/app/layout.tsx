import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { geistSans } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "dwe.lol",
  description: "Cartão de perfil pessoal que reúne todos os links importantes em um só lugar. Acesse facilmente mídias sociais, projetos e conteúdo por meio desta página elegante e intuitiva.",
  keywords: [
    "bio links",
		"profile card",
		"social media",
		"personal website",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>
            {children}
          </main>

          <Toaster richColors closeButton />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}