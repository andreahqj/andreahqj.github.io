$(function(){

	var curText = '';
	var tempAns = '';
	var finAns = '';
	var method = '';

	$('#b1').on('click',function(){
		curText = curText + '1';
		$('#message').text(curText);
	});

	$('#b2').on('click',function(){
		curText = curText + '2';
		$('#message').text(curText);
	});

	$('#b3').on('click',function(){
		curText = curText + '3';
		$('#message').text(curText);
	});

	$('#b4').on('click',function(){
		curText = curText + '4';
		$('#message').text(curText);
	});

	$('#b5').on('click',function(){
		curText = curText + '5';
		$('#message').text(curText);
	});

	
	$('#b6').on('click',function(){
		curText = curText + '6';
		$('#message').text(curText);
	});

	$('#b7').on('click',function(){
		curText = curText + '7';
		$('#message').text(curText);
	});

	$('#b8').on('click',function(){
		curText = curText + '8';
		$('#message').text(curText);
	});

	$('#b9').on('click',function(){
		curText = curText + '9';
		$('#message').text(curText);
	});

	$('#b0').on('click',function(){
		curText = curText + '0';
		$('#message').text(curText);
	});

	$('#bD').on('click',function(){
		tempAns = curText;
		curText = '';
		method = '÷';
		$('#message').text('0');
	});

	$('#bP').on('click',function(){
		tempAns = curText;
		curText = '';
		method = '×';
		$('#message').text('0');
	});
	
	$('#bM').on('click',function(){
		tempAns = curText;
		curText = '';
		method = '-';
		$('#message').text('0');
	});

	$('#bA').on('click',function(){
		tempAns = curText;
		curText = '';
		method = '+';
		$('#message').text('0')
	});

	$('#bE').on('click',function(){
		Calculate();
		$('#message').text(finAns);
		curText = finAns;
		tempAns = '';
		finAns = '';
	});

	$('#bC').on('click',function(){
		$('#message').text('0');
		curText = '';
		tempAns = '';
		finAns = '';
	});

		function Calculate(){

		if(method == '+'){
			finAns = parseFloat(tempAns) + parseFloat(curText);
		}

		if(method == '-'){
			finAns = parseFloat(tempAns) - parseFloat(curText);
		}

		if(method == '×'){
			finAns = parseFloat(tempAns) * parseFloat(curText);
		}

		if(method == '÷'){
			finAns = parseFloat(tempAns) / parseFloat(curText);
		}
	}

});