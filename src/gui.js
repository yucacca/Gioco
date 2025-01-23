let img_gui;
let img_gui_cuori;
let img_gui_cuori_1;
let img_gui_cuori_2;
let img_gui_cuori_3;
let curr_cuori_n;
let curr_cuori;

let gui;
//let gui_cuori;
let gui_cuori_1;
let gui_cuori_2;
let gui_cuori_3;


function preload_gui(s) {
    img_gui = PP.assets.image.load(s, "assets/images/gui.png");
    img_gui_cuori = PP.assets.image.load(s, "assets/images/gui_cuori_1.png");
    img_gui_cuori_1 = PP.assets.image.load(s, "assets/images/gui_cuori_1.png");
    img_gui_cuori_2 = PP.assets.image.load(s, "assets/images/gui_cuori_2.png");
    img_gui_cuori_3 = PP.assets.image.load(s, "assets/images/gui_cuori_3.png");

}

function create_gui(s) {
    
    

    


    gui = PP.assets.image.add(s, img_gui, 0, 20, 0, 0);
    gui.tile_geometry.scroll_factor_x = 0;
    gui.tile_geometry.scroll_factor_y = 0;


}

function update_gui(s) {
    let curr_cuori_n = PP.game_state.get_variable("vite");
    
    const gui_cuori = [img_gui_cuori, img_gui_cuori_1, img_gui_cuori_2, img_gui_cuori_3];
    if (curr_cuori_n < 0) curr_cuori_n = 0;
    if (curr_cuori_n >= gui_cuori.length) curr_cuori_n = gui_cuori.length - 1;


   if (curr_cuori) {
    PP.assets.destroy(curr_cuori);
}

curr_cuori = PP.assets.image.add(s, gui_cuori[curr_cuori_n], 140, 50, 0, 0);
curr_cuori.tile_geometry.scroll_factor_x = 0;
curr_cuori.tile_geometry.scroll_factor_y = 0;



}