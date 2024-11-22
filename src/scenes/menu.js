let img_background
let gioca
let storia
let credits

function preload (s) {
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
}

function start_game (s){
    PP.scenes.start("level1");
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

    storia = PP.shapes.text_styled_add(s, 
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
    
        //interazione con il tasto con funzione apposita per andare alla storia (idem per i successivi)
        if (PP.interactive.mouse.add(storia, "pointerdown",goto_storia)){
       
        } 
    
    function goto_storia(s) {
        PP.scenes.start("storia");
    }
   
   
    
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

        if (PP.interactive.mouse.add(gioca, "pointerdown",start_game)){
       
        } 
      
      


    
   credits = PP.shapes.text_styled_add(s, 
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

        if (PP.interactive.mouse.add(credits, "pointerdown",goto_credits)){
       
        } 
    
    function goto_credits(s) {
        PP.scenes.start("credits");
    }
   


}


function update (s){
 
}

function destroy (s)  {

}



PP.scenes.add ("menu", preload, create, update, destroy)