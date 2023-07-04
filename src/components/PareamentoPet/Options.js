import React from "react";
import {
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../theme/theme";

const Image = styled.img`
	width: 350px;
	height: 350px;
	margin-right: 10px;
	background-size: cover;
	background-position: center;
	object-fit: cover;
	border-radius: 8px;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width:  250px;
		height: 250px;
	}
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

const Options = ({ options, images, option, setOption, setEtiquetaValor }) => {

	// Function to handle option selection
	const handleOptionChange = (e, index) => {
		setOption(e.target.value);
		setEtiquetaValor(index)

	};


	return (
		<FormControl component="fieldset" style={{ display: "flex" }}>
			<Container>
				{options.options.map((item, index) => (
					<Box>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							name="controlled-radio-buttons-group"
							value={option}
							onChange={(e) => { handleOptionChange(e, index) }}>
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
						</RadioGroup>
						<Image src={images[index]} alt={`Option ${index + 1}`} />
					</Box>
				))}
			</Container>
		</FormControl>
	);
};

export default Options;
