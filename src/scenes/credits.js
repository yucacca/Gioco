let img_background;
let home;
let tasto_menu;
let img_tasto_menu;

function preload (s) {
    
    img_background = PP.assets.image.load(s, "assets/images/crediti.png");
    img_tasto_menu = PP.assets.image.load(s, "assets/images/tasto_menu.png");
}

function create (s){
    
    PP.assets.image.add(s, img_background, 0 , 0, 0, 0);
    home = PP.assets.image.add(s,img_tasto_menu,100, 100, 0.5, 0.5);

        if (PP.interactive.mouse.add(home, "pointerdown",goto_menu)){
       
        } 
    
        function goto_menu(s) {
            PP.scenes.start("menu");
        }
   
   
}

function update (s){
    
}

function destroy (s)  {

}

PP.scenes.add ("credits", preload, create, update, destroy)