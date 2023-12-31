import React, { useEffect, useState } from 'react'
import '../../Assets/styles/allRecepies.css';

// ============= Assets ============= 

// icons 
import next from '../../Assets/Icons/next.svg'
import nextt from '../../Assets/Icons/next.png'
import back from '../../Assets/Icons/back.png'
import nonext from '../../Assets/Icons/nonext.png'
import noback from '../../Assets/Icons/noback.png'
import star from '../../Assets/Icons/Star.svg'
import reset from '../../Assets/Icons/reset.png'
import add from '../../Assets/Icons/add.png'

// images 
import plat1 from '../../Assets/img/plat1.jpeg'
import { Link } from 'react-router-dom';


const AllRecepies = () => {

	const [categories, setCategories] = useState([]);
	const [plats, setPlats] = useState([]);
	const [intervalCategory, setIntervalCategory] = useState({ min: 0, max: 0 })

	useEffect(() => {
		const getAllCaterogies = async () => {
			try {
				const response = await fetch('http://localhost:5000/origines');

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setCategories(data);
				setIntervalCategory({ min: intervalCategory.min, max: data.length });
				console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		getAllCaterogies();
	}, []);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const response = await fetch('http://localhost:5000/plats')
				const data = await response.json()

				setPlats(data)
				console.log(data);
			} catch (error) {
				console.log(error);
			}

		}

		getAllProducts()
	}, [])

	const slideCategory = (action) => {
		if (action === 'next' && intervalCategory.min < intervalCategory.max - 3) {
			setIntervalCategory((prevInterval) => ({
				min: prevInterval.min + 1,
				max: prevInterval.max
			}));
		}
		if (action === 'back' && intervalCategory.min > 0) {
			setIntervalCategory((prevInterval) => ({
				min: prevInterval.min - 1,
				max: prevInterval.max
			}));
		}
	};

	const filreCategoy = async (origine) => {
		console.log(origine);
		try {
			if (origine !== 'reset') {
				const response = await fetch(`http://localhost:5000/plats?origine=${origine}`)
				const data = await response.json()
				setPlats(data)
				console.log(data);
			} else {
				const response = await fetch(`http://localhost:5000/plats`)
				const data = await response.json()
				setPlats(data)
				console.log(data);

			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='AllRecepies'>
			<div className="AllRecepies-image"></div>

			<div className="AllRecepies-filres">

				<div className="AllRecepies-icon">
					<button onClick={() => slideCategory('back')}>
						{intervalCategory.min > 0 && <img src={back} alt="" />}
						{intervalCategory.min === 0 && <img src={noback} alt="" />}
					</button>

				</div>



				{categories.map((categories, index) => {
					console.log('min', intervalCategory.min, 'max', intervalCategory.max);
					if (index >= intervalCategory.min && index < intervalCategory.min + 3) {
						return (
							<div key={categories.id} className="AllRecepies-categories">
								<div className="AllRecepies-category" onClick={() => filreCategoy(categories.id)}>
									<span>{categories.nom}</span>
									<img src={next} alt="" />
								</div>
							</div>
						)
					}
					return null
				})}

				<div className="AllRecepies-icon">
					<button onClick={() => slideCategory('next')}>
						{intervalCategory.min < intervalCategory.max - 3 && <img src={nextt} alt="" />}
						{intervalCategory.min === intervalCategory.max - 3 && <img src={nonext} alt="" />}
					</button>
				</div>

				<div className="AllRecepies-icon">
					<button onClick={() => filreCategoy('reset')}>
						<img src={reset} alt="" />
					</button>
				</div>

				<div className="AllRecepies-icon">
					<Link to="/add-product" >
						<button>
							<img src={add} alt="" />
						</button>
					</Link>
				</div>
			</div>


			<div className="AllRecepies-products">
				{plats.map((plats) => {
					return (
						<div className="AllRecepies-product">
							<img src={plats.image} alt="" />
							<div className="AllRecepies-product-name">
								<Link to={`/recepy_detail/${plats.id}`}><h1>{plats.nom}</h1></Link>
								<img src={star} alt="" />
								<h2>{plats.popularite}</h2>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default AllRecepies


// import "../Assets/styles/About.css"; 
