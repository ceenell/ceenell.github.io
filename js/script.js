function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    var x2 = Math.floor(Math.random() * 256);
    var y2 = Math.floor(Math.random() * 256);
    var z2 = Math.floor(Math.random() * 256);
    var bgColor2 = "rgb(" + x2 + "," + y2 + "," + y2 + ")";

    var grad = Math.floor(Math.random() * 360);

 console.log(bgColor);
 console.log(bgColor2); 
  
    document.body.style.background = bgColor;
    document.body.style.backgroundImage = "linear-gradient("+ grad +"deg, "+ bgColor +", "+ bgColor +"45%, "+ bgColor2 +")";
    }

random_bg_color();

