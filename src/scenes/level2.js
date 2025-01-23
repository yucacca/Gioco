let img_background_0;
let img_background_1;
let img_background_2;
let img_background_3;
let img_player;
let img_bridge; 

let floor;
let player;
let wall;
let pavimenti;
let collapsing;
let txt_score;

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

    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 58,108);
    img_bridge = PP.assets.image.load(s, "assets/images/bridge.png");
    
}


function create (s){
damage_imm = false; //per resettare il flag di damage imm, ref gestione.

//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background_0, -4000, 720, 15000, 850, 0, 1);
        //img_background_0.tile_geometry.scroll_factor_x = 1;

    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -4000, 720, 15000, 850, 0, 1); 
        //img_background_1.tile_geometry.scroll_factor_x = 1;

    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -4000, 800, 15000, 850, 0, 1); 
       // img_background_2.tile_geometry.scroll_factor_x = 1.3;

    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -4500, 900, 18000, 1500, 0, 1); 
        //img_background_3.tile_geometry.scroll_factor_x = 1.5;



    //PP.shapes.rectangle_add(s, 0, 740, 10000, 382,"0x634F0F", 1);
    
    player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1); // VECCHIO SPAWN
    //player = PP.assets.sprite.add(s, img_player, -2276, -100, 0.5, 1);  //SPAWN GIUSTO
    //player = PP.assets.sprite.add(s, img_player, 7500, 100, 0.5, 1); //SPAWN PER TEST

    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    configure_player_animations(s, player); 


    img_background_0.tile_geometry.scroll_factor_x = 1;
    img_background_1.tile_geometry.scroll_factor_x = 1;
    img_background_2.tile_geometry.scroll_factor_x = 1.1;
    img_background_3.tile_geometry.scroll_factor_x = 1.3;


    create_pavimenti(s,player, pavimenti);
    create_collapsing(s,player,collapsing);
    create_mobili(s,player);
    create_fiume(s,player,fiume); 
    create_cuori(s,player);
    create_rovi(s,player,rovi);
    create_bouncy(s,player,bouncy);
    create_rocce(s,player,pavimenti);
    create_fiume(s,player,fiume);
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
    update_gui(s);
    



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


            PP.scenes.start("finale1");

    

    } 

}


function destroy (s) {

//il problema è che quando va in game over non entra mai nel destroy quindi idk

}  



PP.scenes.add ("level2", preload, create, update, destroy);