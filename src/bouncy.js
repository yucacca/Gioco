let bouncy;
let img_bouncy;
player.on_bouncy = false;


function preload_bouncy(s) {
    img_bouncy = PP.assets.image.load(s, "assets/images/F0.png");
}


function collision_bouncy(s,player,bouncy){

    if( player.geometry.x >= bouncy.geometry.x - bouncy.geometry.display_width &&
        player.geometry.x <= bouncy.geometry.x + bouncy.geometry.display_width &&
        player.geometry.y == bouncy.geometry.y - bouncy.geometry.display_height/2) {
            
            player.on_bouncy = true;
            console.log("gay");
            player.is_on_platform = true;
            
            if (player.on_bouncy = true) {
                jump_init_speed = 500; 
                console.log("player on bouncy"); 
            }
    }
   
    else {
        //jump_init_speed = 360;
        console.log ("nu uh");
        player.on_bouncy = false;
            
            if(playeron_bouncy = false){
            jump_init_speed = 360;
            }   
    }

    
}

function create_bouncy(s,player,bouncy) {
    bouncy = PP.assets.image.add(s, img_bouncy, 512, 568, 0.5,1);
    PP.physics.add(s,bouncy, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, bouncy, collision_bouncy);


}


function update_bouncy(s){}

