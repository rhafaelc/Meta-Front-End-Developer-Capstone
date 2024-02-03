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
    <nav style={{ height: '72px', }}>
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
          <li style={listStyle}><a href="/" style={linkStyle}>Home</a></li>
          <li style={listStyle}><a href="#about" style={linkStyle}>About</a></li>
          <li style={listStyle}><a href="#menu" style={linkStyle}>Menu</a></li>
          <li style={listStyle}><a href="#reservations" style={linkStyle}>Reservations</a></li>
          <li style={listStyle}><a href="#order-online" style={linkStyle}>Order Online</a> </li>
          <li style={listStyle}><a href="#login" style={linkStyle}>Login</a></li>
        </li>
      </ul >
    </nav>
  );
}

export default Nav;