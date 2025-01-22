let img_background;
let home;
let freccia_dx;
let freccia_sx;
//let inizia_gioco;

function preload (s) {
    img_background = PP.assets.image.load(s, "assets/images/tavole/T1.png");
    freccia_dx = PP.assets.image.load(s, "assets/images/tavole/freccia_dx.png");
    freccia_sx = PP.assets.image.load(s, "assets/images/tavole/freccia_sx.png");
}

function create (s){
    PP.assets.image.add(s, img_background, 0 , 0, 0, 0)

    home = PP.shapes.text_styled_add(s, 
        1200,
        350,
        ">",
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
    

   
}

function goto_menu(s) {
    PP.scenes.start("menu");
}



/*inizia_gioco = PP.shapes.text_styled_add(s, 
    100,
    500,
    "gioca",
    75,
    "Helvetica",
    "normal",
    "0xFFFFFF",
    null,
    0,
    0.5); 
    

if (PP.interactive.mouse.add(inizia_gioco, "pointerdown",start_game)){
       
} 

function start_game (s){
    PP.scenes.start("level1");
} 
 */



function update (s){
}

function destroy (s)  {

}

PP.scenes.add ("storia", preload, create, update, destroy)