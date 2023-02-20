function calculateEMI() {
	let loanAmount = parseFloat(document.getElementById("loanAmount").value);
	let interestRate = parseFloat(document.getElementById("interestRate").value);
	let loanTerm = parseFloat(document.getElementById("loanTerm").value);

	let monthlyInterestRate = (interestRate/100)/12;
	let numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm);
	let denominator = Math.pow(1 + monthlyInterestRate, loanTerm) - 1;
	let emi = (loanAmount * numerator / denominator).toFixed(2);

	document.getElementById("result").innerHTML = "EMI: Rs. " + emi;
}
