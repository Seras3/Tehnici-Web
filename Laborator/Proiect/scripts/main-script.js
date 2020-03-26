"use strict";

let sideActive = false;
let sideDivActive = false;
let nodesSide = document.getElementsByClassName("sidenav")[0].childNodes;
let sideSubsections = [];

function menuState(navMobile) {
  let buttonMenu = document.getElementsByClassName("menu-icon");
  let sideNav = document.getElementsByClassName("sidenav");
  sideActive = !sideActive;
  navMobile.classList.toggle("active");
  buttonMenu[0].classList.toggle("change");
  
  if(sideActive) {
    sideNav[0].style.width = "250px";
    sideActive = true;
  } else {
    sideNav[0].style.width = "0";
    sideActive = false;
    resetDiv();
    clearSubDivs();
  }
};
  
function resetDiv() {
  sideDivActive = false;
  for(let i = 0; i < nodesSide.length; i++) {
    if( nodesSide[i].tagName != undefined &&
        !nodesSide[i].classList.contains("active")) {
        
      nodesSide[i].style.display = "block";
    }
  }
};

function addSubDivs(mainDiv) {
  let subDivs = mainDiv.childNodes;
  subDivs = [...subDivs].filter(subDivs => (subDivs.tagName === "DIV" ));
  subDivs = subDivs[0].childNodes;
  // subDivs contains dropdown-content div
  subDivs = [...subDivs].filter(subDivs => (subDivs.tagName === "A" ));
  // subDivs contains an array of anchors with all subsections of mainDiv
  let sideNav = document.getElementsByClassName("sidenav");
  let n = subDivs.length;
  for(let i = 0; i < n; i++) {
    let anch = subDivs[i].cloneNode(true);
    sideNav[0].appendChild(anch);
    sideSubsections.push(anch);
  }
};

function clearSubDivs() {
  let sideNav = document.getElementsByClassName("sidenav");
  while(sideSubsections.length) {
    sideNav[0].removeChild(sideSubsections.pop());
    console.log(sideSubsections);  
  }
};

function selectDiv(mainDiv) {
  sideDivActive = !sideDivActive;
  for(let i = 0; i < nodesSide.length; i++) {
    if( nodesSide[i] !== mainDiv &&
        nodesSide[i].tagName != undefined &&
        !nodesSide[i].classList.contains("active")) {
        
        if(sideDivActive) {
          nodesSide[i].style.display = "none";
        } else {
          nodesSide[i].style.display = "block";
        }
    }
  }
  
  if(sideDivActive) {
    addSubDivs(mainDiv);
  } else {
    clearSubDivs();
  }
};
  