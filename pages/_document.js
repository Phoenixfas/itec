import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="IT, Innovation, Exhibition, Conference, Tech" />
          <meta name="author" content="Innovative Tech Expo & Conference" />
          <link rel="canonical" href="https://itec-it.vercel.app/" />
          {/* <!-- Add Open Graph tags for social media sharing --> */}
          <meta property="og:title" content="ITEC - Innovative Tech Expo & Conference" />
          <meta property="og:description" content="Innovative Tech Expo & Conference" />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:url" content="https://itec-it.vercel.app/" />
          <meta property="og:type" content="website" />
          {/* <!-- Add Twitter Card tags for social media sharing --> */}
          <meta name="twitter:title" content="ITEC - Innovative Tech Expo & Conference" />
          <meta name="twitter:description" content="Innovative Tech Expo & Conference" />
          <meta name="twitter:image" content="/logo.png" />
          <meta name="twitter:card" content="summary_large_image" />
          {/* <!-- Add Favicon --> */}
          <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
