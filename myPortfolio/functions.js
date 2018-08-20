function toHome(){
  window.location="index.html";
  localStorage.removeItem("sort");
}
function getHeader(){
    var target = document.getElementById("headerMirror");
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    console.log(y);
    target.innerHTML = y.body.querySelector("#header").innerHTML;
    document.getElementById("toHome").onclick=function(){
      console.log("reload");
      toHome();
    }
    document.getElementById("toHome").onclick=function(){
      console.log("reload");
      toHome();
    }
}
function getFooter(){
    var target = document.getElementById("footerMirror");
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    console.log(y);
    target.innerHTML = y.body.querySelector("#footer").innerHTML;
}
function getExamplesFixed(){
    var target = document.getElementById("examplesFixedMirror");
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    console.log(y);
    target.innerHTML = y.body.querySelector("#examplesFixed").innerHTML;
}
