const items = document.querySelectorAll('.item');

function insertViewTransitionName() {
  items.forEach((item,i) => {
    item.style.viewTransitionName = `item-${i++}`;
  });
}

function updateBtn(btn) {
  document.querySelector('.active').classList.remove('active');
  btn.classList.add('active');
}

const resetMenu = () => items.forEach((item) => item.classList.remove('hide'));

function updateMenu(tag) {
  resetMenu();
  items.forEach((item) => {
    if (item.dataset.type !== tag && tag !== 'all') {
      item.classList.add('hide');
    }
  })
}

function activate(e) {
  updateMenu(e.target.dataset.tag);
  updateBtn(e.target)
}

function init(e) {
  if (!e.target.matches('button')) return;
  insertViewTransitionName();
  !document.startViewTransition
    ? activate(e)
    : document.startViewTransition(() => activate(e));
}

window.addEventListener('click',init,false);