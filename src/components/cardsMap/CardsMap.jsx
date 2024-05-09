// import styled from "styled-components";

// const CardsMap = () => {
// 	return (
// 		<div>
// 			<div className="container">
// 				<Content>CardsMap</Content>
// 			</div>
// 		</div>
// 	);
// };

// export default CardsMap;

// const Content = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

import { useReducer, useState } from "react";
import styled from "styled-components";
import Cards from "../cards/Cards";

const data = [
	{
		id: 1,
		name: "asddsa",
		image:
			"https://gas-kvas.com/grafic/uploads/posts/2023-09/1695916896_gas-kvas-com-p-kartinki-banan-44.jpg",
		sen: 100,
	},
	{
		id: 2,
		name: "asasddsaddsa",
		image: "https://img.razrisyika.ru/kart/50/1200/198130-alma-suret-23.jpg",
		sen: 100,
	},
	{
		id: 3,
		name: "asddsa",
		image: "https://i.artfile.ru/2560x1706_1637000_[www.ArtFile.ru].jpg",
		sen: 100,
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREASE_QUANTITY":
			return state;
		case "DECREASE_QUANTITY":
			return state;
		case "REMOVE_ITEM":
			return state;
		case "SELECT_ITEM":
			return {
				...state,
				selectedItemId: action.id,
			};
		default:
			return state;
	}
};

const CardsMap = () => {
	const [state, dispatch] = useReducer(reducer, { data, selectedItemId: null });
	const [totalPrice, setTotalPrice] = useState(0);

	const handleIncrease = (id, price) => {
		dispatch({ type: "INCREASE_QUANTITY", id });
		setTotalPrice(totalPrice + price);
	};

	const handleDecrease = (id, price) => {
		dispatch({ type: "DECREASE_QUANTITY", id });
		setTotalPrice(totalPrice - price);
	};

	const handleRemove = (id, price) => {
		dispatch({ type: "REMOVE_ITEM", id });
		setTotalPrice(totalPrice - price);
	};

	const handleSelected = (id) => {
		dispatch({ type: "SELECT_ITEM", id });
	};

	return (
		<Container>
			<Content>
				{state.data.map((card) => (
					<Cards
						key={card.id}
						card={card}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						onSelected={handleSelected}
						handleRemove={handleRemove}
						isSelected={state.selectedItemId === card.id}
					/>
				))}
			</Content>
			<TotalPrice>Total Price: ${totalPrice}</TotalPrice>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const TotalPrice = styled.div`
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
`;

export default CardsMap;
