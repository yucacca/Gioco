let bouncy;
let img_bouncy;



function preload_bouncy(s) {
    img_bouncy = PP.assets.image.load(s, "assets/images/f0.png");
}

function create_bouncy(s,player,bouncy) {
    bouncy = PP.assets.image.add(s, img_rovi, 512, 350, 0.5,1);
    PP.physics.add(s,rovi, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, bouncy, player_bouncy);

if( player.geometry.x >= bouncy.geometry.x - bouncy.geometry.display_width &&
    player.geometry.x <= bouncy.geometry.x + bouncy.geometry.display_width &&
    player.geometry.y == bouncy.geometry.y - bouncy.geometry.display_height/2
    ) {
        jump_init_speed = 460;
}
else {
    jump_init_speed = 360;
}

}

function player_bouncy(s){

}


function update_bouncy(s) {
    
}