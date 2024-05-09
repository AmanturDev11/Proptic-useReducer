/* eslint-disable react/prop-types */
// import styled from "styled-components";

// const data = [
// 	{
// 		id: 1,
// 		name: "asddsa",
// 		image:
// 			"https://gas-kvas.com/grafic/uploads/posts/2023-09/1695916896_gas-kvas-com-p-kartinki-banan-44.jpg",
// 		sen: 100,
// 	},
// 	{
// 		id: 2,
// 		name: "asasddsaddsa",
// 		image: "https://img.razrisyika.ru/kart/50/1200/198130-alma-suret-23.jpg",
// 		sen: 100,
// 	},
// 	{
// 		id: 3,
// 		name: "asddsa",
// 		image: "https://i.artfile.ru/2560x1706_1637000_[www.ArtFile.ru].jpg",
// 		sen: 100,
// 	},
// ];

// const Cards = () => {
// 	return (
// 		<div>
// 			<div className="container">
// 				<Content>
// 					<CardsContent>
// 						{data.map((item) => (
// 							<Card key={item.id}>
// 								<CardClass>
// 									<div>
// 										<h1>{item.name}</h1>
// 										<img
// 											style={{ width: "200px" }}
// 											src={item.image}
// 											alt={item.name}
// 										/>
// 										<p>{item.sen}</p>
// 										<ClassButton>+</ClassButton>
// 										<ClassButton>-</ClassButton>
// 										<button>Remove</button>
// 									</div>
// 								</CardClass>
// 							</Card>
// 						))}
// 					</CardsContent>
// 				</Content>
// 			</div>
// 		</div>
// 	);
// };

// export default Cards;

import styled from "styled-components";

const Cards = ({ card, onIncrease, onDecrease, onSelected, handleRemove }) => {
	const { id, name, image, sen } = card;
	console.log(id, name);

	// console.log(handleRemove);

	const handleIncrease = () => {
		onIncrease(id, sen);
		console.log(handleIncrease);
	};

	const handleDecrease = () => {
		onDecrease(id, sen);
	};

	const handleSelected = () => {
		onSelected(id);
		// console.log(handleSelected);
	};

	return (
		<Card>
			<div>
				<h1>{name}</h1>
				<img style={{ width: "200px" }} src={image} alt={name} />
				<p>{sen}</p>
				<Button onClick={handleIncrease}>+</Button>
				<Button onClick={handleDecrease}>-</Button>
				<Button onClick={handleSelected}>Select</Button>
				<Button onClick={handleRemove}>rem</Button>
			</div>
		</Card>
	);
};

const Card = styled.div`
	display: flex;
`;

const Button = styled.button`
	cursor: pointer;
`;

export default Cards;
