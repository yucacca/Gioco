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

    img_background_0 = PP.assets.image.load(s, "assets/images/quarto_piano.png");
    img_background_1 = PP.assets.image.load(s, "assets/images/terzo_piano.png");
    img_background_2 = PP.assets.image.load(s, "assets/images/secondo_piano.png");
    img_background_3 = PP.assets.image.load(s, "assets/images/primo_piano.png");

    img_player = PP.assets.sprite.load_spritesheet(s,"assets/images/protagonista_spritesheet.png", 58,108);
    
    
}


function create (s){

//setup parallasse per sfondo
    img_background_0 = PP.assets.tilesprite.add(s, img_background_0, -3000, 720, 15000, 850, 0, 1);
        //img_background_0.tile_geometry.scroll_factor_x = 1;

    img_background_1 = PP.assets.tilesprite.add(s, img_background_1, -3000, 720, 15000, 850, 0, 1); 
        //img_background_1.tile_geometry.scroll_factor_x = 1;

    img_background_2 = PP.assets.tilesprite.add(s, img_background_2, -3000, 800, 15000, 850, 0, 1); 
       // img_background_2.tile_geometry.scroll_factor_x = 1.3;

    img_background_3 = PP.assets.tilesprite.add(s, img_background_3, -3000, 900, 15000, 1500, 0, 1); 
        //img_background_3.tile_geometry.scroll_factor_x = 1.5;



    //PP.shapes.rectangle_add(s, 0, 740, 10000, 382,"0x634F0F", 1);
    
    player = PP.assets.sprite.add(s, img_player, 320, 565, 0.5, 1); // VECCHIO SPAWN
    //player = PP.assets.sprite.add(s, img_player, -2276, -240, 0.5, 1);  //SPAWN GIUSTO
    //player = PP.assets.sprite.add(s, img_player, 3300, 300, 0.5, 1); //SPAWN PER TEST

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

    PP.game_state.set_variable("vite", 3);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "vite: 3", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;

    PP.game_state.set_variable("anello", 0);
    txt_score = PP.shapes.text_styled_add(s, 10, 30, "anello: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0;
}


function update (s){

    PP.shapes.text_change(txt_score, "vite: " + PP.game_state.get_variable("vite"));
    PP.shapes.text_change(txt_score, "anello: " + PP.game_state.get_variable("anello"));


    update_player(s, player);

        PP.camera.start_follow(s, player, -50, 100);

    update_mobili(s);
    update_bouncy (s);
    
 
//utilizzo anello 1
    if (player.geometry.x >=1280 && player.geometry.x <=1408 && anello_1_done == false ) {

        if(PP.interactive.kb.is_key_down(s, PP.key_codes.F)) {
        
            PP.assets.destroy(rovi_1);  
            PP.assets.destroy(rovi_2);  


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
    

        pavimenti = PP.shapes.rectangle_add(s, 4640, 500, 1152, 100, "0xAB4F0F", 1); 
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
            pavimenti = PP.shapes.rectangle_add(s, 6176, 656, 128, 32, "0xAB4F0F", 1); 
            PP.physics.add(s, pavimenti, PP.physics.type.STATIC); 
            PP.physics.add_collider_f(s, player, pavimenti, collision_pavimenti);  

            let prev_anello = PP.game_state.get_variable("anello");
            PP.game_state.set_variable("anello", prev_anello+1);
            anello_3_done = true;
        }
    
    }



    if(player.geometry.x >= 7500) {
        PP.scenes.start("finale1");
        
    } 

}


function destroy (s) {

//il problema è che quando va in game over non entra mai nel destroy quindi idk

}  



PP.scenes.add ("level2", preload, create, update, destroy);