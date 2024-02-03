import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';

function Menu() {
  return (
    <>
      <div style={{ height: '72px' }} className='menu' id='menu'></div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridGap: '10px',
          padding: '0px',
          margin: '0px',
        }}>
        <div className="container" style={{
          gridColumn: '3 / span 8',
          padding: '25px',
        }}>
          <div className="title" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
          }}>
            <h1 style={{
              fontSize: '2.5em',
              fontFamily: 'Markazi Text, sans-serif',
              margin: '0',
            }}>This weeks specials!</h1>
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
            }}>Online Menu</button>
          </div>
          <section className="card" style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '40px',
          }}>
            <div id="card1" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '256px',
              height: 'auto',
            }}>
              <div>
                <img src={greekSalad} alt="greek salad" style={{
                  width: '256px',
                  height: '192px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0px 0px',
                }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Greek Salad</p>
                <p>$12.99</p>
              </div>
              <p style={{ padding: '0 10px', }}>
                The famous greek salad of crispy lettuce, cucumbers, tomatoes, onions, feta cheese, kalamata olives, and pepperoncini peppers.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Order a delivery</p>
                <img alt="courier" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256" style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'cover',
                }} />
              </div>
            </div>
            <div id="card2" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '256px',
              height: 'auto',
            }}>
              <div>
                <img src={bruchetta} alt="bruchetta" style={{
                  width: '256px',
                  height: '192px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0px 0px',
                }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Bruchetta</p>
                <p>$8.99</p>
              </div>
              <p style={{ padding: '0 10px', }}>
                Our bruchetta is made with fresh tomatoes, basil, garlic, and olive oil. Served on toasted baguette slices and topped with parmesan cheese.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Order a delivery</p>
                <img alt="courier" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256" style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'cover',
                }} />
              </div>
            </div>
            <div id="card3" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '256px',
              height: 'auto',
            }}>
              <div>
                <img src={lemonDessert} alt="lemon dessert" style={{
                  width: '256px',
                  height: '192px',
                  objectFit: 'cover',
                  borderRadius: '8px 8px 0px 0px',
                }} />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Lemon Dessert</p>
                <p>$5.00</p>
              </div>
              <p style={{ padding: '0 10px', }}>
                This comes straight from grandma's recipe book. A light and fluffy lemon cake with a lemon glaze. Served with a scoop of vanilla ice cream.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <p>Order a delivery</p>
                <img alt="courier" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delivery-1447237-1223498.png?f=webp&amp;w=256" style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'cover',
                }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Menu;