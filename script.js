'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menüyü aç');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const desktop = window.matchMedia('(min-width: 1024px)');
desktop.addEventListener('change', closeMenu);
const links = [...document.querySelectorAll('.nav-link')];
const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
  if (!visible.length) return;
  const id = visible[0].target.id;
  links.forEach(link => {
    const active = link.getAttribute('href') === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, {rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.2, 0.5]});
sections.forEach(section => observer.observe(section));
const details = {
  eggs: {title: 'Yumurta', label: 'Doğadan sofranıza', image: 'eggs', alt: 'Tavuk ve doğal yumurtalar', description: 'Taze, doğal, sağlıklı yumurtalar. ETAŞ Afyon’un yumurta ürünleri ve tedarik seçenekleri hakkında bilgi almak için iletişim bölümünü ziyaret edin.'},
  milk: {title: 'Jersey Süt', label: 'Doğadan sofranıza', image: 'milk', alt: 'Jersey ineği ve süt şişesi', description: 'Doğal ve besleyici Jersey sütü. Ürün bilgileri ve tedarik seçenekleri için bizimle iletişime geçin.'},
  beef: {title: 'Angus Et', label: 'Doğadan sofranıza', image: 'beef', alt: 'Angus et sunumu', description: 'Doğal besi, kaliteli et. Angus et ürünlerimiz ve satış bilgileri hakkında bilgi almak için iletişim bölümünü ziyaret edin.'},
  angus: {title: 'Angus Gebe Düve', label: 'Geleceğe yatırım', image: 'angus', alt: 'Siyah Angus sığırı', description: 'Hayvancılık yatırımlarınız için Angus gebe düvelerimizi keşfedin. Mevcut hayvanlar, satış koşulları ve tedarik bilgileri için satış ekibimizle iletişime geçin.'},
  company: {title: 'ETAŞ Afyon Tarım & Hayvancılık', label: 'Toprağımızdan gelen güç', image: 'facility', alt: 'Afyon çiftlik tesisleri', description: 'Afyon’un bereketli topraklarında tarım ve hayvancılığı bir araya getiriyoruz. Doğaya saygı, hayvan refahı ve üretimde özen yaklaşımımızla yumurta, Jersey sütü, Angus et ve gebe düve ürünlerimizi sunuyoruz.'}
};
const dialog = document.querySelector('#detail-dialog');
function openDetail(key) {
  const data = details[key];
  if (!data) return;
  document.querySelector('#detail-title').textContent = data.title;
  document.querySelector('#detail-label').textContent = data.label;
  document.querySelector('#detail-description').textContent = data.description;
  const image = document.querySelector('#detail-image');
  image.src = 'assets/images/' + data.image + '.webp';
  image.alt = data.alt;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => openDetail(button.dataset.product)));
document.querySelector('[data-info]').addEventListener('click', () => openDetail('company'));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-contact').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.querySelector('#year').textContent = new Date().getFullYear();
