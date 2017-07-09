function changeTotalCalc(totalPayable, cashPaid){
	return cashPaid - totalPayable
}
function calculateChange(totalPayable, cashPaid) {
	var coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
	var changeTotal = changeTotalCalc(totalPayable, cashPaid);
	var change = [];


	for (var i = 0; i < coins.length; i++) {
		if (coins[i] <= changeTotal) {
			change.push(coins[i]);
			changeTotal = changeTotal - coins[i];
			i = i - 1;
		}
	}
	return change;
};


module.exports = {
	changeTotalCalc, calculateChange
}
