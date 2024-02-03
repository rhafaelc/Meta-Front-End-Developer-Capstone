import chefA from '../images/Mario and Adrian A.jpg';
import chefB from '../images/Mario and Adrian b.jpg';


function About() {
	return (
		<>
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

export default About;