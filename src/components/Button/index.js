import { Button } from "@mui/material";

const StyledButton = ({ text, width }) => {
	return (
		<Button
			sx={{
				background:
					"linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)",
				color: "white",
				paddingInline: "20px",
				paddingTop: "14px",
				paddingBottom: "14px",
				textAlign: "center",
				borderRadius: "50px",
				fontWeight: "normal",
				textTransform: "none",
				width: width ? width : "auto",
			}}
		>
			{text}
		</Button>
	);
};

export default StyledButton;
