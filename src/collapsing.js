let collapsing;

function preload_collapsing(s) {

}

function collision_collapsing(s, player, collapsing) {
    if( player.geometry.x >= collapsing.geometry.x - collapsing.geometry.display_width &&
        player.geometry.x <= collapsing.geometry.x + collapsing.geometry.display_width &&
        player.geometry.y == collapsing.geometry.y - collapsing.geometry.display_height/2) {
            player.is_on_platform = true;
            
           // PP.timers.add_timer(s, 10, move_collapsing, false);
            //console.log("ti prego ti prego");
    }


}


function create_collapsing(s,player,collapsing) {
    
//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità. Per la posizione x prende il punto in mezzo, quindi va aggiunto metà spessore. 

//collapsing 1
    collapsing = PP.shapes.rectangle_add(s, 832, 480, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 2
    collapsing = PP.shapes.rectangle_add(s, 2752, 224, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 3
    collapsing = PP.shapes.rectangle_add(s, 3008, 192, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 4
    collapsing = PP.shapes.rectangle_add(s, 6176, 656, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

//collapsing 5
    collapsing = PP.shapes.rectangle_add(s, 6944, 192, 128, 32, "0x634F4F", 1); 
    PP.physics.add(s, collapsing, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, collapsing, collision_collapsing);

}


function move_collapsing(s,collapsing) {
    PP.physics.add(s, collapsing, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(collapsing, true);
    PP.physics.set_allow_gravity(collapsing, false);    
    PP.physics.add_collider_f(s, player, collapsing, collision_platform);
    PP.physics.set_velocity_y(collapsing, 100);
    console.log("miaoooo");
}

