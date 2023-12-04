import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="UTF-8" />
          <meta name="keywords" content="Africa, Medical, Exhibition, Conference, Medicine" />
          <meta name="author" content="African Medical Exhibition & Conference" />
          <link rel="canonical" href="https://amec-upd.vercel.app/" />
          {/* <!-- Add Open Graph tags for social media sharing --> */}
          <meta property="og:title" content="AMEC - African Medical Exhibition & Conference" />
          <meta property="og:description" content="In the heart of Kigali, Rwanda, the African Medical Exhibition & Conference is your gateway to the future of healthcare in Africa. Join us for a transformative event that unites innovation, expertise, best minds and collaboration for a healthier continent." />
          <meta property="og:image" content="https://res.cloudinary.com/drp73bqti/image/upload/v1698617948/amec/other_rkwztj.png" />
          <meta property="og:url" content="https://amec-upd.vercel.app/" />
          <meta property="og:type" content="website" />
          {/* <!-- Add Twitter Card tags for social media sharing --> */}
          <meta name="twitter:title" content="AMEC - African Medical Exhibition & Conference" />
          <meta name="twitter:description" content="In the heart of Kigali, Rwanda, the African Medical Exhibition & Conference is your gateway to the future of healthcare in Africa. Join us for a transformative event that unites innovation, expertise, best minds and collaboration for a healthier continent." />
          <meta name="twitter:image" content="https://res.cloudinary.com/drp73bqti/image/upload/v1698617948/amec/other_rkwztj.png" />
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
