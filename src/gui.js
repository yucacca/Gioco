let img_gui;
let img_gui_cuori;
let img_gui_cuori_1;
let img_gui_cuori_2;
let img_gui_cuori_3;


let gui;
//let gui_cuori;
let gui_cuori_1;
let gui_cuori_2;
let gui_cuori_3;


function preload_gui(s) {
    img_gui = PP.assets.image.load(s, "assets/images/gui.png");
    img_gui_cuori_1 = PP.assets.image.load(s, "assets/images/gui_cuori_1.png");
    img_gui_cuori_2 = PP.assets.image.load(s, "assets/images/gui_cuori_2.png");
    img_gui_cuori_3 = PP.assets.image.load(s, "assets/images/gui_cuori_3.png");

}

function create_gui(s) {
    let curr_score = PP.game_state.get_variable("vite");
    console.log(curr_score);

    img_gui_cuori = img_gui_cuori_3;

    gui = PP.assets.image.add(s, img_gui, 0, 20, 0, 0);
    gui.tile_geometry.scroll_factor_x = 0;
    gui.tile_geometry.scroll_factor_y = 0;


}

function update_gui(s) {
    
    
    gui_cuori = PP.assets.image.add(s,img_gui_cuori, 140, 50, 0, 0);
    gui_cuori.tile_geometry.scroll_factor_x = 0;
    gui_cuori.tile_geometry.scroll_factor_y = 0;

    let curr_score = PP.game_state.get_variable("vite");
    console.log(curr_score);
   //per qualche motivo anche se legge la variabile ed è giusta entra sempre nel curr_score = 3 
    if (curr_score = 3) {
        img_gui_cuori = img_gui_cuori_3;
       //console.log("3 vite");
    }

    else if (curr_score = 2) {
        img_gui_cuori = img_gui_cuori_2;
        console.log("2 vite");
    }

    else if (curr_score = 1) {
        img_gui_cuori = img_gui_cuori_1;       
        console.log("1 vita");

    }

//console.log(curr_score);    
}