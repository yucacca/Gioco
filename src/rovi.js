let rovi;
let rovi_1;
let rovi_2;
let rovi_3;
let img_rovi;

function preload_rovi(s) {
    img_rovi = PP.assets.image.load(s, "assets/images/rovo.png");
}

function create_rovi(s,player,rovi) {
    rovi_1 = PP.assets.image.add(s, img_rovi, 1872, 1066, 0.5,1);
    PP.physics.add(s,rovi_1, PP.physics.type.STATIC); 
    PP.physics.add_overlap_f(s, player, rovi_1, perdi_vite);

    rovi_2 = PP.assets.image.add(s, img_rovi, 2300, 1066, 0.5,1);
    PP.physics.add(s,rovi_2, PP.physics.type.STATIC); 
    PP.physics.add_overlap_f(s, player, rovi_2, perdi_vite);
    
    rovi_3 = PP.assets.image.add(s, img_rovi, 2086, 1066, 0.5,1);
    PP.physics.add(s,rovi_3, PP.physics.type.STATIC); 
    PP.physics.add_overlap_f(s, player, rovi_1, perdi_vite);
}



function update_rovi(s) {
        
}