let fiume;
let img_fiume;

function preload_fiume(s) {
    img_fiume = PP.assets.sprite.load_spritesheet(s,"assets/images/fiume.png", 1152, 200);
}

function create_fiume(s,player,fiume) {

    fiume = PP.assets.sprite.add(s, img_fiume, 4640, 640, 0.5, 0.5); 
    PP.assets.sprite.animation_add_list(fiume, "fiume", [0, 1, 2], 5, -1);
    PP.assets.sprite.animation_play(fiume, "fiume");
    PP.physics.add(s, fiume, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, fiume, goto_game_over);

}

function update_fiume(s) {
    
}