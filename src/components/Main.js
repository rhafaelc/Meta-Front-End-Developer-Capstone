import greekSalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemonDessert from '../images/lemon dessert.jpg';
import chefA from '../images/Mario and Adrian A.jpg';
import chefB from '../images/Mario and Adrian b.jpg';

function Main() {
  const starIcon = 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png';
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(<img key={i} src={starIcon} alt="star" style={{
      width: '16px',
      height: '16px',
      objectFit: 'cover',
    }} />);
  }
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: '10px',
        padding: '0px',
        backgroundColor: '#fbdabb',
        margin: '100px 0 0 0'

      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '3 / span 8',
          justifyContent: 'center',
          padding: '25px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h1>Kind Words From Happy Customers!</h1>
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
              width: '192px',
              height: 'auto',
              padding: '10px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <div style={{
                  margin: '0 15px 0 0',
                }}>
                  {stars}
                </div>
                <p>4.7</p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
                gap: '20px',
              }}>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="avatar" style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                }} />
                <p>Kevin T.</p>
              </div>
              <p>
                "The food and service at Little Lemon is exceptional. The lemon chicken is bursting with bright citrus flavors and the desserts are sublime. Highly recommend!"
              </p>
            </div>
            <div id="card2" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '192px',
              height: 'auto',
              padding: '10px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <div style={{
                  margin: '0 15px 0 0',
                }}>
                  {stars}
                </div>
                <p>4.6</p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
                gap: '20px',
              }}>
                <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="avatar" style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                }} />
                <p>Mary S.</p>
              </div>
              <p>
                "From the cozy atmosphere to the innovative menu, Little Lemon is my absolute favorite restaurant in town. I can't wait to go back and try it again!"
              </p>
            </div>
            <div id="card3" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '192px',
              height: 'auto',
              padding: '10px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <div style={{
                  margin: '0 15px 0 0',
                }}>
                  {stars.slice(0, 3)}

                </div>
                <p>3</p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
                gap: '20px',
              }}>
                <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="avatar" style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                }} />
                <p>Jason T.</p>
              </div>
              <p>
                "While the staff were friendly, I found some dishes to be lacking in flavor and overpriced. The lemon tart, however, was a standout. Overall experience was just okay."
              </p>
            </div>
            <div id="card4" style={{
              backgroundColor: '#edefee',
              borderRadius: '8px',
              width: '192px',
              height: 'auto',
              padding: '10px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
              }}>
                <div style={{
                  margin: '0 15px 0 0',
                }}>
                  {stars}
                </div>
                <p>4.9</p>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0 10px',
                gap: '20px',
              }}>
                <img src="https://randomuser.me/api/portraits/women/95.jpg" alt="avatar" style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                }} />
                <p>Maria L.</p>
              </div>
              <p>
                "I've never had such incredible lemon-infused food! Everything on the menu at Little Lemon is creative, fresh and full of zesty lemon flavor. A new favorite!"
              </p>
            </div>
          </section>
        </div>
      </div>
      <div style={{ height: '96px' }} className='about' id='about' ></div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: '10px',
        padding: '0 20px 20px 20px',
        margin: '0px 0 120px 0',
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
              color: '#ee9972',
              fontSize: '2em',
              fontFamily: 'Karla, sans-serif',
              margin: '0',
            }}>Chicago</h3>
            <p style={{
              color: 'black',
              fontSize: '1.2em',
              fontFamily: 'Karla, sans-serif',
            }}>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. <br /> <br />
              To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
            </p>
          </div>
        </section>
        <div style={{
          gridColumn: '7 / span 3',
          display: 'flex',
          alignItems: 'top',
          justifyContent: 'top',
          margin: '20px 0 -225px 0',

        }}>
          <img src={chefB} alt="Chef serving" style={{
            width: '90%',
            height: '70%',
            objectFit: 'cover',
            borderRadius: '10px',
            margin: '80px 20px 0 0',
            zIndex: '1',
          }} />
          <img src={chefA} alt="Chef serving" style={{
            width: '90%',
            height: '70%',
            objectFit: 'cover',
            borderRadius: '10px',
            margin: '0 0 0 -200px',
          }} />

        </div>
      </div>
    </>
  );
}

export default Main;