let riprova;

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

        //qui devo renderlo con lo spazio ma non riesco
        if (PP.interactive.mouse.add(riprova, "pointerdown",start_game)){
       
        } 


        /*if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        
            PP.scenes.start("level2");
        }*/
}

function update(s) {

}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);