let img_background_0;
let img_background_1;
let img_background_2;
let img_background_3;
let img_player;

let floor;
let player;
let wall;
let pavimenti;
let collapsing;

function preload (s) {
    preload_player(s);

    preload_trap (s);
    
    
    img_background_0 = PP.assets.image.load(s, "assets/images/sfondo_2.png");
    img_background_1 = PP.assets.image.load(s, "assets/images/terzo_piano_2.png");
    img_background_2 = PP.assets.image.load(s, "assets/images/secondo_piano_2.png");
    img_background_3 = PP.assets.image.load(s, "assets/images/primo_piano_2.png");

    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 128, 128);
}

function create (s){
    //create_player(s);
    //create_platform(s);
    //create_cheese(s);
    //create_topo(s);
    

//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background_0, -600, 660, 15000, 720, 0, 1);
        //img_background_0.tile_geometry.scroll_factor_x = 1;

    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -600, 660, 15000, 720, 0, 1); 
        //img_background_1.tile_geometry.scroll_factor_x = 1;

    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -600, 660, 15000, 720, 0, 1); 
       // img_background_2.tile_geometry.scroll_factor_x = 1.3;

    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -600, 660, 15000, 720, 0, 1); 
        //img_background_3.tile_geometry.scroll_factor_x = 1.5;



    //PP.shapes.rectangle_add(s, 0, 740, 10000, 382,"0x634F0F", 1);

    player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1); 
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    configure_player_animations(s, player); 
 if(player.geometry.x <= 250)  {
    img_background_0.tile_geometry.scroll_factor_x = 0;
    img_background_1.tile_geometry.scroll_factor_x = 0;
    img_background_2.tile_geometry.scroll_factor_x = 0;
    img_background_3.tile_geometry.scroll_factor_x = 0;
}

else{
    img_background_0.tile_geometry.scroll_factor_x = 1;
    img_background_1.tile_geometry.scroll_factor_x = 1;
    img_background_2.tile_geometry.scroll_factor_x = 1.3;
    img_background_3.tile_geometry.scroll_factor_x = 1.5;

}

    /*floor = PP.shapes.rectangle_add(s, 0, 570, 1220, 1, "0x000000", 0); //questo è un pavimento trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, floor);   //la collisione con il pavimento
*/
    //create_trap(s,player, floor);

    /*wall = PP.shapes.rectangle_add(s, 0, 960, 640, 150, "0x000000", 0); //questo è un muro trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);*/

    create_pavimenti(s,player, pavimenti);
    create_collapsing(s,player,collapsing);
}


function update (s){



    update_player(s, player);
    //update_platform(s);
    //update_topo(s);

    //qui andrebbe decisamente migliorato l'effetto. Se facciamo anche il lv 1 si crea un js solo per questo
       // if (player.geometry.x <= 640) {
          //  PP.camera.set_follow_offset(s, 640, 360);
        //}
    
       // else {
        PP.camera.start_follow(s, player, -50, 220);
        //}


}


function destroy (s)  {

}

PP.scenes.add ("level2", preload, create, update, destroy)