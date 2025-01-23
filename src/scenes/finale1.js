let img_finale_1;
let img_finale_2;
let home;

let tasto_menu;
let img_tasto_menu;

function preload (s) {

    img_finale_1 = PP.assets.image.load(s, "assets/images/finalep.png");
    img_finale_2 = PP.assets.image.load(s, "assets/images/finalen.png");
    img_tasto_menu = PP.assets.image.load(s, "assets/images/tasto_menu.png");
}

function create (s){
    let prev_anello = PP.game_state.get_variable("anello");
console.log(prev_anello);
    if(prev_anello <=1){
        PP.assets.image.add(s, img_finale_1, 0 , 0 , 0, 0);
        console.log("uwwu");
    }

    else if(prev_anello>=2){
        PP.assets.image.add(s, img_finale_2, 0 , 0 , 0, 0);
        console.log("owo");
    }



    

    home = PP.assets.image.add(s,img_tasto_menu, 120, 100, 0.5, 0.5);

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

PP.scenes.add ("finale", preload, create, update, destroy)