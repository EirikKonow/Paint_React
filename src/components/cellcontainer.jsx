import React, { Component } from "react";
import Cell from "./cell";

class CellContainer extends Component {
	state = { mouseIsDown: false, size: 25 };

	styles = {
		marginRight: 0,
		marginLeft: 0,
		marginTop: 0,
		paddingTop: 0,
		paddingBottom: this.state.size,
		backgroundColor: "#1EE7E8",
		borderRadius: 0,
		borderWidth: 0,
		borderColor: "#fff",
		width: 0,
		height: 0,
		cellpadding: 0,
		cellspacing: 0,
		cellPadding: 0,
		cellSpacing: 0,
		display: "block",
	};

	handleSelect = (pos) => {
		console.log("Hello world at " + pos);
	};

	gridCells(cols, rows) {
		let gridInner = [];
		let grid = [];
		let curKeyVal = 0;
		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < cols; j++) {
				curKeyVal = i * cols + j;
				gridInner.push(
					<td key={"td_" + curKeyVal}>
						<Cell
							key={"cell_" + curKeyVal}
							onSelect={this.handleSelect}
							pos={[j, i]}
							mouseDown={this.state.mouseIsDown}
							currentColor={this.props.currentColor}
						/>
					</td>
				);
			}
			grid.push(
				<tr
					cellPadding={0}
					cellSpacing={0}
					style={this.styles}
					key={"tr_" + curKeyVal}
				>
					{gridInner}
				</tr>
			);
			gridInner = [];
		}
		return grid;
	}

	toggleMouseDown = () => {
		let mouseIsDown = true;
		console.log("mouseIsDown set to " + mouseIsDown);
		this.setState({ mouseIsDown });
	};

	toggleMouseUp = () => {
		let mouseIsDown = false;
		console.log("mouseIsDown set to " + mouseIsDown);
		this.setState({ mouseIsDown });
	};

	render() {
		return (
			<div
				style={this.styles}
				onMouseDown={this.toggleMouseDown}
				onMouseUp={this.toggleMouseUp}
			>
				{this.gridCells(50, 50)}
			</div>
		);
	}
}

export default CellContainer;
