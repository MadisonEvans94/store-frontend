import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

/**
 * Styled component for the card container
 */
const CardContainer = styled.div`
	position: relative;

	max-width: 20rem;
	height: fit-content;
	background-color: white;
	border-radius: 10px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	margin: 20px auto;
`;

/**
 * Styled component for the card image
 */
const CardImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

/**
 * Styled component for the card title
 */
const CardTitle = styled.h2`
	font-size: 22px;
	font-weight: bold;
	margin: 20px;
	text-align: center;
`;

/**
 * Styled component for the card description
 */
const CardDescription = styled.p`
	font-size: 16px;
	margin: 20px;
	text-align: justify;
`;

/**
 * Component that displays a card with image, title, and description
 * @function
 * @param {string} image - URL of the image to display
 * @param {string} title - Title of the card
 * @param {string} description - Description of the card
 * @returns {JSX.Element}
 */
const Card = ({ id }) => {
	const [cardInfo, setCardInfo] = useState({
		imageUrl: "",
		title: "",
		description: "",
	});
	function updateCard(obj) {
		setCardInfo({
			imageUrl: obj.imageUrl,
			title: obj.title,
			description: obj.description,
		});
	}
	useEffect(() => {
		//[ ] write functionality that sends GET request to server
		fetch(`http://localhost:3000/products/#${id}`)
			.then((response) => response.json())
			.then((obj) => {
				updateCard(obj[id - 1]);
			})
			.catch((error) => console.log(error));
	});
	return (
		<CardContainer>
			<CardImage src={cardInfo.imageUrl} alt={cardInfo.title} />
			<CardTitle>{cardInfo.title}</CardTitle>
			<CardDescription>{cardInfo.description}</CardDescription>
		</CardContainer>
	);
};

export default Card;
