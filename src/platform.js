let img_platform;

function preload_platform(s) {
    img_platform   = PP.assets.image.load(s, "assets/images/eggdog.png");

}

function create_platform(s) {
    PP.assets.image.add(s, "assets/images/eggdog.png");
}

function update_platform(s) {
    
}