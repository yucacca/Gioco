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
        "Premi spazio per Riprovare",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);

}

function update(s) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        PP.scenes.start("level2");
    }
}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);