import React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import theme from "../../theme/theme";
import { Pets } from "@mui/icons-material";

function TabsMenu({ value, handleChange, listagemAnimais }) {
	return (
		<>
			<div
				style={{
					width: "20%",
					marginTop: "2em",
					backgroundColor: theme.palette.background.default,
				}}
			>
				<Tabs
					orientation="vertical"
					variant="standart"
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						backgroundColor: "#f5f5f5",
						"& .MuiTab-root": {
							backgroundColor: theme.palette.background.default,
						},
					}}
					value={value}
					onChange={handleChange}
				>
					{listagemAnimais.map((item, idx) => {
						return (
							<Tab
								sx={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "flex-start",
								}}
								label={item}
								value={idx}
							/>
						);
					})}
				</Tabs>
			</div>
		</>
	);
}

export default TabsMenu;
