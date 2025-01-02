let fiume;
let img_fiume;

function preload_fiume(s) {
    img_fiume = PP.assets.image.load(s, "assets/images/fiume.png");
}

function create_fiume(s,player,fiume) {
    fiume = PP.shapes.rectangle_add(s, 4640, 659, 1152, 222, "0xAB4F0F", 1); 
    //fiume = PP.assets.image.add(s, img_fiume, 512, 568, 0.5,1);
    PP.physics.add(s, fiume, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, fiume, goto_game_over);

}

function update_fiume(s) {
    
}