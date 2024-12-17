let rovi;
let img_rovi;

function preload_rovi(s) {
    img_rovi = PP.assets.image.load(s, "assets/images/rovo1.png");
}

function create_rovi(s,player,rovi) {
    rovi = PP.assets.image.add(s, img_rovi, 1872, 696, 0.5,1);
    PP.physics.add(s,rovi, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, rovi, perdi_vite);

    rovi = PP.assets.image.add(s, img_rovi, 2300, 696, 0.5,1);
    PP.physics.add(s,rovi, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, rovi, perdi_vite);
    
}

function perdi_vite(s){
    prev_score = PP.game_state.get_variable("vite");
    PP.game_state.set_variable("vite", prev_score-1);
    console.log("-1");
}


function update_rovi(s) {
    
}