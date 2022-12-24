button = document.getElementById("neon-button");
container = document.getElementById('cards');
body = document.getElementsByTagName('body');


// Add a click event listener to the button
document.getElementById("neon-button").addEventListener('click', ()=>{
  // Set the container to be visible
  container.style.display = 'grid';
  button.style.display = 'none';
  body[0].style.display = 'inline';

  // Animate the height of the container from 0 to its full height
  let height = container.offsetHeight;
  container.style.height = '0';
  setTimeout(function() {
    container.style.height = height + 'px';
    container.style.opacity = 1;
  }, 10);
});
