let img_background

function preload (s) {
    img_background = PP.assets.image.load(s, "assets/images/hq720.jpg");
}

function create (s){
     PP.assets.image.add(s, img_background, 0 , 0, 0, 0)
     
     PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        200,
        "L'anello magico",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);


   
}

function update (s){
 
}

function destroy (s)  {

}

PP.scenes.add ("menu", preload, create, update, destroy)