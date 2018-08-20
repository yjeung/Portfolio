function getForms(page){
  getHeader();
  getFooter();
  if (page!=="home"){
    getExamplesFixed()
  }
}
function reset(){
  window.location="index.html";
  localStorage.removeItem("sort");
}
function getHeader(){
    var target = document.createElement("headerMirror");
    target.id="headerMirror";
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    target.innerHTML = y.body.querySelector("#header").innerHTML;
    document.body.appendChild(target);
}
function getFooter(){
    var target = document.createElement("footerMirror");
    target.id="footerMirror";
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    target.innerHTML = y.body.querySelector("#footer").innerHTML;
    document.body.querySelector("#scrollArea").appendChild(target);
}
function getExamplesFixed(){
    var target = document.createElement("examplesFixedMirror");
    target.id="examplesFixedMirror";
    var x = document.getElementById("myFrames");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    target.innerHTML = y.body.querySelector("#examplesFixed").innerHTML;
    document.body.appendChild(target);
}
