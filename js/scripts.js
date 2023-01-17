
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


}

