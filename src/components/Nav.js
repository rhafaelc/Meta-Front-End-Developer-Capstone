import { Link } from 'react-router-dom';
import logo from '../images/Logo.svg';

function Nav() {
  const listStyle = {
    padding: '9px 12px 9px 12px',
    margin: '0',
    flex: '1',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontFamily: 'Markazi Text, sans-serif',
    color: 'black',
    fontSize: '0.9em',
    fontWeight: 'bold',
  }

  return (
    <nav style={{ height: '96px' }}>
      <ul style={
        {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridGap: '10px',
          backgroundColor: 'white',
          color: 'black',
          listStyle: 'none',
          textAlign: 'center',
          margin: '0 0 0 0',
          padding: '20px 0 20px 0',
          position: 'fixed',
          top: '0',
          width: '100%',
          height: '72px',
          zIndex: '100',
        }
      }>
        <img src={logo} alt="logo" style={
          {
            gridColumn: '3 / span 2',
            width: '256px',
            height: 'auto',
            cursor: 'pointer',
          }
        } onClick={() => {
          window.location.href = '/';
        }} />
        <li style={
          {
            gridColumn: '5 / span 6',
            display: 'flex',
            padding: '10px',
          }
        }>
          <li style={listStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={listStyle}>
            <Link
              to="/"
              style={linkStyle}
              onClick={() => {
                window.scrollTo({
                  top: document.querySelector('#about').offsetTop,
                  behavior: 'smooth'
                });
              }}
            >
              About
            </Link>
          </li>
          <li style={listStyle}>
            <Link
              to="/"
              style={linkStyle}
              onClick={() => {
                window.scrollTo({
                  top: document.querySelector('#menu').offsetTop,
                  behavior: 'smooth'
                });
              }}
            >
              Menu
            </Link>
          </li>
          <li style={listStyle}><Link to="/reservations" style={linkStyle}>Reservations</Link></li>
          <li style={listStyle}><Link to="/" style={{
            textDecoration: 'none',
            fontFamily: 'Markazi Text, sans-serif',
            color: '#d3d3d3',
            fontSize: '0.9em',
            fontWeight: 'bold',
          }}>Order Online</Link></li>
          <li style={listStyle}><Link to="/" style={{
            textDecoration: 'none',
            fontFamily: 'Markazi Text, sans-serif',
            color: '#d3d3d3',
            fontSize: '0.9em',
            fontWeight: 'bold',
          }}>Login</Link></li>
        </li>
      </ul >
    </nav>
  );
}

export default Nav;