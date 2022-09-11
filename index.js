	function oddishOrEvenish(number) {
	 	var total = 0;
	 	var oddOrEven;
		while (number) {
		    total += number % 10;
		    number = Math.floor(number / 10);
		}
		if (total % 2 == 0) {
			oddOrEven = "Even";	
		}else{
			oddOrEven = "Odd";
		}
		return(oddOrEven);
	}
	