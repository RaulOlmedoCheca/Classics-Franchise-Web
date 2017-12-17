// Setup parallax elements
var parallaxElements = document.querySelectorAll('.parallax');
for (let index = 0; index < parallaxElements.length; index++) {
  new M.Parallax(parallaxElements[index]);
}

// Setup sidenav
new M.Sidenav(document.querySelector('.sidenav'));

// Setup scrollspy elements
var scrollSpyElements = document.querySelectorAll('.scrollspy');
for (let index = 0; index < scrollSpyElements.length; index++) {
  new M.ScrollSpy(scrollSpyElements[index]);
}
