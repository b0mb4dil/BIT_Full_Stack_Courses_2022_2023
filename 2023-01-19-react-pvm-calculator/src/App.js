import "./App.css";
import { useState } from "react";

function App() {
	const [number, setNumber] = useState(0);
	const [numberPvm, setNumberPvm] = useState(0);
	const [numberTotal, setNumberTotal] = useState(0);
	const [pvmPercent, setPvmPercent] = useState(0.21);

	const setNewPvm = (event) => {
		let input = Number(event.target.value);
		setPvmPercent(input);

		let inputPvm = Number((input * number).toFixed(2));
		setNumberPvm(inputPvm);

		let total = (number + inputPvm).toFixed(2);

		setNumberTotal(total);
	};

	const newNumber = (event) => {
		let input = Number(event.target.value);
		setNumber(input);

		let inputPvm = Number((input * pvmPercent).toFixed(2));
		setNumberPvm(inputPvm);

		let total = (input + inputPvm).toFixed(2);
		setNumberTotal(total);
	};

	const newNumber2 = (event) => {
		let totalInput = Number(event.target.value);

		let inputWithoutPvm = Number((totalInput / (1 + pvmPercent)).toFixed(2));
		setNumber(inputWithoutPvm);

		let inputPvm = Number((inputWithoutPvm * pvmPercent).toFixed(2));
		setNumberPvm(inputPvm);

		setNumberTotal(totalInput);
	};

	return (
		<div className="App">
			<div className="box">
				<div className="list-item">
					<div className="span-width">
						<span>PVM tarifas</span>
					</div>
					<select className="inputs" onChange={setNewPvm}>
						<option value="0.21">21%</option>
						<option value="0.09">9%</option>
						<option value="0.05">5%</option>
					</select>
				</div>
				<div className="list-item">
					<div className="span-width">
						<span className="bold">Suma (be PVM)</span>
					</div>
					<input
						className="inputs"
						type="number"
						value={number}
						onChange={newNumber}
					/>
				</div>
				<div className="list-item">
					<div className="span-width">
						<span>PVM suma</span>
					</div>
					<input
						className="inputs blank"
						type="number"
						value={numberPvm}
						readOnly
					/>
				</div>
				<div className="list-item">
					<div className="span-width">
						<span className="bold">Bendra suma (su PVM)</span>
					</div>
					<input
						className="inputs"
						type="number"
						value={numberTotal}
						onChange={newNumber2}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
