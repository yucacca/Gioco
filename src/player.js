let img_player;
let player;
let player_speed = 170; //rimettere a 170 - 250
let floor_height = 550;
let jump_init_speed = 360;  //rimettere a 230 - 350

let curr_anim = "stop_left";



function preload_player(s) {
}


function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "walk", [0, 1, 2, 3, 2, 1], 3, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up", [5, 4], 3, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [4, 5], 3, 0);
    PP.assets.sprite.animation_add(player, "stop", 0, 0, 3, 0);
    PP.assets.sprite.animation_add_list(player, "hurt_walk", [0, 6, 1, 6, 2, 6, 3, 6, 2, 6, 1], 6, -1);
    PP.assets.sprite.animation_add_list(player, "hurt_stop", [0, 6], 6, -1);
    PP.assets.sprite.animation_add_list(player, "hurt_jump_up", [5, 6, 4, 6], 6, -1);
    PP.assets.sprite.animation_add_list(player, "hurt_jump_down", [4, 6, 5, 6], 6, -1);

}



function update_player(s, player) {
console.log(curr_anim);

    let next_anim = curr_anim; 

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "walk";
        
    }
    else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        
        PP.physics.set_velocity_x(player, -player_speed);

        next_anim = "walk";   
    } 
    
    else {

    PP.physics.set_velocity_x(player, 0);
    next_anim = "stop";
}


   if(damage_imm == true){
        if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "hurt_walk";
            
        }
        else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
            
            PP.physics.set_velocity_x(player, -player_speed);
    
            next_anim = "hurt_walk";   
        } 
        
        else {
    
        PP.physics.set_velocity_x(player, 0);
        next_anim = "hurt_stop";
    }
    }


    if(player.is_on_platform) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        
            PP.physics.set_velocity_y(player, -jump_init_speed);   

            if(damage_imm==false){
            next_anim = "jump_up";
            console.log("caca");
            }
            else if (damage_imm == true) {
                next_anim = "hurt_jump_up"
            }
        }

    }


    if(PP.physics.get_velocity_y(player) < 0 ) {
       
        if(damage_imm==false){
        next_anim = "jump_up"; 
    
        }

        else if (damage_imm == true) {
            next_anim = "hurt_jump_up"
        }

    }

    else  if (PP.physics.get_velocity_y(player) > 0) {
        if(damage_imm==false){
             next_anim = "jump_down";
        }
        else if(damage_imm == true) {
            next_anim = "hurt_jump_down";
        }
    }


    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }



    player.is_on_platform = false;  // Resetto il flag che viene messo a true quando il giocatore 
                                    // si trova sulla piattaforma


    if(next_anim != curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

 

    if (player.geometry.y >= 730) {
        PP.scenes.start("game_over");
    }

    //questo in teoria è obsoleto perché ho già aggiunto il muro in pavimenti.js
    /*if (player.geometry.x <= 0) {
    //qui andrebbe messo un muro

        console.log ("stop");

    }   */ 
    
    
    //variabile delle vite e gestione del game over
    let curr_score = PP.game_state.get_variable("vite");
    if (curr_score < 1) {
        PP.scenes.start("game_over");
    }

}
