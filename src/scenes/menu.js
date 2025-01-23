let img_background
let gioca
let storia
let credits

function preload (s) {
    img_background = PP.assets.image.load(s, "assets/images/copertina.png");
}


function create (s){
     PP.assets.image.add(s, img_background, 0 , 0, 0, 0)
     

     /* PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        200,
        "L'ANELLO MAGICO",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5); */

    storia = PP.shapes.rectangle_add(s, 1100, 340, 170, 70, "0x634F0F", 0); 
        //interazione con il tasto con funzione apposita per andare alla storia (idem per i successivi)
        if (PP.interactive.mouse.add(storia, "pointerdown",goto_storia)){
       
        } 
    
    function goto_storia(s) {
        PP.scenes.start("storia");
    }
 
    
   gioca = PP.shapes.rectangle_add(s, 1100, 430, 170, 70, "0xE34F0F", 0); 

        if (PP.interactive.mouse.add(gioca, "pointerdown",start_game)){
       
        }     
    
   credits = PP.shapes.rectangle_add(s, 1100, 240, 170, 70, "0xA34F0F", 0); 

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