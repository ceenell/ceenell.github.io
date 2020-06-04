function colorswap() {
    var colorsa = ["#c94b4b","#f7797d","#FBD786","#C6FFDD","#f7797d","#b92b27","#FF0099","#3b8d99","#f5af19","#2ebf91","#ffd452","#8A2387"];
    var colorsb = ["#302b63","#12c2e9","#c471ed","#1565C0","#4286f4","#493240","#99f2c8","#240b36","#659999","#108dc7","#8360c3","#544a7d","#a8ff78"];
    var rand = Math.floor(Math.random() * colorsa.length);
    document.body.background = colorsa[rand];
}