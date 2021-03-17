function setter_button(){
    $("#setter_id").addClass("animation_class");
    $("#setter_id").toggleClass( "setter_click" );
    setTimeout(() => {
        $("#setter_back_id").show();
    }, 1000);
}

function middle_button(){
    $("#middle_id").addClass("animation_class");
    $("#middle_id").toggleClass( "middle_click" );
    setTimeout(() => {
        $("#middle_back_id").show();
    }, 1000);
}

function libero_button(){
    $("#libero_id").addClass("animation_class");
    $("#libero_id").toggleClass( "libero_click" );
    setTimeout(() => {
        $("#libero_back_id").show();
    }, 1000);
}

function back_setter(){
    $("#setter_id").toggleClass("setter_click");
    setTimeout(() => {
        $("#setter_id").removeClass("animation_class");
    }, 1000);
    $("#setter_back_id").hide();
}

function back_middle(){
    $("#middle_id").toggleClass("middle_click");
    setTimeout(() => {
        $("#middle_id").removeClass("animation_class");
    }, 1000);
    $("#middle_back_id").hide();
}

function back_libero(){
    $("#libero_id").toggleClass("libero_click");
    setTimeout(() => {
        $("#libero_id").removeClass("animation_class");
    }, 1000);
    $("#libero_back_id").hide();
}