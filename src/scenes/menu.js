let img_background
let gioca

function preload (s) {
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
}

function create (s){
     PP.assets.image.add(s, img_background, 0 , 0, 0, 0)
     

     PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        200,
        "L'ANELLO MAGICO",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);

    PP.shapes.text_styled_add(s, 
        100,
        400,
        "Storia",
        75,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0,
        0.5);
    
    gioca = PP.shapes.text_styled_add(s, 
        100,
        500,
        "Gioca",
        75,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0,
        0.5);

     if (PP.interactive.mouse.add(gioca, "pointerdown",change_scene)){
       
      }

    
    PP.shapes.text_styled_add(s, 
        100,
        600,
        "Crediti",
        75,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0,
        0.5);

    
   function change_scene (s){
    PP.scenes.start("level1");
   }
}

function update (s){
 
}

function destroy (s)  {

}



PP.scenes.add ("menu", preload, create, update, destroy)