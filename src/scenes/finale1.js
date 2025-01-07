let img_finale_1;
let img_finale_2;
let home;

function preload (s) {
    let prev_anello = PP.game_state.get_variable("anello");
    if (prev_anello < 1){
    img_finale_1 = PP.assets.image.load(s, "assets/images/eggdog.png");
}

else if (prev_anello >= 2){
    
}
}

function create (s){
    
    PP.assets.image.add(s, img_finale_1, 0 , 0 , 0, 0)
    
    PP.shapes.text_styled_add(s, 
        100,
        250,
        "yippie",
        75,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0,
        0.5); 


    home = PP.shapes.text_styled_add(s, 
        100,
        400,
        "torna al menu",
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

PP.scenes.add ("finale1", preload, create, update, destroy)