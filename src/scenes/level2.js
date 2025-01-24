let img_background;
let img_background_0;
let img_background_1;
let img_background_2;
let img_background_3;
let img_player;
let img_bridge; 
let img_castello;
let img_rovi_sotto;
let img_rovo_copertura;
let img_cartello_dx;
let img_cartello_sx;
let img_cartello_barra;
let img_cartello_f;
let img_topo;
let img_background_corrotto_1;
let img_background_corrotto_2;
let img_background_corrotto_3;
let img_dialogo;
let img_checkpoint_1;
let img_checkpoint_2;

let floor;
let player;
let wall;
let pavimenti;
let collapsing;
let txt_score;
let castello;
let rovi_sotto;
let rovo_copertura;
let cartello_dx;
let cartello_sx;
let cartello_barra;
let cartello_f;
let topo;
let ponte;

let anello_1_done = false;
let anello_2_done = false;
let anello_3_done = false;

let checkpoint = false;



const asset = [ "img_background_0", "img_background_1", "img_background_2", "img_background_3", "img_player"];

function preload (s) {
    preload_player(s);
    preload_cuori (s);
    preload_rovi (s);
    preload_bouncy(s);
    preload_pavimenti(s);
    preload_collapsing(s);
    preload_fiume (s);
    preload_rocce(s);
    preload_gui (s);

    img_background = PP.assets.image.load(s, "assets/images/quarto_piano.png");
    img_background_1 = PP.assets.image.load(s, "assets/images/terzo_piano.png");
    img_background_2 = PP.assets.image.load(s, "assets/images/secondo_piano.png");
    img_background_3 = PP.assets.image.load(s, "assets/images/primo_piano.png");
    img_rovi_sotto= PP.assets.image.load(s, "assets/images/rovi_sotto.png");
    img_rovo_copertura= PP.assets.image.load(s, "assets/images/rovo_copertura.png");
    img_cartello_dx = PP.assets.image.load(s, "assets/images/dx.png");
    img_cartello_sx = PP.assets.image.load(s, "assets/images/sx.png");
    img_cartello_barra = PP.assets.image.load(s, "assets/images/barra.png");
    img_cartello_f = PP.assets.image.load(s, "assets/images/f.png");
    img_topo = PP.assets.image.load(s, "assets/images/topo.png");

    img_background_corrotto_1 = PP.assets.image.load(s, "assets/images/terzopiano_corrotto.png");
    img_background_corrotto_2 = PP.assets.image.load(s, "assets/images/secondopiano_corrotto.png");
    img_background_corrotto_3 = PP.assets.image.load(s, "assets/images/primopiano_corrotto.png");


    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 58,108);
    img_bridge = PP.assets.image.load(s, "assets/images/bridge.png");
    img_castello = PP.assets.image.load(s, "assets/images/castello.png");
    img_dialogo = PP.assets.image.load(s, "assets/images/dialogo.png");
    img_checkpoint_1 = PP.assets.image.load(s, "assets/images/checkpoint_1.png");
    img_checkpoint_2 = PP.assets.image.load(s, "assets/images/checkpoint_2.png");

}


function create (s){
    anello_1_done = false;
    anello_2_done = false;
    anello_3_done = false;

    damage_imm = false; //per resettare il flag di damage imm, ref gestione.

//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background, -4000, 720, 15000, 850, 0, 1);
    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -4000, 720, 15000, 850, 0, 1); 
    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -4000, 800, 15000, 850, 0, 1); 
    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -4500, 900, 18000, 1500, 0, 1); 

    let layer_bg_1 = PP.layers.create(s);
    PP.layers.add_to_layer(layer_bg_1, img_background_3);
    PP.layers.set_z_index(layer_bg_1, 0);

    let layer_bg = PP.layers.create(s);
    PP.layers.add_to_layer(layer_bg, img_background_0);
    PP.layers.add_to_layer(layer_bg, img_background_1);
    PP.layers.add_to_layer(layer_bg, img_background_2);
    PP.layers.set_z_index(layer_bg, -1.2);
    
    cartello_dx = PP.assets.image.add(s, img_cartello_dx, -2190, 80, 1,1);
    cartello_sx = PP.assets.image.add(s, img_cartello_sx, -2350, 80, 1,1);
    cartello_barra = PP.assets.image.add(s, img_cartello_barra, -1580, 80, 1,1);
    cartello_f = PP.assets.image.add(s, img_cartello_f, 1344, 500, 0.5,1);
    topo = PP.assets.image.add(s, img_topo, -2670, 80, 0.5,1);
    PP.assets.image.add(s, img_dialogo, -2680, -100, 0,1);




    if (checkpoint == false){
        player = PP.assets.sprite.add(s, img_player, -2376, 83, 0.5, 1); 
        
    }

    else if(checkpoint == true){
        player = PP.assets.sprite.add(s, img_player, 3330, 350, 0.5, 1);
    }


    //player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1); // VECCHIO SPAWN
    //player = PP.assets.sprite.add(s, img_player, -2376, 83, 0.5, 1);  //SPAWN GIUSTO
    //player = PP.assets.sprite.add(s, img_player, 3936, 100, 0.5, 1); //SPAWN PER TEST

    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 
    PP.physics.set_collision_rectangle(player, 58, 108, 0, -15)

    let giocatore = PP.layers.create(s);
    PP.layers.add_to_layer(giocatore, player);
    PP.layers.set_z_index(giocatore, 1);

    configure_player_animations(s, player); 


    img_background_0.tile_geometry.scroll_factor_x = 1;
    img_background_1.tile_geometry.scroll_factor_x = 1;
    img_background_2.tile_geometry.scroll_factor_x = 1.1;
    img_background_3.tile_geometry.scroll_factor_x = 1.3;

    

    create_pavimenti(s,player, pavimenti);

    castello = PP.assets.image.add(s, img_castello, -2190, 80, 1,1);

    create_collapsing(s,player,collapsing);
    create_mobili(s,player);
    create_fiume(s,player,fiume); 
    create_cuori(s,player);
    create_rovi(s,player,rovi);
    create_bouncy(s,player,bouncy);
    create_rocce(s,player,pavimenti);
    create_fiume(s,player,fiume);

    rovi_sotto = PP.assets.tilesprite.add(s, img_rovi_sotto, -4500, 700, 18000, 1500, 0, 0);
    rovo_copertura = PP.assets.tilesprite.add(s, img_rovo_copertura, -4500, 700, 18000, 1500, 0, 0);

    create_gui (s);

    PP.game_state.set_variable("vite", 1);
    PP.game_state.set_variable("anello", 0);

}


