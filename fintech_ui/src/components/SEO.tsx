import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description = "Empowering businesses with next-gen technology solutions from custom software to AI-driven platforms.", 
  name = "Valkano Alfaaz Technologies", 
  type = "website" 
}: SEOProps) {
  const fullTitle = `${title} | ${name}`;
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
    </Helmet>
  );
}
