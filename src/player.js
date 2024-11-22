let img_player;
let player;
let player_speed = 100;
let floor_height = 550;
let jump_init_speed = 200;


function preload_player(s) {
    img_player = PP.assets.image.load(s,"assets/images/personaggio.png");
}


function update_player(s, player) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        
        PP.physics.set_velocity_x(player, player_speed);
        
    }
    else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        
        PP.physics.set_velocity_x(player, -player_speed);
        
    } else {
        
        PP.physics.set_velocity_x(player, 0);
        
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
    if(PP.physics.get_velocity_y(player) < 0) {
    }
    else if(PP.physics.get_velocity_y(player) > 0) {
    
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
}
