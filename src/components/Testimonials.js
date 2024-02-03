function Testimonials() {
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
    </>);
}

export default Testimonials;