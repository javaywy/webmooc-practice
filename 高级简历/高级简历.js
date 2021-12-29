function expnav(evt,expname){
    let expcontent = document.getElementsByClassName("content");
    console.log(expcontent)
    for(let i = 0;i < expcontent.length;i++){
        expcontent[i].style.display = "none";
    }
    let explist = document.getElementsByClassName("exptab");
    for(let i = 0;i < explist.length;i++){
        explist[i].className = explist[i].className.replace(" active","");
    }
    document.getElementsByClassName(expname)[0].style.display  = "block";
    evt.currentTarget.className += " active";
    console.log(evt.currentTarget);
}
let a = document.getElementById('default');
a.className += " active";
