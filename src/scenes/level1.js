let img_background;
let floor;
let player;

function preload (s) {
    preload_player(s);
    //preload_platform(s);
    //preload_cheese(s);
    //preload_princess(s);
    //preload_topo(s);
    //preload_trap(s); 
    
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
}

function create (s){
    create_player(s);
    //create_platform(s);
    //create_cheese(s);
    //create_princess (s);
    //create_topo(s);
    //create_trap(s);


    floor = PP.shapes.rectangle_add(s, 640, 550, 1280, 1, "0x000000", 0); //questo è un pavimento trasparente ed è stata messa la collisione tra pavimento e player
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
   // PP.physics.add_collider(s, player, floor);

    PP.assets.image.add(s, img_background, 0 , 550, 0, 0); //sfondo

}

function update (s){
    update_player(s);
    //update_platform(s);
    //update_princess(s);
    //update_topo(s);
    //update_trap(s);
}

function destroy (s)  {

}

PP.scenes.add ("level1", preload, create, update, destroy)