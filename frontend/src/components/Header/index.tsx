import logo from '../../assets/img/logo-dsmeta.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por <a href="https://github.com/filipegallodev" target="_blank" rel="external">@FilipeGalloDev</a>
        </p>
      </div>
    </header>
  )
}

export default Header;
