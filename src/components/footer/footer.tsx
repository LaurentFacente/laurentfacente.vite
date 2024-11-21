import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='block_logo'>
        <p className='footer_text'>
          © 2024 LaurentFacente.dev. All rights reserved.
        </p>
      </div>
      <div className='socials'>
        {/* Insérer des SVGs ou des images pour les icônes sociales ici */}
        <svg
          className='social_icon'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          {/* Icône exemple - à remplacer par les vraies données */}
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 3v4h14V3M4 21h16V8H4v13zM8 10h8v11H8V10z'
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
