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
    


    PP.assets.tilesprite.add(s, img_background, 0, 0, 10000, 2500, 0.5, 0.1); //spritesheet delllo sfondo
    player = PP.assets.sprite.add(s, img_player, 500, 550, 0.5, 1); 
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    //PP.physics.set_velocity_x(player, 50);
    //PP.physics.set_velocity_y(player, 25);

    //return;

    floor = PP.shapes.rectangle_add(s, 640, 550, 10000, 1, "0x000000", 0); //questo è un pavimento trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, floor);   //la collisione con il pavimento

    //PP.assets.image.add(s, img_background, 0 , 550, 0, 0); //sfondo
    
    create_trap(s,player, floor);

    //PP.camera.set_follow_offset(s,250, 250);
    PP.camera.start_follow(s, player, 0, 220);
   

}


function update (s){

    /*if(player.geometry.x >= 100) {
        PP.physics.set_velocity_x(player, 100);
    } else {
        if(player.geometry.y >= 200) {
            PP.physics.set_velocity_y(player, -50);
        }    
    }

    return;*/


    update_player(s, player);
    //update_platform(s);
    //update_princess(s);
    //update_topo(s);
    update_trap(s);

}


function destroy (s)  {

}

PP.scenes.add ("level1", preload, create, update, destroy)