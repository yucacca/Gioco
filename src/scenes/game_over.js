let riprova;

function start_game (s){
    PP.scenes.start("level1");
}


function preload(s) {

}

function create(s) {

    // Questa scena di game over contiene solamente
    // il testo centrato.

    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Game Over",
        200,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);


    riprova = PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        600,
        "Riprova",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);


        if (PP.interactive.mouse.add(riprova, "pointerdown",start_game)){
       
        } 

}

function update(s) {

}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);