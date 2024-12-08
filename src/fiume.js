let fiume;

function preload_fiume(s) {
    
}

function create_fiume(s,player,fiume) {
    fiume = PP.shapes.rectangle_add(s, 4640, 659, 1152, 222, "0xAB4F0F", 1); 
    PP.physics.add(s, fiume, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, fiume, goto_game_over);

}

function update_fiume(s) {
    
}