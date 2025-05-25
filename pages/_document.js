import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="themepaa" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="keywords" content="Jensen - Software Solutions" />
        <meta name="description" content="Jensen - Software Solutions" />
        {/* title */}
        <title>Jensen Miers: Software Founder</title>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        {/* theme css */}
        <link href="assets/css/style.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const toggle = document.getElementById('dark-mode-toggle');
                if (toggle) {
                  toggle.addEventListener('change', function() {
                    document.body.classList.toggle('dark-mode', this.checked);
                  });
                }
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
