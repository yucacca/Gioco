let img_player;
let player;
let player_speed = 100;

function preload_player(s) {
    img_player = PP.assets.image.load(s,"assets/images/personaggio.png");
}

function create_player(s) {
    player = 
    img_player = PP.assets.image.add(s, img_player, 500, 550, 0.5, 1);
}

function update_player(s) {
    /*if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
        
        PP.physics.set_velocity_x(player, player_speed);
        
    }
    else if(PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
        
        PP.physics.set_velocity_x(player, -player_speed);
        
    } else {
        
        PP.physics.set_velocity_x(player, 0);
        
    } */
}