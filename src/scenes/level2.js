let img_background

function preload (s) {
    preload_player(s);
    preload_platform(s);
    preload_cheese(s);
    preload_princess(s);
    preload_topo(s);
    preload_trap(s);
    
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
}

function create (s){
    create_player(s);
    create_platform(s);
    create_cheese(s);
    create_princess (s);
    create_topo(s);
    create_trap(s);

    PP.assets.image.add(s, img_background, 0 , 0, 0, 0)
}

function update (s){
    update_player(s);
    update_platform(s);
    update_princess(s);
    update_topo(s);
    update_trap(s);
}

function destroy (s)  {

}

PP.scenes.add ("level2", preload, create, update, destroy)