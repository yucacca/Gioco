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
let rovi;
let txt_score;


function preload (s) {
    preload_player(s);
    preload_trap (s);
    preload_cuori (s);
    preload_rovi (s);
    preload_bouncy(s);

    img_background_0 = PP.assets.image.load(s, "assets/images/sfondo_2.png");
    img_background_1 = PP.assets.image.load(s, "assets/images/terzo_piano_2.png");
    img_background_2 = PP.assets.image.load(s, "assets/images/secondo_piano_2.png");
    img_background_3 = PP.assets.image.load(s, "assets/images/primo_piano_2.png");

    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 58,108);
}


function create (s){

    
//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background_0, -3000, 660, 15000, 720, 0, 1);
        //img_background_0.tile_geometry.scroll_factor_x = 1;

    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -3000, 660, 15000, 720, 0, 1); 
        //img_background_1.tile_geometry.scroll_factor_x = 1;

    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -3000, 660, 15000, 720, 0, 1); 
       // img_background_2.tile_geometry.scroll_factor_x = 1.3;

    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -3000, 660, 15000, 720, 0, 1); 
        //img_background_3.tile_geometry.scroll_factor_x = 1.5;



    //PP.shapes.rectangle_add(s, 0, 740, 10000, 382,"0x634F0F", 1);
    
    //player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1);  VECCHIO SPAWN
    player = PP.assets.sprite.add(s, img_player, -2276, -240, 0.5, 1); 
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


    create_pavimenti(s,player, pavimenti);
    create_collapsing(s,player,collapsing);
    create_mobili(s,player);
    create_fiume(s,player,fiume); 
    create_cuori(s,player);
    create_rovi(s,player,rovi);
    create_bouncy(s,player,bouncy);

    PP.game_state.set_variable("vite", 3);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "vite: 3", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;
}


function update (s){

    PP.shapes.text_change(txt_score, "vite: " + PP.game_state.get_variable("vite"));

    update_player(s, player);
    //update_platform(s);
    //update_topo(s);

    //qui andrebbe decisamente migliorato l'effetto. Se facciamo anche il lv 1 si crea un js solo per questo
       // if (player.geometry.x <= 640) {
          //  PP.camera.set_follow_offset(s, 640, 360);
        //}
    
       // else {
        PP.camera.start_follow(s, player, -50, 100);
        //}

    update_mobili(s);
    update_bouncy (s);
}


function destroy (s) {

    PP.assets.destroy(img_background_0);
    PP.assets.destroy(img_background_1);
    PP.assets.destroy(secondo_piano_2.png);
    PP.assets.destroy(terzo_piano_2.png);

    console.log("pepee");
}  



PP.scenes.add ("level2", preload, create, update, destroy);