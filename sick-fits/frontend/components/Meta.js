// Meta component to take care of all the meta
import Head from 'next/head';

const Meta = () => (
  <Head>
    {/* make sure we are using utf eight */}
    <meta charSet='UTF-8' />
    {/* allow us to have responsive design */}
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link ref='shortcut' href='/static/favicon.png' />
    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    <title>Sick Fits</title>
  </Head>
);

export default Meta;
