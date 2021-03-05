import React, { Component } from "react";
import "./cell.css";

class ColorSelect extends Component {
	state = {
		colors: [
			{ clrName: "White", clrCode: "#f8f9fa", clrCompliment: "#070605" },
			{ clrName: "Black", clrCode: "#343a40", clrCompliment: "#f8f9fa" },
			{ clrName: "Red", clrCode: "#dc3545", clrCompliment: "#f8f9fa" },
			{ clrName: "Green", clrCode: "#28a745", clrCompliment: "#f8f9fa" },
			{ clrName: "Blue", clrCode: "#007bff", clrCompliment: "#f8f9fa" },
		],
	};

	currentColorPaste = (colorName) => {
		let currentColor = "cellBase cell";
		currentColor += colorName;
		return currentColor;
	};

	render() {
		return (
			<div>
				{this.state.colors.map((color) => (
					<button
						className="btn btn-primary cellGreen"
						style={{
							//backgroundColor: color.clrCode,
							color: color.clrCompliment,
							fontWeight: "bold",
							borderColor: "#343a40",
							backgroundColor: color.clrCode,
							width: 90,
						}}
						onClick={() => this.props.onSelect(color.clrName)}
					>
						{color.clrName}
					</button>
				))}
				<box>
					Current Color:
					<button
						className={this.currentColorPaste(this.props.currentColor)}
					></button>
				</box>
			</div>
		);
	}
}

export default ColorSelect;
