let collapsing;

function preload_collapsing(s) {

}

function collision_collapsing(s, player, collapsing) {
    if( player.geometry.x >= pavimenti.geometry.x - pavimenti.geometry.display_width &&
        player.geometry.x <= pavimenti.geometry.x + pavimenti.geometry.display_width ) {
            player.is_on_platform = true;
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