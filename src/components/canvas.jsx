import React, { Component } from "react";
import CellContainer from "./cellcontainer";
import ColorSelect from "./colorSelect";
import Cell from "./cell";

class Canvas extends Component {
	state = { currentColor: "Black" };

	handleSelect = (selectedColor) => {
		let currentColor = selectedColor;
		this.setState({ currentColor });
	};

	render() {
		return (
			<React.Fragment>
				<ColorSelect
					currentColor={this.state.currentColor}
					onSelect={this.handleSelect}
				/>
				<CellContainer currentColor={this.state.currentColor} />
			</React.Fragment>
		);
	}
}

export default Canvas;
