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
//capire dove dichiarare damage_imm perché dà errore e non si resetta correttamente se messa qua


function perdi_vite(s){
    if(damage_imm == false){    
    damage_imm = true;
    prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score-1);
    console.log("-1");
    }
    

   else if(damage_imm == true){
        PP.timers.add_timer(s, 3000, damage_timer, false); 
        console.log("ciao");
    }

    function damage_timer(s){
    damage_imm = false;
}

}





