let riprova;
let home;
let img_background;


function preload(s) {
    img_background = PP.assets.image.load(s, "assets/images/game_over.png");
}

function create(s) {

    PP.assets.image.add(s, img_background, 0 , 0, 0, 0)

    riprova = PP.shapes.rectangle_add(s, 640, 500, 190, 70, "0xE34F0F", 0); 

    if (PP.interactive.mouse.add(riprova, "pointerdown",start_game)){
   
    }     

    home = PP.shapes.rectangle_add(s, 640, 590, 300, 70, "0xE34F0F", 0); 

    if (PP.interactive.mouse.add(home, "pointerdown",goto_menu)){
   
    } 

    function goto_menu(s) {
        PP.scenes.start("menu");
    }

}

function update(s) {


}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);