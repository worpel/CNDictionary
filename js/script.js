const db = [
  {
    title: 'Computational Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Animal Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Human Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Plant Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Fire Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Water Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Stone Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  },
  {
    title: 'Ice Thinking',
    def:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, esse et consequatur vero accusamus optio.'
  }
];
console.log(db.length);
const searchbox = document.getElementById('searchInput');
let arrayItem = [Math.floor(db.length * Math.random())];
console.log(arrayItem);

$(document).ready(() => {
  $('#container').css('display', 'none');
  $('#container').fadeIn(2000);
  let title = document.getElementById('title');
  let body = document.getElementById('body');
  let textTypewriter = new Typewriter(title, {});
  let bodyTypewriter = new Typewriter(body, {
    typingSpeed: 20
  });
  setTimeout(() => {
    textTypewriter
      .typeString(db[arrayItem].title)
      .pauseFor(10000)
      .start();
  }, 1200);
  setTimeout(() => {
    bodyTypewriter
      .typeString(db[arrayItem].def)
      .pauseFor(10000)
      .start();
  }, 2600);

  const search = event => {
    let match = db.filter(element => {
      return element.title
        .toLowerCase()
        .includes(searchbox.value.toLowerCase());
    });
    title.innerHTML = match[0].title;
    body.innerHTML = match[0].def;
  };

  searchbox.addEventListener('input', search);
});
