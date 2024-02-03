import headerImg from '../images/restauranfood.jpg';

function Header() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: '10px',
      padding: '0 20px 20px 20px',
      backgroundColor: '#495e57',
      margin: '72px 0 120px 0',
    }}>
      <section className="container" style={{
        gridColumn: '3 / span 3',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'top',
        padding: '20px',
        flexDirection: 'column',
      }}>
        <div className="content" style={{
          textAlign: 'left',
        }}>
          <h1 style={{
            color: '#f4ce14',
            fontSize: '3em',
            fontFamily: 'Markazi Text, sans-serif',
            margin: '0',
          }}>Little Lemon</h1>
          <h3 style={{
            color: '#edefee',
            fontSize: '2em',
            fontFamily: 'Karla, sans-serif',
            margin: '0',
          }}>Chicago</h3>
          <p style={{
            color: '#edefee',
            fontSize: '1.2em',
            fontFamily: 'Karla, sans-serif',
          }}>We are a family owned Mediteranian restaurant, focused on traditional recipes served with a modern twist.</p>

          <button style={{
            backgroundColor: '#f4ce14',
            border: 'none',
            color: 'black',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '8px 0px',
            cursor: 'pointer',
            borderRadius: '8px',
            fontFamily: 'Karla, sans-serif',
            fontWeight: 'bold',
          }}
            onClick={() => { window.location.href = '/reservations'; }}
          >
            Reserve a Table
          </button>
        </div>
      </section>
      <div style={{
        gridColumn: '8 / span 3',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'top',
        margin: '20px 0 -225px 0',

      }}>
        <img src={headerImg} alt="Chef serving" style={{
          width: '90%',
          height: '70%',
          objectFit: 'cover',
          borderRadius: '10px',
        }} />

      </div>
    </div>
  );
}

export default Header;