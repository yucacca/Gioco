let bouncy;
let img_bouncy;
let on_bouncy = false;

function preload_bouncy(s) {
    img_bouncy = PP.assets.image.load(s, "assets/images/F0.png");
}




function create_bouncy(s,player,bouncy) {

    on_bouncy = false;
    
    bouncy = PP.assets.image.add(s, img_bouncy, 512, 547, 0.5,0.5);
    PP.physics.add(s,bouncy, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, bouncy, collision_bouncy);

    bouncy = PP.assets.image.add(s, img_bouncy, 3764, 626, 0.5,0.5);
    PP.physics.add(s,bouncy, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, bouncy, collision_bouncy);


    function collision_bouncy(s,player,bouncy){

        if( player.geometry.x >= bouncy.geometry.x - bouncy.geometry.display_width/2 -20 &&
            player.geometry.x <= bouncy.geometry.x + bouncy.geometry.display_width/2 + 20 &&
            player.geometry.y == bouncy.geometry.y - bouncy.geometry.display_height/2 + 15){
            
                player.is_on_platform = true;
                on_bouncy = true;    
            } 
   
        else {
            on_bouncy = false;
        } 

    }
}


function update_bouncy(s){ 

    function bouncy_timer(s){
        on_bouncy = false;
    }

    if(on_bouncy == true){
        PP.timers.add_timer(s, 400, bouncy_timer, false);
    }

    if (on_bouncy == true) {
        jump_init_speed = 500; 
    }
   
    if (on_bouncy == false) {
        jump_init_speed = 360;
    }

}

