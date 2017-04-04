function drawTree (h) {
	for ( var i = 1 ; i <= h ; i ++) {
		var star = '';
		for ( var j = 1 ; j <= i ; j ++ ) {
			var star = star += '*';
		}
	console.log(star);
	}
}
drawTree(6);


/*
function drawTree (h) {
	for ( var i = 1 ; i <= h ; i ++) {
	console.log(+ i);
	}
}
var drawTree5 = drawTree(5);
*/

/*
for ( var k = 0 ; k < 10 ; k ++) {
  console.log('wartość k teraz to: ' + k);
}

var i = 0;

while (i < 10) {
    console.log(i)
    i++;
}

var i = 0;

do {
    console.log(i)
    i++;
} while (i < 10);

var osoba = {
    name: 'Piotr',
    age: 25,
    country: 'Poland'
};
for (var nazwaAtrybutu in osoba) {

    console.log(nazwaAtrybutu);

}

for ( var k = 0 ; k < 10 ; k++) {
    console.log('wartość k teraz to: ' + k);

    if (k == 5) {
        console.log('k wynosi 5. Przerywam');

        break;
    }
}
for ( var k = 0 ; k < 10 ; k++) {

    console.log('wartość k teraz to: ' + k);

    if (k > 5) {
        continue;
    }

    console.log('instrukcja na końcu pętli ');
}
*/