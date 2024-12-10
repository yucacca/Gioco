let img_player;
let player;
let player_speed = 170; //rimettere a 170 - 250
let floor_height = 550;
let jump_init_speed = 230;  //rimettere a 230 - 350

let curr_anim = "stop_left";



function preload_player(s) {
    PP.game_state.set_variable("vite", 3);
}

function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "walk", [0, 1, 2, 3], 3, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up", [0, 4], 3, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [4, 0], 3, 0);
    PP.assets.sprite.animation_add(player, "stop", 1, 0, 3, 0);
}

    PP.game_state.set_variable("vite", 3);


function update_player(s, player) {

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


    if(player.is_on_platform) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        
            PP.physics.set_velocity_y(player, -jump_init_speed);
            next_anim = "jump_up";
        }
        /*else {
            player.is_on_platform = false;  // Resetto il flag che viene messo a true quando il giocatore 
                                    // si trova sulla piattaforma
        }*/
    }


    // Le animazioni del salto vengono gestite in base alla velocita'
    // verticale

    /*if(PP.physics.get_velocity_y(player) < 0 ) {
       
        next_anim = "jump_up";

    }

    else  */ if (PP.physics.get_velocity_y(player) > 0) {

             next_anim = "jump_down";
         
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


    if (player.geometry.x <= 0) {
    //qui andrebbe messo un muro

        console.log ("stop");

    }
}
