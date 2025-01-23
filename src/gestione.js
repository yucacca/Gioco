function start_game (s){
    PP.scenes.start("level2");
}

function goto_game_over(s, obj1, obj2) {

    PP.scenes.start("game_over");
    
}

function goto_menu(s) {
    PP.scenes.start("menu");
}



function perdi_vite(s){
    if(damage_imm == false){    
    damage_imm = true;
    prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score-1);
    console.log("-1");
    }
    

   else if(damage_imm == true){
        PP.timers.add_timer(s, 3000, damage_timer, false); 
    }

    function damage_timer(s){
    damage_imm = false;
}

}





