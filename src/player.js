let img_player;
let player;
let player_speed = 150;
let floor_height = 550;
let jump_init_speed = 200;

let curr_anim = "stop_left";


function preload_player(s) {
    //img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/protagonista_spritesheet.png", 128, 128);
}

function configure_player_animations(s, player) {
    PP.assets.sprite.animation_add_list(player, "walk", [0, 1, 2, 3], 3, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up", [0, 4], 3, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down", [4, 0], 3, 0);
    PP.assets.sprite.animation_add(player, "stop", 1, 0, 3, 0);
}

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



    if(player.geometry.y>=floor_height-1 || player.is_on_platform) {
        // Se mi trovo sul pavimento OPPURE su una piattaforma...

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
            // ... e premo il tasto spazio, allo salto
            PP.physics.set_velocity_y(player, -jump_init_speed);
        }

    }

    if(player.geometry.y > 550){
        player.is_on_platform = false;  // Resetto il flag che viene messo a true quando il giocatore 
                                    // si trova sulla piattaforma
    }

    // Le animazioni del salto vengono gestite in base alla velocita'
    // verticale


    if(PP.physics.get_velocity_y(player) < 0 ) {
       
        next_anim = "jump_up";

    }

    else if (PP.physics.get_velocity_y(player) > 0) {

             next_anim = "jump_down";
         
    }

    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }



    function collision_floor(s, player, floor) {
        // Funzione di collisione con le piattaforme.
        // Qui devo verificare che il giocatore si trovi sopra
        // la piattaforma e in quel caso aggiorno la variabile che
        // abilita il salto (v. player.js)
        if( player.geometry.y = 550 ) {
                player.is_on_platform = true;
        }
    }

    if(next_anim != curr_anim) {
        PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }
}
