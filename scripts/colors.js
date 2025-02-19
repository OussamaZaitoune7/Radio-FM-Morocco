class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       document.getElementById("footer").style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="linear-gradient(to right, #43978D, #F9E07F)";
            document.body.style.background = "linear-gradient(to right, #43978D, #F9E07F)";
            document.getElementById("footer").style.background = "linear-gradient(to right, #43978D, #F9E07F)";
        }
        else if(color == "color-2"){
            this.header.style.background ="linear-gradient(to right, #CCABD8, #E4C787)";
            document.body.style.background ="linear-gradient(to right, #CCABD8, #E4C787)";
            document.getElementById("footer").style.background = "linear-gradient(to right, #CCABD8, #E4C787)";
        }

        else if(color == "color-3"){
            this.header.style.background ="linear-gradient(to right, #A7D676, #85CBCC)";
            document.body.style.background ="linear-gradient(to right, #A7D676, #85CBCC)";
            document.getElementById("footer").style.background = "linear-gradient(to right, #A7D676, #85CBCC)";
        }

        else if(color == "color-4"){
            this.header.style.background = "linear-gradient(to right, #3C4CAD, #F9C449)";
            document.body.style.background = "linear-gradient(to right, #3C4CAD, #F9C449)";
            document.getElementById("footer").style.background = "linear-gradient(to right, #3C4CAD, #F9C449)";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();