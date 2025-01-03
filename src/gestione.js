function start_game (s){
    PP.scenes.start("level2");
}
//poi cambiarlo in lv 1

function goto_game_over(s, obj1, obj2) {
    // Funzione di collisione tra nemico e giocatore:
    // in questo caso avvio la scena di game over
    PP.scenes.start("game_over");
    
}

//player_vite (s);



