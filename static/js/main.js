var myElement = document.querySelector("nav");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init({
  offset : 200,
});
