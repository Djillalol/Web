function C(){
    x1 = document.getElementById("i1").value;
    x2 = document.getElementById("i2").value;
    x3 = document.getElementById("i3").value;
    x4 = document.getElementById("i4").value;
    x5 = document.getElementById("i5").value;

    if(x1 != "" && x2 != "" && (parseInt(x1))>=0 && (parseInt(x1))<=200 && parseInt(x2)>=0  && parseInt(x2)<=200){
        document.getElementById("l1").setAttribute("y1", 200-parseInt(x1));
        document.getElementById("l1").setAttribute("y2", 200-parseInt(x2));
        document.getElementById("l1").setAttribute("x2", 80);
        document.getElementById("t1").setAttribute("y", 180-parseInt(x1))
        document.getElementById("t2").setAttribute("y", 180-parseInt(x2))
    }
    if(x2 != "" && x3 != "" && parseInt(x2)>=0 && parseInt(x2)<=200 && parseInt(x3)>=0  && parseInt(x3)<=200){
        document.getElementById("l2").setAttribute("y1", 200-parseInt(x2));
        document.getElementById("l2").setAttribute("y2", 200-parseInt(x3));
        document.getElementById("l2").setAttribute("x2", 160);
        document.getElementById("t2").setAttribute("y", 180-parseInt(x2))
        document.getElementById("t3").setAttribute("y", 180-parseInt(x3))
    }
    if(x3 != "" && x4 != "" && parseInt(x3)>=0 && parseInt(x3)<=200 && parseInt(x4)>=0  && parseInt(x4)<=200){
        document.getElementById("l3").setAttribute("y1", 200-parseInt(x3));
        document.getElementById("l3").setAttribute("y2", 200-parseInt(x4));
        document.getElementById("l3").setAttribute("x2", 240);
        document.getElementById("t3").setAttribute("y", 180-parseInt(x3))
    document.getElementById("t4").setAttribute("y", 180-parseInt(x4))
    }
    if(x4 != "" && x5 != "" && parseInt(x4)>=0 && parseInt(x4)<=200 && parseInt(x5)>=0  && parseInt(x5)<=200){
        document.getElementById("l4").setAttribute("y1", 200-parseInt(x4));
        document.getElementById("l4").setAttribute("y2", 200-parseInt(x5));
        document.getElementById("l4").setAttribute("x2", 320);
        document.getElementById("t4").setAttribute("y", 180-parseInt(x4))
        document.getElementById("t5").setAttribute("y", 180-parseInt(x5))
    }

}
function H(){
    x1 = document.getElementById("i1").value;
    x2 = document.getElementById("i2").value;
    x3 = document.getElementById("i3").value;
    x4 = document.getElementById("i4").value;
    x5 = document.getElementById("i5").value;

    if(x1 != "" &&(parseInt(x1))>=0 && (parseInt(x1))<=200){
        document.getElementById("l1").setAttribute("height", parseInt(x1));
        document.getElementById("l1").setAttribute("y", 200-parseInt(x1));
    }
    if(x2 != "" && parseInt(x2)>=0 && parseInt(x2)<=200){
        document.getElementById("l2").setAttribute("height", parseInt(x2));
        document.getElementById("l2").setAttribute("y",  200-parseInt(x2));
    }
    if(x3 != "" && parseInt(x3)>=0 && parseInt(x3)<=200 ){
        document.getElementById("l3").setAttribute("height", parseInt(x3));
        document.getElementById("l3").setAttribute("y",  200-parseInt(x3));
    }
    if(x4 != "" && parseInt(x4)>=0 && parseInt(x4)<=200){
        document.getElementById("l4").setAttribute("height", parseInt(x4));
        document.getElementById("l4").setAttribute("y",  200-parseInt(x4));
    }
    if(x5 != "" && parseInt(x5)>=0 && parseInt(x5)<=200){
        document.getElementById("l5").setAttribute("height", parseInt(x5));
        document.getElementById("l5").setAttribute("y",  200-parseInt(x5));
    }

}
function HO(){
    x1 = document.getElementById("i1").value;
    x2 = document.getElementById("i2").value;
    x3 = document.getElementById("i3").value;
    x4 = document.getElementById("i4").value;
    x5 = document.getElementById("i5").value;

    if(x1 != "" &&(parseInt(x1))>=0 && (parseInt(x1))<=200){
        document.getElementById("l1").setAttribute("width", parseInt(x1));
        document.getElementById("e1").setAttribute("x", parseInt(x1)+8);
    }
    if(x2 != "" && parseInt(x2)>=0 && parseInt(x2)<=200){
        document.getElementById("l2").setAttribute("width", parseInt(x2));
        document.getElementById("e2").setAttribute("x", parseInt(x2)+8);
    }
    if(x3 != "" && parseInt(x3)>=0 && parseInt(x3)<=200 ){
        document.getElementById("l3").setAttribute("width", parseInt(x3));
        document.getElementById("e3").setAttribute("x", parseInt(x3)+8);
    }
    if(x4 != "" && parseInt(x4)>=0 && parseInt(x4)<=200){
        document.getElementById("l4").setAttribute("width", parseInt(x4));
        document.getElementById("e4").setAttribute("x", parseInt(x4)+8);
    }
    if(x5 != "" && parseInt(x5)>=0 && parseInt(x5)<=200){
        document.getElementById("l5").setAttribute("width", parseInt(x5));
        document.getElementById("e5").setAttribute("x", parseInt(x5)+8);
    }

}