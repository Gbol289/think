
// Placeholder for interactivity
console.log("Thinkstitute landing page loaded successfully.");
const scrollWrapper = document.getElementById('scrollWrapper');

setInterval(() => {
  scrollWrapper.scrollLeft += 200;

  if (
    scrollWrapper.scrollLeft + scrollWrapper.clientWidth >=
    scrollWrapper.scrollWidth
  ) {
    scrollWrapper.scrollLeft = 0;
  }
}, 3000);




