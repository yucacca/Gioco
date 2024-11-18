let img_background
let home

function preload (s) {
    
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
}

function create (s){
    
    PP.assets.image.add(s, img_background, 0 , 500, 0, 0)
    
    home = PP.shapes.text_styled_add(s, 
        100,
        400,
        "torna al menù",
        75,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0,
        0.5); 
    
        //interazione con il tasto con funzione apposita per andare alla storia (idem per i successivi)
        if (PP.interactive.mouse.add(home, "pointerdown",goto_menu)){
       
        } 
    
    function goto_menu(s) {
        PP.scenes.start("menu");
    }
   
   
}

function update (s){
    
}

function destroy (s)  {

}

PP.scenes.add ("credits", preload, create, update, destroy)