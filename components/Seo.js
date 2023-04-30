import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Abel M. Lugtu jr.',
  site_name: 'Abel M. Lugtu jr.',
  description: 'Your beloved software engineer.',
  url: 'https://abel-jr.vercel.app',
  image: '/abel-logo.svg',
  type: 'website',
  robots: 'follow, index',
};

export const Seo = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.site_name}`
    : meta.title;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={meta.image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${meta.url}${router.asPath}`} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
    </Head>
  );
};
