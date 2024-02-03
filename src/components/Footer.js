import restaurant from '../images/restaurant.jpg';

function Footer() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: '10px',
      backgroundColor: '#333333',
      color: 'white',
      listStyle: 'none',
      textAlign: 'center',
      margin: '0 0 0 0',
      padding: '20px 0 20px 0',
    }}>
      <img src={restaurant} alt="logo" style={{
        width: '108px',
        height: '192px',
        cursor: 'pointer',
        objectFit: 'cover',
        gridColumn: '3 / span 1',
      }}
        onClick={() => {
          window.location.href = '/';
        }}
      />
      <div style={{
        gridColumn: '4 / span 8',
        display: 'flex',
        padding: '10px',
      }}>
        <ul id="doormat-nav" style={{
          flex: '1',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          textAlign: 'left',
        }}>
          <li className="title" style={{
            fontSize: '1.2em',
            fontWeight: 'bold',
          }}>Doormat Navigation</li>
          <li><a style={{color: 'white', textDecoration: 'none'}} href="/">Home</a></li>
          <li><a style={{color: 'white', textDecoration: 'none'}} href="#about">About</a></li>
          <li><a style={{color: 'white', textDecoration: 'none'}} href="#menu">Menu</a></li>
          <li><a style={{color: 'white', textDecoration: 'none'}} href="/reservations">Reservations</a></li>
          <li><a style={{color: 'grey', textDecoration: 'none'}} href="/">Order Online</a> </li>
          <li><a style={{color: 'grey', textDecoration: 'none'}} href="/">Login</a></li>
        </ul>
        <ul id="contact" style={{
          flex: '1',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          textAlign: 'left',
        }}>
          <li className="title" style={{
            textAlign: 'left',
            fontSize: '1.2em',
            fontWeight: 'bold',
          }}>Contact</li>
          <li>
            123 Sesame Street, Anytown, USA
          </li>
          <li>555-123-4567</li>
          <li>
            <a href="mailto:littlelemon@fakemail.com" style={{
              color: 'white',
              textDecoration: 'none',
            }}>littlelemon@fakemail.com</a>
          </li>
        </ul>
        <ul id="social-media-links" style={{
          flex: '1',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          textAlign: 'left',


        }}>
          <li className="title" style={{
            fontSize: '1.2em',
            fontWeight: 'bold',

          }}>Social Media Links</li>
          <li><a href="www.facebook.com" style={{
            color: 'white',
            textDecoration: 'none',
          }}>Facebook</a></li>
          <li><a href="www.instagram.com" style={{
            color: 'white',
            textDecoration: 'none',
          }}>Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;