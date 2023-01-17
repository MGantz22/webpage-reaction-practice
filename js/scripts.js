
window.onload = function(event) {
  event.preventDefault();
  let h1remover = document.querySelector ("h1");
  h1remover.remove();

  let h1 = document.createElement("h1");
  h1.append("Webpage Recreation Practice");
  document.querySelector("body").append(h1);

  let p = document.createElement("p");
  p.append("The HTML of this webpage was created with JavaScript.");
  document.querySelector("body").append(p);

  let img = document.createElement("img");
  img.src= "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900" ;
  img.setAttribute("alt", "bird");
  img.setAttribute("style", "width:50%");
  document.querySelector("body").append(img);


  let h1second = document.createElement("h1");
  h1second.append("Facts about the Multicolored Tanager");
  document.querySelector("body").append(h1second);

  let ul = document.createElement("ul");
  ul.append();
  document.querySelector("body").append(ul);

  let li = document.createElement("li");
  li.append("It is endemic to the mountains of Colombia.");
  document.querySelector("ul").append(li);

  let lisecond = document.createElement("li");
  lisecond.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet");
  document.querySelector("ul").append(lisecond);

  let h2 = document.createElement("h2");
  h2.append("Source");
  document.querySelector("body").append(h2);

  let a = document.createElement("a");
  a.append("Wikipedia");// If left blank go to line 45 and use.//
  a.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
  //a.innerText ="Wikipedia";
  document.querySelector("body").append(a);

//or this Is our (Steven and Mitchs) creative problem solving answer//
  //let link = document.createTextNode("Wikipedia");
  //a.appendChild(link);


}

