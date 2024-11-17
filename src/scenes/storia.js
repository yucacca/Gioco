let img_background

function preload (s) {
    preload_player(s);
    img_background = PP.assets.image.load(s, "assets/images/eggdog.png");
    
}

function create (s){
    create_player(s);
    PP.assets.image.add(s, img_background, 0 , 0, 0, 0)
}

function update (s){
    update_player(s);
}

function destroy (s)  {

}

PP.scenes.add ("storia", preload, create, update, destroy)