function update (s){

    if (player.geometry.x >= 3300){
        checkpoint = true;
    }


    update_player(s, player);

    PP.camera.start_follow(s, player, -50, 100);

    update_mobili(s);
    update_bouncy (s);
    update_rocce (s,player);
    update_gui(s,player);
    



//utilizzo anello 1
    if (player.geometry.x >=1280 && player.geometry.x <=1408 && anello_1_done == false ) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
        
            PP.assets.destroy(rovi_1);  
            PP.assets.destroy(rovi_2);  
            PP.assets.destroy(rovi_3);

             
            let bg_corrotto_2 = PP.assets.tilesprite.add(s, img_background_corrotto_2, 1280, 850, 1800, 850, 0, 1); 
            bg_corrotto_2.tile_geometry.scroll_factor_x = 1.3

            let layer_bg_corrotto= PP.layers.create(s);
            PP.layers.add_to_layer(layer_bg_corrotto, bg_corrotto_2);
            PP.layers.set_z_index(layer_bg_corrotto, -1);

            


            let prev_anello = PP.game_state.get_variable("anello");
            PP.game_state.set_variable("anello", prev_anello+1);

            anello_1_done = true;
        
        }
        
    }

//utilizzo anello 2
    if (player.geometry.x >=3936 && player.geometry.x <=4064 && anello_2_done == false ) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
    
            mobili_2.destroyed = true;

            PP.assets.destroy(mobili_2);  
            PP.assets.destroy(mobili_3);  
            PP.assets.destroy(pavimenti_8a); 
    
            ponte = PP.assets.image.add(s, img_bridge, 4640, 470, 0.5,0.5);
            let layer_ponte= PP.layers.create(s);
            PP.layers.add_to_layer(layer_ponte, ponte);
            PP.layers.set_z_index(layer_ponte, 1.5);

            pavimenti = PP.shapes.rectangle_add(s, 4640, 490, 1152, 50, "0xAB4F0F", 0); 
            PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
            PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);
        

            let bg_corrotto_2 = PP.assets.tilesprite.add(s, img_background_corrotto_2, 3800, 850, 3000, 850, 0, 1); 
            bg_corrotto_2.tile_geometry.scroll_factor_x = 1.3

            let layer_bg_corrotto= PP.layers.create(s);
            PP.layers.add_to_layer(layer_bg_corrotto, bg_corrotto_2);
            PP.layers.set_z_index(layer_bg_corrotto, -1);

            let prev_anello = PP.game_state.get_variable("anello");
            PP.game_state.set_variable("anello", prev_anello+1);

            anello_2_done = true;
    }
    
}


//utilizzo anello 3
    if (player.geometry.x >=5724 && player.geometry.x <=5984 && anello_3_done == false) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
    
            PP.assets.destroy(collapsing_4); 
            pavimenti = PP.assets.image.add(s, img_platform_13, 6176, 656, 0.5,0.5);

            PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
            PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);  

            let bg_corrotto_2 = PP.assets.tilesprite.add(s, img_background_corrotto_2, 5700, 850, 3000, 850, 0, 1); 
            bg_corrotto_2.tile_geometry.scroll_factor_x = 1.3

            let layer_bg_corrotto= PP.layers.create(s);
            PP.layers.add_to_layer(layer_bg_corrotto, bg_corrotto_2);
            PP.layers.set_z_index(layer_bg_corrotto, -1);

            let prev_anello = PP.game_state.get_variable("anello");
            PP.game_state.set_variable("anello", prev_anello+1);
            anello_3_done = true;
        }
    
    }

    let checkpoint_n;
    let curr_checkpoint;

    const checkpoint_asset = [img_checkpoint_1, img_checkpoint_2];

    if (curr_checkpoint) {
        PP.assets.destroy(curr_checkpoint);
    }

    if(checkpoint == false){
        checkpoint_n = 0;
    }

    if(checkpoint == true){
        checkpoint_n = 1;
    }

    curr_checkpoint = PP.assets.image.add(s, checkpoint_asset[checkpoint_n], 3330, 300, 0, 0);


    if(player.geometry.x >= 7700) {

        PP.scenes.start("finale");

    } 

}


function destroy (s) {

}  



PP.scenes.add ("level2", preload, create, update, destroy);