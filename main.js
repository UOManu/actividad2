const config = {

type: Phaser.AUTO,
width: 360,
height: 640,
parent: "juego",
backgroundColor: "#5f1a1e",
scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
},

scene: {
create: crear
}
};

const game = new Phaser.Game(config)

let boton;
let contador = 0;
let textoContador;
let textoEstado;

let colores = [
    0x0000ff,
    0xff0000,
    0x00ff00,
    0xffff00,
    0xff00ff
];

let indiceColor = 0;
let juegoTerminado = false;
let escena;

function crear(){

    escena = this;


boton = this.add.circle(
    200, 150,   // posición
    50,         // radio
    colores[indiceColor] // color
);

boton.setInteractive();

this.add.text(150, 140, "Haz clic", {
    fontSize: "20px",
    color: "#ffffff"
});

textoContador = this.add.text(140, 50, "Clics: 0", {
    fontSize: "24px",
    color: "#ffffff"
});

textoEstado = this.add.text(110, 90, "", {
    fontSize: "24px",
    color: "#00ff00"
});

boton.on("pointerdown", cambiarColor);

}



function cambiarColor(){

if(juegoTerminado == true) return;


contador ++

textoContador.setText("Clics: " + contador);

indiceColor  ++



if(indiceColor >= colores.length){

textoEstado.setText("¡Ganaste!");
boton.disableInteractive();
juegoTerminado = true;
return
}

boton.fillColor = colores[indiceColor]
}







