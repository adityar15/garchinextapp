import Head from "next/head";
import React from "react";

export default function Meta({ description = "", url = "", title = "" }) {
  return (
    <Head>
      <meta name="description" content={description}></meta>
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:site" content={url}></meta>
      <title>{title}</title>

      <link rel="icon" href="http://localhost:3000/_next/image?url=https%3A%2F%2Fgarchi.s3.eu-west-2.amazonaws.com%2Fwhitelabel_assets%2FWhitelabelerLogo%2FWlabelLogo96T-1618570885.png&w=1920&q=75" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
