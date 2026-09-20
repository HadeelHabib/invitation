import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'أفراح آل مرزوق | زفاف يوسف ونورة',
  description: 'دعوة زفاف يوسف بن محمد ناصر مرزوق ونورة بنت فهد سعد العتيبي — مساء الخميس ٢٠ أغسطس ٢٠٢٦ — قصر الماسة للاحتفالات بجدة',
  keywords: ['زفاف', 'عرس', 'مرزوق', 'دعوة زفاف', 'أفراح', 'يوسف ونورة', 'العتيبي', 'جدة'],
  authors: [{ name: 'عائلتا مرزوق والعتيبي' }],
  openGraph: {
    title: 'أفراح آل مرزوق | زفاف يوسف ونورة',
    description: 'بمناسبة سعيدة نزف إليكم دعوة زفاف يوسف ونورة — ٢٠ أغسطس ٢٠٢٦ — قصر الماسة بجدة',
    locale: 'ar_SA',
    type: 'website',
    siteName: 'أفراح آل مرزوق',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'أفراح آل مرزوق | زفاف يوسف ونورة',
    description: 'شرفونا بحضوركم — ٢٠ أغسطس ٢٠٢٦ — قصر الماسة للاحتفالات بجدة',
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'theme-color': '#D6336C',
    'msapplication-TileColor': '#D6336C',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#D6336C',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' style='stop-color:%23FF4081'/><stop offset='100%25' style='stop-color:%23D6336C'/></linearGradient></defs><circle cx='32' cy='32' r='28' fill='url(%23g)'/><text x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' fill='%23FFF5F8' font-family='Georgia, serif' font-size='30' font-weight='bold'>م</text></svg>" />
      </head>
      <body className="font-ibm antialiased bg-cream-50 text-ink-dark selection:bg-gold-300/40">
        {children}
      </body>
    </html>
  )
}
