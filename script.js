const products = [
    { id: 1, name: "Good Girl", brand: "Carolina Herrera", price: 145, image: "good girl.jpeg", type: "women", best: true },
    { id: 2, name: "Miss Dior Blooming Bouquet", brand: "Dior", price: 155, image: "miss.jpeg", type: "women", best: true },
    { id: 3, name: "J’adore", brand: "Dior", price: 170, image: "jadore.jpeg", type: "women", best: true },
    { id: 4, name: "La Vie Est Belle", brand: "Lancôme", price: 150, image: "la vie.jpeg", type: "women", best: true },
    { id: 5, name: "Black Opium", brand: "Yves Saint Laurent", price: 165, image: "black opium.jpeg", type: "women", best: true },
    { id: 6, name: "Libre Intense", brand: "Yves Saint Laurent", price: 175, image: "libre.jpeg", type: "women", best: true },
    { id: 7, name: "Flowerbomb", brand: "Viktor & Rolf", price: 160, image: "flowerbomb.jpeg", type: "women", best: true },
    { id: 8, name: "My Way", brand: "Giorgio Armani", price: 155, image: "my way.jpeg", type: "women", best: true },
    { id: 9, name: "Si", brand: "Giorgio Armani", price: 170, image: "si.jpeg", type: "women", best: false },
    { id: 10, name: "Chance Eau Tendre", brand: "Chanel", price: 180, image: "chance.jpeg", type: "women", best: false },
    { id: 11, name: "Coco Mademoiselle", brand: "Chanel", price: 160, image: "coco.jpeg", type: "women", best: false },
    { id: 12, name: "N°5", brand: "Chanel", price: 190, image: "n5.jpeg", type: "women", best: false },
    { id: 13, name: "Delina", brand: "Parfums de Marly", price: 230, image: "delina.jpeg", type: "women", best: false },
    { id: 14, name: "Her", brand: "Burberry", price: 145, image: "her.jpeg", type: "women", best: false },
    { id: 15, name: "Idôle", brand: "Lancôme", price: 155, image: "idole.jpeg", type: "women", best: false },
    { id: 16, name: "Mon Paris", brand: "Yves Saint Laurent", price: 160, image: "mon.jpeg", type: "women", best: false },
    { id: 17, name: "Paradoxe", brand: "Prada", price: 175, image: "paradox.jpeg", type: "women", best: false },
    { id: 18, name: "Good Fortune", brand: "Viktor & Rolf", price: 150, image: "good.jpeg", type: "women", best: false },
    { id: 19, name: "Bright Crystal", brand: "Versace", price: 135, image: "bright.jpeg", type: "women", best: false },
    { id: 20, name: "Daisy", brand: "Marc Jacobs", price: 140, image: "daisy.jpeg", type: "women", best: false },
    { id: 21, name: "Flora Gorgeous Gardenia", brand: "Gucci", price: 165, image: "flora.jpeg", type: "women", best: false },
    { id: 22, name: "Gucci Bloom", brand: "Gucci", price: 170, image: "gucci.jpeg", type: "women", best: false },
    { id: 23, name: "L’Interdit", brand: "Givenchy", price: 160, image: "linter.jpeg", type: "women", best: false },
    { id: 24, name: "Narciso Rouge", brand: "Narciso Rodriguez", price: 155, image: "narciso.jpeg", type: "women", best: false },
    { id: 25, name: "Amor Amor", brand: "Cacharel", price: 125, image: "amor amor.jpeg", type: "women", best: false },
    { id: 26, name: "Sauvage", brand: "Dior", price: 180, image: "men/sauvage.jpeg", type: "men", best: false },
    { id: 27, name: "Bleu de Chanel", brand: "Chanel", price: 190, image: "men/bleu.jpeg", type: "men", best: false },
    { id: 28, name: "Acqua di Giò Profondo", brand: "Giorgio Armani", price: 165, image: "men/acqua.jpeg", type: "men", best: false },
    { id: 29, name: "Aventus", brand: "Creed", price: 210, image: "men/aventus.jpeg", type: "men", best: false },
    { id: 30, name: "Eros", brand: "Versace", price: 150, image: "men/eros.jpeg", type: "men", best: false },
    { id: 31, name: "Le Male Le Parfum", brand: "Jean Paul Gaultier", price: 170, image: "men/le male.jpeg", type: "men", best: false },
    { id: 32, name: "Terre d’Hermès", brand: "Hermès", price: 175, image: "men/terre.jpeg", type: "men", best: false },
    { id: 33, name: "The One for Men", brand: "Dolce & Gabbana", price: 155, image: "men/the one.jpeg", type: "men", best: false },
    { id: 34, name: "Y Eau de Parfum", brand: "Yves Saint Laurent", price: 165, image: "men/y.jpeg", type: "men", best: false },
    { id: 35, name: "Stronger With You", brand: "Emporio Armani", price: 160, image: "men/stronger.jpeg", type: "men", best: false },
    { id: 36, name: "Spicebomb Extreme", brand: "Viktor & Rolf", price: 175, image: "men/spice.jpeg", type: "men", best: false },
    { id: 37, name: "Invictus", brand: "Rabanne", price: 150, image: "men/invictus.jpeg", type: "men", best: false },
    { id: 38, name: "1 Million", brand: "Rabanne", price: 155, image: "men/million.jpeg", type: "men", best: false },
    { id: 39, name: "Boss Bottled", brand: "Hugo Boss", price: 140, image: "men/boss.jpeg", type: "men", best: false },
    { id: 40, name: "L’Homme", brand: "Prada", price: 165, image: "men/l home.jpeg", type: "men", best: false },
    { id: 41, name: "Luna Rossa Carbon", brand: "Prada", price: 160, image: "men/luna.jpeg", type: "men", best: false },
    { id: 42, name: "Dylan Blue", brand: "Versace", price: 145, image: "men/dylan.jpeg", type: "men", best: false },
    { id: 43, name: "Light Blue Pour Homme", brand: "Dolce & Gabbana", price: 140, image: "men/light.jpeg", type: "men", best: false },
    { id: 44, name: "Code Parfum", brand: "Giorgio Armani", price: 170, image: "men/giorgio.jpeg", type: "men", best: false },
    { id: 45, name: "Gentleman Réserve Privée", brand: "Givenchy", price: 180, image: "men/gentleman.jpeg", type: "men", best: false },
    { id: 46, name: "H24", brand: "Hermès", price: 175, image: "men/h24.jpeg", type: "men", best: false },
    { id: 47, name: "Explorer", brand: "Montblanc", price: 135, image: "men/explorer.jpeg", type: "men", best: false },
    { id: 48, name: "Oud for Greatness", brand: "Initio", price: 240, image: "men/oud.jpeg", type: "men", best: false },
    { id: 49, name: "Layton", brand: "Parfums de Marly", price: 230, image: "men/layton.jpeg", type: "men", best: false },
    { id: 50, name: "Encre Noire", brand: "Lalique", price: 120, image: "men/encre.jpeg", type: "men", best: false },
    { id: 51, name: "Baccarat Rouge 540", brand: "Maison Francis Kurkdjian", price: 220, image: "uni/baccarat.jpeg", type: "unisex", best: false },
    { id: 52, name: "Another 13", brand: "Le Labo", price: 210, image: "uni/another.jpeg", type: "unisex", best: false },
    { id: 53, name: "Santal 33", brand: "Le Labo", price: 205, image: "uni/santal 33.jpeg", type: "unisex", best: false },
    { id: 54, name: "Blanche", brand: "Byredo", price: 165, image: "uni/blanche.jpeg", type: "unisex", best: false },
    { id: 55, name: "Gypsy Water", brand: "Byredo", price: 175, image: "uni/gypsy.jpeg", type: "unisex", best: false },
    { id: 56, name: "Mojave Ghost", brand: "Byredo", price: 180, image: "uni/majave.jpeg", type: "unisex", best: false },
    { id: 57, name: "Oud Wood", brand: "Tom Ford", price: 205, image: "uni/oud wood.jpeg", type: "unisex", best: false },
    { id: 58, name: "Tobacco Vanille", brand: "Tom Ford", price: 215, image: "uni/tobacco.jpeg", type: "unisex", best: false },
    { id: 59, name: "Lost Cherry", brand: "Tom Ford", price: 220, image: "uni/lost cherry.jpeg", type: "unisex", best: false },
    { id: 60, name: "Black Orchid", brand: "Tom Ford", price: 175, image: "uni/black orchid.jpeg", type: "unisex", best: false },
    { id: 61, name: "Wood Sage & Sea Salt", brand: "Jo Malone", price: 155, image: "uni/wood sage.jpeg", type: "unisex", best: false },
    { id: 62, name: "English Pear & Freesia", brand: "Jo Malone", price: 160, image: "uni/english.jpeg", type: "unisex", best: false },
    { id: 63, name: "Molecule 01", brand: "Escentric Molecules", price: 145, image: "uni/milecule.jpeg", type: "unisex", best: false },
    { id: 64, name: "Not a Perfume", brand: "Juliette Has a Gun", price: 150, image: "uni/not a.jpeg", type: "unisex", best: false },
    { id: 65, name: "Neroli Portofino", brand: "Tom Ford", price: 190, image: "uni/neroli.jpeg", type: "unisex", best: false },
    { id: 66, name: "Bal d’Afrique", brand: "Byredo", price: 185, image: "uni/bald.jpeg", type: "unisex", best: false },
    { id: 67, name: "Ani", brand: "Nishane", price: 230, image: "uni/ani.jpeg", type: "unisex", best: false },
    { id: 68, name: "Hacivat", brand: "Nishane", price: 235, image: "uni/hacivat.jpeg", type: "unisex", best: false },
    { id: 69, name: "Reflection Man", brand: "Amouage", price: 225, image: "uni/reflection.jpeg", type: "unisex", best: false },
    { id: 70, name: "Guidance", brand: "Amouage", price: 250, image: "uni/guidance.jpeg", type: "unisex", best: false },
    { id: 71, name: "Thé Noir 29", brand: "Le Labo", price: 210, image: "uni/the noir.jpeg", type: "unisex", best: false },
    { id: 72, name: "Fleur de Peau", brand: "Diptyque", price: 175, image: "uni/fleur.jpeg", type: "unisex", best: false },
    { id: 73, name: "Philosykos", brand: "Diptyque", price: 165, image: "uni/philo.jpeg", type: "unisex", best: false },
    { id: 74, name: "Colonia", brand: "Acqua di Parma", price: 160, image: "uni/colonia.jpeg", type: "unisex", best: false },
    { id: 75, name: "Eau Duelle", brand: "Diptyque", price: 180, image: "uni/eau.jpeg", type: "unisex", best: false }
];
const copy = {
    fa: { add: "افزودن به سبد خرید", added: "به سبد خرید اضافه شد", emptyCart: "سبد خریدت هنوز خالی است.", emptyWish: "هنوز عطری به علاقه‌مندی‌ها اضافه نکرده‌ای.", cart: "سبد خرید", wish: "علاقه‌مندی‌ها", total: "مجموع", checkout: "ادامه‌ی خرید", remove: "حذف", login: "ورود / ثبت‌نام", loginText: "برای تجربه‌ی شخصی‌تر در ÉLORA وارد حساب خود شو.", email: "ایمیل یا شماره تلفن", password: "رمز عبور", submit: "ورود", demo: "این بخش نمایشی است؛ اتصال به بک‌اند هنوز انجام نشده.", newsletter: "از همراهی تو ممنونیم!", mood: { calm: "برای حال‌وهوای آرام: Blanche، Another 13، Fleur de Peau، Not a Perfume و Chance Eau Tendre.", bold: "برای حال‌وهوای جسور: Black Orchid، Oud Wood، Oud for Greatness، Spicebomb Extreme و Encre Noire.", romantic: "برای حال‌وهوای رمانتیک: Baccarat Rouge 540، Delina، Lost Cherry، La Vie Est Belle و Good Girl.", fresh: "برای حال‌وهوای شاداب: Aventus، Wood Sage & Sea Salt، Light Blue Pour Homme، Acqua di Giò Profondo و Neroli Portofino." } },
    en: { add: "Add to cart", added: "Added to your cart", emptyCart: "Your cart is empty for now.", emptyWish: "Your wishlist is waiting for its first fragrance.", cart: "Your cart", wish: "Your wishlist", total: "Subtotal", checkout: "Continue shopping", remove: "Remove", login: "Sign in / Register", loginText: "Sign in to enjoy a more personal ÉLORA experience.", email: "Email or phone", password: "Password", submit: "Sign in", demo: "Demo interface only — backend connection is not included yet.", newsletter: "Thank you for subscribing!", mood: { calm: "For a calm mood: Blanche, Another 13, Fleur de Peau, Not a Perfume and Chance Eau Tendre.", bold: "For a bold mood: Black Orchid, Oud Wood, Oud for Greatness, Spicebomb Extreme and Encre Noire.", romantic: "For a romantic mood: Baccarat Rouge 540, Delina, Lost Cherry, La Vie Est Belle and Good Girl.", fresh: "For a fresh mood: Aventus, Wood Sage & Sea Salt, Light Blue Pour Homme, Acqua di Giò Profondo and Neroli Portofino." } }
};
let lang = "fa", cart = [], wishlist = [];
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const money = n => lang === "fa" ? new Intl.NumberFormat("fa-IR").format(n * 1000) + " تومان" : "$" + n.toFixed(2);
function setLanguage(next) { lang = next; document.documentElement.lang = lang; document.documentElement.dir = lang === "fa" ? "rtl" : "ltr"; document.body.classList.toggle("en", lang === "en"); $$("[data-fa][data-en]").forEach(el => { el.textContent = el.dataset[lang] }); $$("[data-placeholder-fa]").forEach(el => el.placeholder = el.dataset["placeholder" + (lang === "fa" ? "Fa" : "En")]); $$("[data-lang]").forEach(b => b.classList.toggle("active", b.dataset.lang === lang)); renderProducts(); if ($("#drawer").classList.contains("open")) renderDrawer($("#drawer").dataset.mode || "cart") }
$$("[data-lang]").forEach(b => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
function productCard(p) { const liked = wishlist.includes(p.id); return `<article class="product-card"><div class="product-photo"><img src="assets/${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-info"><h3 class="product-name">${p.name}</h3><div class="product-brand">${p.brand}</div><div class="stars">★★★★★ <span class="rating">4.9 (124)</span></div><div class="price">${money(p.price)}</div><div class="product-actions"><button class="add-cart" data-add="${p.id}">${copy[lang].add}</button><button class="heart ${liked ? "active" : ""}" data-wish="${p.id}" aria-label="wishlist">${liked ? "♥" : "♡"}</button></div></div></article>` }
function renderProducts() {
    const filter = new URLSearchParams(location.search).get("category") || $(".filter.active")?.dataset.filter || "all";
    const catalogPage = document.body.classList.contains("catalog-page");
    const list = products.filter(p => filter === "all" || p.type === filter);
    if ($("#bestGrid")) $("#bestGrid").innerHTML = products.filter(p => p.best).slice(0, 4).map(productCard).join("");
    if ($("#allGrid")) $("#allGrid").innerHTML = (catalogPage ? list : list.slice(0, 4)).map(productCard).join("");
    if (catalogPage) { $$(".filter").forEach(b => b.classList.toggle("active", b.dataset.filter === filter)); }
    bindProductButtons(); updateCounts(); if (typeof observeMotion === "function") observeMotion()
}
function bindProductButtons() { $$("[data-add]").forEach(b => b.onclick = () => { const id = +b.dataset.add; const found = cart.find(x => x.id === id); found ? found.qty++ : cart.push({ id, qty: 1 }); updateCounts(); toast(copy[lang].added) }); $$("[data-wish]").forEach(b => b.onclick = () => { const id = +b.dataset.wish; wishlist.includes(id) ? wishlist = wishlist.filter(x => x !== id) : wishlist.push(id); renderProducts(); updateCounts() }) }
$$(".filter").forEach(b => b.addEventListener("click", () => { $$(".filter").forEach(x => x.classList.remove("active")); b.classList.add("active"); if (document.body.classList.contains("catalog-page")) { history.replaceState(null, "", `products.html?category=${b.dataset.filter}`) } renderProducts() }));
function updateCounts() { $("#cartCount").textContent = cart.reduce((a, b) => a + b.qty, 0); $("#wishCount").textContent = wishlist.length }
function openDrawer(mode) { $("#drawer").dataset.mode = mode; $("#drawer").classList.add("open"); $("#overlay").classList.add("show"); renderDrawer(mode) }
function closeDrawer() { $("#drawer").classList.remove("open"); $("#overlay").classList.remove("show") }
function renderDrawer(mode) {
    const isWish = mode === "wish"; $("#drawerTitle").textContent = copy[lang][isWish ? "wish" : "cart"]; let html = ""; if (isWish) { const items = products.filter(p => wishlist.includes(p.id)); html = items.length ? items.map(p => `<div class="drawer-item"><img src="assets/${p.image}" alt=""><div><b>${p.name}</b><small>${p.brand}</small><small>${money(p.price)}</small><div class="qty"><button data-add="${p.id}">+</button></div></div><button class="remove-item" data-remove-wish="${p.id}">×</button></div>`).join("") : `<div class="empty-state">♡<br>${copy[lang].emptyWish}</div>` } else { html = cart.length ? cart.map(item => { const p = products.find(x => x.id === item.id); return `<div class="drawer-item"><img src="assets/${p.image}" alt=""><div><b>${p.name}</b><small>${p.brand}</small><small>${money(p.price)}</small><div class="qty"><button data-qty="${p.id}" data-delta="-1">−</button><span>${item.qty}</span><button data-qty="${p.id}" data-delta="1">+</button></div></div><button class="remove-item" data-remove="${p.id}">×</button></div>` }).join("") + `<div class="drawer-total"><span>${copy[lang].total}</span><span>${money(cart.reduce((s, i) => s + products.find(p => p.id === i.id).price * i.qty, 0))}</span></div><button class="button button-dark" id="checkoutBtn">${copy[lang].checkout}</button>` : `<div class="empty-state">♧<br>${copy[lang].emptyCart}</div>` }
    $("#drawerContent").innerHTML = html; bindProductButtons(); $$("[data-qty]").forEach(b => b.onclick = () => { const item = cart.find(x => x.id === +b.dataset.qty); item.qty += +b.dataset.delta; if (item.qty <= 0) cart = cart.filter(x => x.id !== item.id); updateCounts(); renderDrawer(mode) }); $$("[data-remove]").forEach(b => b.onclick = () => { cart = cart.filter(x => x.id !== +b.dataset.remove); updateCounts(); renderDrawer(mode) }); $$("[data-remove-wish]").forEach(b => b.onclick = () => { wishlist = wishlist.filter(x => x !== +b.dataset.removeWish); renderProducts(); renderDrawer(mode) }); $("#checkoutBtn")?.addEventListener("click", () => toast(copy[lang].demo))
}
$("#cartBtn").onclick = () => openDrawer("cart"); $("#wishBtn").onclick = () => openDrawer("wish"); $("#closeDrawer").onclick = closeDrawer; $("#overlay").onclick = closeDrawer;
function openModal() { const back = $("#modalBackdrop"); back.classList.add("show"); $("#modalContent").innerHTML = `<h3>${copy[lang].login}</h3><p>${copy[lang].loginText}</p><form id="loginForm"><input type="text" required placeholder="${copy[lang].email}"><input type="password" required placeholder="${copy[lang].password}"><button class="button button-dark" type="submit">${copy[lang].submit}</button></form><p class="demo-note">${copy[lang].demo}</p>`; $("#loginForm").onsubmit = e => { e.preventDefault(); toast(copy[lang].demo); back.classList.remove("show") } }
$("#accountBtn").onclick = openModal; $("#closeModal").onclick = () => $("#modalBackdrop").classList.remove("show"); $("#modalBackdrop").onclick = e => { if (e.target.id === "modalBackdrop") e.currentTarget.classList.remove("show") };
function toast(msg) { const el = $("#toast"); el.textContent = msg; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2400) }
const moodSets = { calm: ["Blanche", "Another 13", "Fleur de Peau", "Not a Perfume", "Chance Eau Tendre"], bold: ["Black Orchid", "Oud Wood", "Oud for Greatness", "Spicebomb Extreme", "Encre Noire"], romantic: ["Baccarat Rouge 540", "Delina", "Lost Cherry", "La Vie Est Belle", "Good Girl"], fresh: ["Aventus", "Wood Sage & Sea Salt", "Light Blue Pour Homme", "Acqua di Giò Profondo", "Neroli Portofino"] };
$$("[data-mood]").forEach(b => b.onclick = () => { $$("[data-mood]").forEach(x => x.classList.remove("selected")); b.classList.add("selected"); const selected = products.filter(p => moodSets[b.dataset.mood].includes(p.name)); $("#moodResult").innerHTML = `<p>${copy[lang].mood[b.dataset.mood]}</p><div class="mood-products">${selected.map(p => `<a class="mood-product" href="#products"><img src="assets/${p.image}" alt="${p.name}"><span><b>${p.name}</b><small>${p.brand}</small></span><em>↗</em></a>`).join("")}</div>`; $("#moodResult").scrollIntoView({ behavior: "smooth", block: "nearest" }) });
$("#newsletterForm").onsubmit = e => { e.preventDefault(); toast(copy[lang].newsletter); e.target.reset() };
$("#mobileMenu").onclick = () => { $$(".nav").forEach(n => n.classList.toggle("open")) }; $$(".nav a").forEach(a => a.addEventListener("click", () => $$(".nav").forEach(n => n.classList.remove("open"))));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target) } }), { threshold: .12 }); $$(".reveal").forEach(el => observer.observe(el));
renderProducts(); setLanguage("fa");

$$(".journal-toggle").forEach(btn => btn.addEventListener("click", () => { const panel = document.getElementById(btn.getAttribute("aria-controls")); const isOpen = btn.getAttribute("aria-expanded") === "true"; btn.setAttribute("aria-expanded", String(!isOpen)); panel.hidden = isOpen; btn.querySelector(".journal-chevron").textContent = isOpen ? "+" : "−" }));
function observeMotion() { const targets = $$(".reveal,.product-card,.method-card,.journal-entry,.benefit,.mood-chip"); const ob = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); ob.unobserve(e.target) } }), { threshold: .1, rootMargin: "0px 0px -30px 0px" }); targets.forEach((el, i) => { el.style.setProperty("--delay", `${i % 5 * 65}ms`); ob.observe(el) }) }
observeMotion();
