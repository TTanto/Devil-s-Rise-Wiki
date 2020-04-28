//// DATA ////
// *****************
// Jugador
// P
// *****************
// Paredes
// 1-9 --> wallx.png
// *****************
// Objetos
// a-j --> objx.png
// *****************
class CustomDATA extends DATA{
	constructor(){
		super();
	}

	_ini(){
		super._ini();

let aux=`
11111111111111111111111111111111
1                              1
1                              1
1111111111111111111 111111111111
1                 1 1         11
1                 1 1         11
1111111111111111111 111111111111
1        1            1        1
1  P                           1
1        1            1        1
1        1            1        1 
11111111111111111111111111111111
1 1                         1  1
1 111111                    1  1
1     111111111       1111111  1
1     1                        1
1     1       1       1111111  1
11111111111111111111111111111111

`;
		this.set('map0',aux);




aux=`
<h1>Bienvenida a esta aventura</h1>
<p>Tu objetivo es parar el renacimiento de los demonios <br>
	por parte del rei malèfico, el REY NEGRO </p>
	<img src='app/img/theKing.png'> </img>

<p>Podemos comenzar viendo qué es ese extraño objeto</p>
			<hr/>
<h2>Pulsa m para abrir/cerrar esta pantalla</h2>
			<hr/>
`;
		this.set('welcome',aux);

aux=` <h1> Te han capturado, necessitas salir de esta celda. <h1> <br>
	  <h3> ¿Se te acude alguna manera de escapar? </h3> <br> <br>
	  <h3>  *PISTA*  pulsas la tecla H, y pronuncia la palabara "FUNDIR"</h3> <br>
	  <h1>  Bah, pero no me hagas solo es una pista <br>
	  		Más tarde hablamos.</h1>

`;
		this.set('note1', aux);

aux=` <h1> Como?? Que has hecho? </h1>
	  <h3>  Pues resulta que mis consejos sirvern para algo vaya...</h3>
	  <h1> YA ERES LIBRE, CONSIGUE TUS ARMAS Y LUCHA CONTRA EL MAL </h1>
`;
		this.set('misionPrisionOK', aux);

aux=`
<h1>Enhorabuena</h1>
<h2>Has completado tu misión</h2>
`;
		this.set('missionCompleted',aux);

aux=`
<h1>Gestión del Inventario</h1>
<p>Los objetos se colocan en el inventario al tocarlos</p>
<p>Tienes 10 posiciones de inventario:</p>
			<hr/>
<h2>1 2 3 4 5 6 7 8 9 0</h2>
			<hr/>
<h2>Cada posicón se representa con un cuadrado en la parte superior de la pantalla</h2>
			<hr/>
<h2>Cambia de posición con la tecla del número correspondiente</h2>
			<hr/>
<h2>Sólo puedes tener un objeto por posición</h2>
			<hr/>
`;
		this.set('multipleObjects',aux);
aux=`
<h1>Captura la tortuga</h1>
<p>Para capturar la tortuga tienes que decir la palabra "tortuga"</p>
</hr>
<p>Haz click en la tortuga para oir cómo se pronuncia</p>
</hr>
<p>
<button onclick="
 speechSynthesis.speak(new SpeechSynthesisUtterance('tortuga'));
		">
<img src='app/img/turtle.png'/>
			</button>
			</p>
</hr>
<h2>Para hablara pulsa la tecla "h"</h2>
`;
		this.set('missionGetTurtle',aux);
aux=`
<h1>Posición ocupada</h1>
			<p>Selecciona una posición libre en el menú</p>
			<hr/>
			<h2>Para ello utiliza las teclas numéricas del 1 al 9</h2>
			<hr/>
`;
		this.set('selectAvailableStopMenu',aux);
aux=`
<h1>Enhorabuena, has cogido la tortuga</h1>
<p><img src='app/img/turtle.png'/></p>
`;
		this.set('turtleOK',aux);

	}
}
