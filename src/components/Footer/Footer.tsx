import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
  &copy;2024 Desenvolvido por 
  <a style={{color:'green'}} href="https://www.linkedin.com/in/mariana-gomes-0a9a87109/" target="_blank" rel="noopener noreferrer">
    Mariana Gomes
  </a>. Todos os direitos Reservados.
</p>

    </footer>
  );
};

export default Footer;

