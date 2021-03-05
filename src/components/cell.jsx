import React, { Component } from "react";
import "./cell.css";

class Cell extends Component {
	state = {
		mouseIsDown: false,
		paint: false,
		size: 20,
		cellColor: "White",
	};

	handlePaintMove = () => {
		if (!this.props.mouseDown) {
			return;
		}
		let cellColor = this.props.currentColor;
		this.setState({ cellColor });
	};

	handlePaintClick = () => {
		let cellColor = this.props.currentColor;
		this.setState({ cellColor });
	};

	render() {
		return (
			<button
				className={this.selectedColor()}
				onMouseMove={() => this.handlePaintMove()}
				// OnClick added to point painting (No moving)
				onClick={() => this.handlePaintClick()}
			></button>
		);
	}

	selectedColor = () => {
		let curClassName = "cellBase cell" + this.state.cellColor;
		return curClassName;
	};
}

export default Cell;
