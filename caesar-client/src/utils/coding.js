	/**
	 * ÁBÉCÉ lekérdezése:
	 */
	function getAlphabet() {
		return [
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
			'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
			'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
			'y', 'z', '0', '1', '2', '3', '4', '5',
			'6', '7', '8', '9', 'A', 'B', 'C', 'D',
			'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
			'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
			'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@',
			'#', '$', '%', '^', '&', '(', ')', '+',
			'-', '*', '/', '[', ']', '{', '}', '=',
			'<', '>', '?', '_', '"', '.', ',', ' ',
		];
	}
	
	/**
	 * A kódolásért felelős függvény:
	 * @param {*} str 
	 * @param {*} amount 
	 */
	export function encode(text, shift) {
		var alphabet = getAlphabet();
		var offset = parseInt(shift, 10);
		var result = "";
		
		for (var i = 0; i < text.length; i++) {
			var index = alphabet.indexOf(text[i]);
			
			if (index === -1) { //Ha nincs ilyen karakter az ÁBÉCÉBEN, akkor marad önmaga
				result += text[i];
			}
			else { //Ha van, akkor eltoljuk shittel (mod abécé mérete)
				result += alphabet[ (index+offset)%alphabet.length ];
			}
		}
		return result;
	}

	/**
	 * A dekódolástért felelős függvény:
	 * @param {*} str 
	 * @param {*} amount 
	 */
	export function decode(text, shift) {
		var alphabet = getAlphabet();
		var offset = parseInt(shift, 10);
		var result = "";
		
		for (var i = 0; i < text.length; i++) {
			var index = alphabet.indexOf(text[i]);
			
			if (index === -1) { //Ha nincs ilyen karakter az ÁBÉCÉBEN, akkor marad önmaga
				result += text[i];
			}
			else { //Ha van, akkor eltoljuk:
				var newIndex = alphabet.indexOf(text[i])-offset;
				if (newIndex>=0) 
					result += alphabet[ newIndex ];
				else
					result += alphabet[ alphabet.length+newIndex ];
			}
		}
		return result;
	}




