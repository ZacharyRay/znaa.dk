import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'
import '@/styles/tailwind.css'


export const ga = () => {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
  )
}

export const metadata = {
  title: {
    template: '%s - Zachary Aagesen',
    default:
      'Zachary Aagesen - Webudvikler, far, Nyborgenser, og meget mere.',
  },
  description:
    'Jeg hedder Zachary, og er webudvikler fra Nyborg. Jeg er far, og så har jeg en masse andre interesser.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
   
    <html lang="dk" className="h-full antialiased" suppressHydrationWarning>
      
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-W9MJ9QS98D" />
      <Script strategy='afterInteractive' id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-W9MJ9QS98D');
        `}
      </Script>
  
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
