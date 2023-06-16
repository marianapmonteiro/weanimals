import React, { useState } from "react";
import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Image = styled.img`
	width: 350px;
	height: 350px;
	margin-right: 10px;
	background-size: cover;
	background-position: center;
	object-fit: cover;
	border-radius: 8px;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
`;

const Options = ({ options, images }) => {
	const [selectedOption, setSelectedOption] = useState("");

	// Function to handle option selection
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<FormControl component="fieldset" style={{ display: "flex" }}>
			<Container>
				{options.map((item, index) => (
					<Box>
						<FormControlLabel
							key={index}
							value={item}
							control={<Radio />}
							label={
								<div
									style={{ display: "flex", flexWrap: "wrap", width: "250px" }}
								>
									<Typography>{item}</Typography>
								</div>
							}
						/>
						<Image src={images[index]} alt={`Option ${index + 1}`} />
					</Box>
				))}
			</Container>
		</FormControl>
	);
};

export default Options;
