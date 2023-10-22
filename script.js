var index = 0;

show_image(index);

function show_image(i){
    index += i;

    var images = document.getElementsByClassName("image");

    var dots = document.getElementsByClassName("dot")

    for(i = 0; i < images.length; i++)
        images[i].computedStyleMap.display = "none";

        for(i = 0; i < dots[i].className.replace(" active", ""); i++)

        if(index > images.length - 1)
        index = 0;

        if(index < 0)
        index = images.length - 1;
        dots[index].className += " active";

    
}