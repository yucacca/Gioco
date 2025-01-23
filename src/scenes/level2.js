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

let anello_1_done = false;
let anello_2_done = false;
let anello_3_done = false;



const asset = [ "img_background_0", "img_background_1", "img_background_2", "img_background_3", "img_player"];

function preload (s) {
    preload_player(s);
    preload_trap (s);
    preload_cuori (s);
    preload_rovi (s);
    preload_bouncy(s);
    preload_pavimenti(s);
    preload_collapsing(s);
    preload_fiume (s);
    preload_rocce(s);
    preload_gui (s);

    img_background_0 = PP.assets.image.load(s, "assets/images/quarto_piano.png");
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


    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 58,108);
    img_bridge = PP.assets.image.load(s, "assets/images/bridge.png");
    img_castello = PP.assets.image.load(s, "assets/images/castello.png");
    
}


function create (s){
damage_imm = false; //per resettare il flag di damage imm, ref gestione.

//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background_0, -4000, 720, 15000, 850, 0, 1);
    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -4000, 720, 15000, 850, 0, 1); 
    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -4000, 800, 15000, 850, 0, 1); 
    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -4500, 900, 18000, 1500, 0, 1); 
    
    cartello_dx = PP.assets.image.add(s, img_cartello_dx, -2190, 80, 1,1);
    cartello_sx = PP.assets.image.add(s, img_cartello_sx, -2350, 80, 1,1);
    cartello_barra = PP.assets.image.add(s, img_cartello_barra, -1580, 80, 1,1);
    cartello_f = PP.assets.image.add(s, img_cartello_f, 1344, 500, 0.5,1);
    topo = PP.assets.image.add(s, img_topo, -2680, 80, 0.5,1);



    //player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1); // VECCHIO SPAWN
    player = PP.assets.sprite.add(s, img_player, -2376, 83, 0.5, 1);  //SPAWN GIUSTO
    //player = PP.assets.sprite.add(s, img_player, 7500, 100, 0.5, 1); //SPAWN PER TEST

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

    PP.game_state.set_variable("vite", 3); //rimetto a 1
    PP.game_state.set_variable("anello", 0);

    //vecchia gui 
    /*txt_score = PP.shapes.text_styled_add(s, 10, 10, "vite: 3", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    
    txt_score = PP.shapes.text_styled_add(s, 10, 30, "anello: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    */



  
}


function update (s){
    //let curr_score = PP.game_state.get_variable("vite");
    //console.log(curr_score);
    /*PP.shapes.text_change(txt_score, "vite: " + PP.game_state.get_variable("vite"));
    PP.shapes.text_change(txt_score, "anello: " + PP.game_state.get_variable("anello"));
*/

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
    
        rovi_2 = PP.assets.image.add(s, img_bridge, 4640, 490, 0.5,0.5);
        pavimenti = PP.shapes.rectangle_add(s, 4640, 490, 1152, 50, "0xAB4F0F", 0.5); 
        PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
        PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);
        

        let prev_anello = PP.game_state.get_variable("anello");
        PP.game_state.set_variable("anello", prev_anello+1);

        anello_2_done = true;
    }
    
}


//utilizzo anello 3
    if (player.geometry.x >=5724 && player.geometry.x <=5984 && anello_3_done == false) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
    
            PP.assets.destroy(collapsing_4); 
            //pavimenti = PP.shapes.rectangle_add(s, 6176, 656, 128, 32, "0xAB4F0F", 1); 
            pavimenti = PP.assets.image.add(s, img_platform_13, 6176, 656, 0.5,0.5);

            PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
            PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);  

            let prev_anello = PP.game_state.get_variable("anello");
            PP.game_state.set_variable("anello", prev_anello+1);
            anello_3_done = true;
        }
    
    }


    if(player.geometry.x >= 7700) {


            PP.scenes.start("finale");

    

    } 

}


function destroy (s) {


}  



PP.scenes.add ("level2", preload, create, update, destroy);