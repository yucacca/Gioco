let wall;
let pavimenti;

function preload_pavimenti(s) {

}

function collision_pavimenti(s, player, pavimenti) {
    if( player.geometry.x >= pavimenti.geometry.x - pavimenti.geometry.display_width &&
        player.geometry.x <= pavimenti.geometry.x + pavimenti.geometry.display_width &&
        player.geometry.y == pavimenti.geometry.y - pavimenti.geometry.display_height/2
        ) {
            player.is_on_platform = true;
            
    }
} 

function create_pavimenti(s,player,wall) {
    
//Per shapes : s, posizione x, posizione y, spessore, altezza, colore e opacità. Per la posizione x prende il punto in mezzo, quindi va aggiunto metà spessore. 
//muro sx
    wall = PP.shapes.rectangle_add(s, -2790, 0, 1, 2000, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player. 
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

//piattaforma 1
    pavimenti = PP.shapes.rectangle_add(s, 320, 640, 640, 150, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);
    

 //piattaforma 2
    pavimenti = PP.shapes.rectangle_add(s, 1088, 640, 128, 150, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 2b
    pavimenti = PP.shapes.rectangle_add(s, 1344, 480, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 3
    /*pavimenti = PP.shapes.rectangle_add(s, 2048, 688, 768, 64, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);
*/

//piattaforma 4
    pavimenti = PP.shapes.rectangle_add(s, 2816, 544, 768, 352, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 5
    pavimenti = PP.shapes.rectangle_add(s, 3360, 544, 64, 352, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 6
    pavimenti = PP.shapes.rectangle_add(s, 3680, 688, 256, 64, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 7
    pavimenti = PP.shapes.rectangle_add(s, 3680, 250, 384, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 8
    pavimenti = PP.shapes.rectangle_add(s, 4000, 592, 128, 256, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 8a
    pavimenti = PP.shapes.rectangle_add(s, 4708, 320, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 9
    pavimenti = PP.shapes.rectangle_add(s, 5536, 592, 640, 256, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 10
    pavimenti = PP.shapes.rectangle_add(s, 5536, 340, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

//piattaforma 11
    pavimenti = PP.shapes.rectangle_add(s, 5920, 688, 128, 64, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 12
    pavimenti = PP.shapes.rectangle_add(s, 7648, 528, 2048, 384, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 13
    pavimenti = PP.shapes.rectangle_add(s, -128, 640, 256, 350, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 14
    pavimenti = PP.shapes.rectangle_add(s, -384, 530, 256, 350, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 15
    pavimenti = PP.shapes.rectangle_add(s, -641, 420, 256, 350, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 16
    pavimenti = PP.shapes.rectangle_add(s, -641, -420, 256, 1000, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 17
    pavimenti = PP.shapes.rectangle_add(s, -959, 0, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 18
    pavimenti = PP.shapes.rectangle_add(s, -1284, -96, 128, 32, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 19
    pavimenti = PP.shapes.rectangle_add(s, -1604, 446, 256, 508, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 20
    pavimenti = PP.shapes.rectangle_add(s, -1604, -112, 256, 256, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 21
    pavimenti = PP.shapes.rectangle_add(s, -1860, -304, 256, 128, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 22
    pavimenti = PP.shapes.rectangle_add(s, -2276, 240, 1088, 960, "0x634F0F", 1); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

}

function update_pavimenti(s) {
    
}