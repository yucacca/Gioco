let wall;
let pavimenti;
let img_platform_1;
let img_platform_2;
let img_platform_3;
let img_platform_4;
let img_platform_5;
let img_platform_6;
let img_platform_7;
let img_platform_8;
let img_platform_9;
let img_platform_11;
let img_platform_12;
let img_platform_13;
let img_platform_14;
let img_platform_collapsing;

function preload_pavimenti(s) {
    img_platform_1 = PP.assets.image.load(s, "assets/images/pavimenti/platform_1.png"); 
    img_platform_2 = PP.assets.image.load(s, "assets/images/pavimenti/platform_2.png");
    img_platform_3 = PP.assets.image.load(s, "assets/images/pavimenti/platform_3.png"); 
    img_platform_4 = PP.assets.image.load(s, "assets/images/pavimenti/platform_4.png");
    img_platform_5 = PP.assets.image.load(s, "assets/images/pavimenti/platform_5.png"); 
    img_platform_6 = PP.assets.image.load(s, "assets/images/pavimenti/platform_6.png"); 
    img_platform_7 = PP.assets.image.load(s, "assets/images/pavimenti/platform_7.png"); 
    img_platform_8 = PP.assets.image.load(s, "assets/images/pavimenti/platform_8 .png"); 
    img_platform_9 = PP.assets.image.load(s, "assets/images/pavimenti/platform_9.png"); 
    img_platform_11 = PP.assets.image.load(s, "assets/images/pavimenti/platform_11 .png");
    img_platform_12 = PP.assets.image.load(s, "assets/images/pavimenti/platform_12.png");
    img_platform_13 = PP.assets.image.load(s, "assets/images/pavimenti/platform_13.png");
    img_platform_14 = PP.assets.image.load(s, "assets/images/pavimenti/platform_14.png");
    img_platform_collapsing = PP.assets.image.load(s, "assets/images/pavimenti/platform_collapsing.png");

}

function collision_pavimenti(s, player, pavimenti) {
    if( player.geometry.x >= pavimenti.geometry.x - pavimenti.geometry.display_width &&
        player.geometry.x <= pavimenti.geometry.x + pavimenti.geometry.display_width &&
        player.geometry.y == pavimenti.geometry.y - pavimenti.geometry.display_height/2 + 15
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
    pavimenti = PP.assets.image.add(s, img_platform_1, 320, 640, 0.5,0.5); 
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC);  //questi li lasci come sono
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);  
    

 //piattaforma 2
    pavimenti = PP.assets.image.add(s, img_platform_2, 1088, 640, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 2b
    pavimenti = PP.assets.image.add(s, img_platform_13, 1344, 480, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 4
    pavimenti = PP.assets.image.add(s, img_platform_4, 2816, 544, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

    
//piattaforma 5
    pavimenti = PP.assets.image.add(s, img_platform_5, 3360, 580, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 6
    pavimenti = PP.assets.image.add(s, img_platform_6, 3680, 688, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 7
    pavimenti = PP.assets.image.add(s, img_platform_7, 3680, 290, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 8
    pavimenti = PP.assets.image.add(s, img_platform_8, 4000, 592, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 8a
    pavimenti_8a = PP.assets.image.add(s, img_platform_13, 4708, 320, 0.5,0.5);
    PP.physics.add(s, pavimenti_8a, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti_8a, collision_pavimenti);


//piattaforma 9
    pavimenti = PP.assets.image.add(s, img_platform_9, 5536, 592, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 10
    pavimenti = PP.assets.image.add(s, img_platform_13, 5536, 340, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 11
    pavimenti = PP.assets.image.add(s, img_platform_11, 5920, 688, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 12
    pavimenti = PP.assets.image.add(s, img_platform_12, 7648, 528, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 13
    pavimenti = PP.assets.image.add(s, img_platform_11, -148, 600, 0.5, 0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 14
    pavimenti = PP.assets.image.add(s, img_platform_11, -404, 525, 0.5, 0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 15
    pavimenti = PP.assets.image.add(s, img_platform_11, -661, 430, 0.5, 0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 17
    pavimenti = PP.assets.image.add(s, img_platform_13, -1000, 220, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 18
    pavimenti = PP.assets.image.add(s, img_platform_13, -1284, 50, 0.5,0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);


//piattaforma 22
    pavimenti = PP.assets.image.add(s, img_platform_14, -2500, 100, 0.5, 0.5);
    PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);

}

function update_pavimenti(s) {
    
}