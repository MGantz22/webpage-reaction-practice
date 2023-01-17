
window.onload = function(event) {
  event.preventDefault();
  let h1remover = document.querySelector ("h1");
  h1remover.remove();

  let h1 = document.createElement("h1");
  h1.append("Webpage Recreation Practice");
  document.querySelector("body").append(h1);

  let p = document.createElement("p");
  p.append("text");
  document.querySelector("body").append(p);

  let img = document.createElement("img");
  img.src= "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" ;
  document.querySelector("body").append(img);

  img.setAttribute("alt", "bird");
  img.setAttribute("style", "width:50%");

  let h1second = document.createElement("h1");
  h1second.append("Facts about the Multicolored Tanager");
  document.querySelector("body").append(h1second);
}

