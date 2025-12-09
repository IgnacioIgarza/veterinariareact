import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import LoreVete from '../assets/LoreVete1.jpg';

function Layout({ children }) {
  // SEO NATIVO con useEffect
  useEffect(() => {
    document.title = "Veterinaria a domicilio | Tienda de mascotas";
   
    // Función que actualiza meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag('description', 'Veterinaria a domicilio en CABA. Ozonoterapia. Explora el catálogo de productos de tienda de mascotas y cuida a tus mascotas con los mejores productos.');
    updateMetaTag('keywords', 'verinaria a domicilio, veterinario a domicilio, ozonoterapia, aceite ozonidicado, tienda de mascotas, products para mascotas');
    updateMetaTag('author', '@webmaster');
    updateMetaTag('robots', 'index, follow');

    // Open Graph para redes sociales
    updateMetaTag('og:title', 'Veterinaria a domicilio Ozonoterapia', 'property');
    updateMetaTag('og:description', 'Veterianaria a domicilio. Ozonoterapia. Explora el catálogo productos para mascotas.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:image', window.location.origin + {LoreVete}, 'property');
    updateMetaTag('og:url', window.location.origin, 'property');
    updateMetaTag('og:site_name', 'Veterinaria a domicilio', 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Veterinaria a domicilio');
    updateMetaTag('twitter:description', 'Veterianaria a domicilio. Ozonoterapia. Explora el catálogo productos para mascotas.');
    updateMetaTag('twitter:image', window.location.origin + {LoreVete});

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

  }, []);

  return (
    <LayoutContainer>
      <Header>
        <Navbar />
      </Header>
      
      <Main >
        {children}
      </Main>
      
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutContainer>
  );
}

export default Layout;

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
`;