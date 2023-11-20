const extendHex = (shortHex) => {
  // write your code here
	const hexWithoutHash = shortHex.startsWith('#') ? shortHex.slice(1) : shortHex ;

	const extendedHex = '#' + hexWithoutHash.split('').map(x => x + x).join('');
	return extendedHex;
	
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex."); 
alert(extendHex(shortHex));
