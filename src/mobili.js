let mobili_1;
let mobili_2;
let mobili_3;
let mobili_4;
let mobili_5;


const mobili = [ "mobili_1", "mobili_2", "mobili_3", "mobili_4", "mobili_5"]

function preload_mobili(s) {
    
}

function collision_mobili(s, player, mobili) {
    if( player.geometry.x >= mobili.geometry.x - mobili.geometry.display_width &&
        player.geometry.x <= mobili.geometry.x + mobili.geometry.display_width &&
        player.geometry.y == mobili.geometry.y - mobili.geometry.display_height/2 + 15) {
            player.is_on_platform = true;
    }
}


function create_mobili(s,player) {
    
    mobili_1 = PP.assets.image.add(s, img_platform_13, 1600, 382, 0.5, 0.5);
    PP.physics.add(s, mobili_1, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(mobili_1, true);
    PP.physics.set_allow_gravity(mobili_1, false);    
    PP.physics.add_collider_f(s, player, mobili_1, collision_mobili);
    PP.physics.set_velocity_x(mobili_1, 130);

    mobili_2 = PP.assets.image.add(s, img_platform_13, 4192, 424, 0.5, 0.5);
    PP.physics.add(s, mobili_2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(mobili_2, true);
    PP.physics.set_allow_gravity(mobili_2, false);    
    PP.physics.add_collider_f(s, player, mobili_2, collision_mobili);
    PP.physics.set_velocity_x(mobili_2, 100);
    
    mobili_2.destroyed = false;

    mobili_3 = PP.assets.image.add(s, img_platform_13, 4896, 424, 0.5, 0.5);
    PP.physics.add(s, mobili_3, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(mobili_3, true);
    PP.physics.set_allow_gravity(mobili_3, false);    
    PP.physics.add_collider_f(s, player, mobili_3, collision_mobili);
    PP.physics.set_velocity_x(mobili_3, 100);

    mobili_4 = PP.assets.image.add(s, img_platform_13, 6432, 704, 0.5,0.5);
    PP.physics.add(s, mobili_4, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(mobili_4, true);
    PP.physics.set_allow_gravity(mobili_4, false);    
    PP.physics.add_collider_f(s, player, mobili_4, collision_mobili);
    PP.physics.set_velocity_y(mobili_4, 100);

    mobili_5 = PP.assets.image.add(s, img_platform_13, -1284, 450, 0.5, 0.5);
    PP.physics.add(s, mobili_5, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(mobili_5, true);
    PP.physics.set_allow_gravity(mobili_5, false);    
    PP.physics.add_collider_f(s, player, mobili_5, collision_mobili);
    PP.physics.set_velocity_x(mobili_5, 130);

}


function update_mobili(s) {

    if(mobili_1.geometry.x >= 2240) {
        PP.physics.set_velocity_x(mobili_1, -130);
    }
    else if(mobili_1.geometry.x <= 1550) {
        PP.physics.set_velocity_x(mobili_1, 130);
    }

if(mobili_2.destroyed == false){
    if(mobili_2.geometry.x >= 4418) {
        PP.physics.set_velocity_x(mobili_2, -100);
    }
    else if(mobili_2.geometry.x <= 4220) {
        PP.physics.set_velocity_x(mobili_2, 100);
    }

    
}

if(mobili_2.destroyed == false){
    if(mobili_3.geometry.x >= 5122) {
        PP.physics.set_velocity_x(mobili_3, -100);
    }
    else if(mobili_3.geometry.x <= 4896) {
        PP.physics.set_velocity_x(mobili_3, 100);
    }
}

    if(mobili_4.geometry.y >= 650) {
        PP.physics.set_velocity_y(mobili_4, -100);
    }
    else if(mobili_4.geometry.y <= 320) {
        PP.physics.set_velocity_y(mobili_4, 100);
    }


    if(mobili_5.geometry.x >= -950) {
        PP.physics.set_velocity_x(mobili_5, -130);
    }
    else if(mobili_5.geometry.x <= -1580) {
        PP.physics.set_velocity_x(mobili_5, 130);
    }
}