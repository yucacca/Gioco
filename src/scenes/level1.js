let img_background;
let img_player;

let floor;
let player;



function preload (s) {
    preload_player(s);
    preload_trap(s)
    //preload_platform(s);
    //preload_cheese(s);
    //preload_princess(s);
    //preload_topo(s);
    
    
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 128, 128);
}

function create (s){
    //create_player(s);
    //create_platform(s);
    //create_cheese(s);
    //create_princess (s);
    //create_topo(s);
    


    PP.assets.tilesprite.add(s, img_background, 0, 0, 10000, 1480, 0.5, 0.52); //spritesheet delllo sfondo
    PP.shapes.rectangle_add(s, 640, 740, 10000, 382,"0xABCDEF", 1)

    player = PP.assets.sprite.add(s, img_player, 500, 570, 0.5, 1); 
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    //PP.physics.set_velocity_x(player, 50);
    //PP.physics.set_velocity_y(player, 25);

    //return;
    configure_player_animations(s, player); 

    floor = PP.shapes.rectangle_add(s, 640, 570, 10000, 1, "0x000000", 0); //questo è un pavimento trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, floor);   //la collisione con il pavimento

    

    create_trap(s,player, floor);

    //PP.camera.set_follow_offset(s,250, 250);
    PP.camera.start_follow(s, player, 0, 220);


}


function update (s){

    //if per passare al livello successivo
    if(player.geometry.x >= 1700) {
        PP.scenes.start("level2");
        
    } 


    update_player(s, player);
    //update_platform(s);
    //update_princess(s);
    //update_topo(s);
    update_trap(s);

}


function destroy (s)  {

}

PP.scenes.add ("level1", preload, create, update, destroy)