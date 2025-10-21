// Shared layout: injects navbar and footer into pages
(function initLayout() {
    // Base path for GitHub Pages - change this if deploying elsewhere
    const BASE_PATH = '';

    // Helper function to add base path to relative URLs
    function withBasePath(href) {
        // Since BASE_PATH is empty, just return href as-is
        // This function is kept for compatibility
        return href;
    }

    function getCurrentLang() {
        // Cookie'den dil tercihini oku (language-utils.js'den)
        return getLanguagePreference();
    }

    function withLangParam(href) {
        try {
            // External links or hash-only links are not modified
            if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return href;
            let normalizedHref = href;
            // Normalize legacy contact page names
            if (/contacts?\.html$/i.test(normalizedHref)) {
                normalizedHref = 'iletisim.html';
            }
            // Add base path if not already present
            normalizedHref = withBasePath(normalizedHref);
            // Dil parametresi artık URL'de değil, cookie'de tutulacak
            // Bu fonksiyon sadece href'i normalize etmek için kullanılıyor
            return normalizedHref;
        } catch (_) {
            return href;
        }
    }

    function attachLanguageRouting() {
        const lang = getCurrentLang();
        try { document.documentElement.lang = lang; } catch (_) { }
        // Dil tercihini cookie'ye kaydet
        try { setLanguageCookie(lang); } catch (_) { }

        // Helper: localize shared navbar/footer texts
        const localizeLayout = (l) => {
            const isEn = l === 'en';
            // Prefer global content translations when available
            const t = (typeof content !== 'undefined' && content[l]) ? content[l] : null;

            const companyName = t ? t.companyName : (isEn ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
            const tagline = t ? t.tagline : (isEn ? 'Gluing the Future of the Construction Industry.' : 'Yapı Sektörünün Geleceğini Yapıştırıyoruz.');

            const navItems = t ? t.navigation : [
                { href: 'index.html', name: isEn ? 'Home' : 'Anasayfa' },
                { href: 'hakkimizda.html', name: isEn ? 'About' : 'Hakkımızda' },
                { href: 'products.html', name: isEn ? 'Products' : 'Ürünler' },
                { href: 'iletisim.html', name: isEn ? 'Contact' : 'İletişim' }
            ];

            // Company texts
            const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
            setText('company-name', companyName);
            setText('company-tagline', tagline);
            setText('footer-company-name', companyName);
            setText('footer-company-tagline', tagline);

            // Footer labels and contact links (phone/mailto)
            setText('footer-pages-title', isEn ? 'Pages' : 'Sayfalar');
            setText('footer-contact-title', isEn ? 'Contact' : 'İletişim');
            const phoneText = (t && t.locations && t.locations.phone) ? t.locations.phone : (isEn ? '+90 555 870 47 59' : '+90 555 870 47 59');
            const phoneEl = document.getElementById('footer-phone');
            if (phoneEl) { phoneEl.textContent = phoneText; phoneEl.setAttribute('href', `tel:${phoneText.replace(/[^+\d]/g, '')}`); }
            const emailText = (t && t.locations && t.locations.email) ? t.locations.email : 'info@hazeryapikimyasallari.com.tr';
            const emailEl = document.getElementById('footer-email');
            if (emailEl) { emailEl.textContent = emailText; emailEl.setAttribute('href', `mailto:${emailText}`); }
            if (!t) {
                setText('footer-description', isEn ? 'Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions.' : 'Yapı sektörünün geleceğini, yüksek performanslı ve çevre dostu yapıştırıcı çözümlerimizle şekillendiriyoruz.');
                setText('footer-address', isEn ? 'Head Office: Istanbul, Turkey' : 'Merkez Ofis: Kocaeli, Türkiye');
                const cr = isEn ? '© 2024 Hazer Construction Chemicals. All rights reserved.' : '© 2024 Hazer Yapı Kimyasalları. Tüm hakları saklıdır.';
                setText('footer-copyright', cr);
            }

            // Build nav links
            const buildNav = (containerId, mobile = false) => {
                const cont = document.getElementById(containerId);
                if (!cont) return;
                cont.innerHTML = navItems.map(item => {
                    const hrefWithBase = withBasePath(item.href);
                    return mobile
                        ? `<li><a href="${hrefWithBase}" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">${item.name}</a></li>`
                        : `<li><a href="${hrefWithBase}" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">${item.name}</a></li>`;
                }).join('');
            };
            buildNav('nav-links', false);
            buildNav('mobile-nav-links', true);

            // Build footer nav
            const footerNav = document.getElementById('footer-nav-links');
            if (footerNav) {
                footerNav.innerHTML = navItems.map(item => {
                    const hrefWithBase = withBasePath(item.href);
                    return `<a href="${hrefWithBase}" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">${item.name}</a>`;
                }).join('');
            }

            // After rebuilding links, normalize them
            document.querySelectorAll('a[href]').forEach(a => {
                const href = a.getAttribute('href');
                const updated = withLangParam(href);
                if (updated !== href) a.setAttribute('href', updated);
            });
        };

        // Normalize all internal nav and footer links
        document.querySelectorAll('a[href]').forEach(a => {
            const href = a.getAttribute('href');
            const updated = withLangParam(href);
            if (updated !== href) {
                a.setAttribute('href', updated);
            }
        });

        // Language buttons: update URL without reload (preserve other params)
        const updateActive = (current) => {
            const on = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            const off = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            const tr = document.getElementById('lang-tr');
            const en = document.getElementById('lang-en');
            const mtr = document.getElementById('mobile-lang-tr');
            const men = document.getElementById('mobile-lang-en');
            if (current === 'tr') {
                if (tr) tr.className = on; if (en) en.className = off;
                if (mtr) mtr.className = on; if (men) men.className = off;
            } else {
                if (tr) tr.className = off; if (en) en.className = on;
                if (mtr) mtr.className = off; if (men) men.className = on;
            }
        };

        const setLang = (target) => {
            try {
                // Dil tercihini cookie'ye kaydet
                updateLanguagePreference(target);
                // Normalize existing links
                document.querySelectorAll('a[href]').forEach(a => {
                    const href = a.getAttribute('href');
                    const updated = withLangParam(href);
                    if (updated !== href) a.setAttribute('href', updated);
                });
                updateActive(target);
                localizeLayout(target);
            } catch (_) { }
        };

        const trBtns = [document.getElementById('lang-tr'), document.getElementById('mobile-lang-tr')].filter(Boolean);
        const enBtns = [document.getElementById('lang-en'), document.getElementById('mobile-lang-en')].filter(Boolean);
        trBtns.forEach(btn => btn && btn.addEventListener('click', () => setLang('tr')));
        enBtns.forEach(btn => btn && btn.addEventListener('click', () => setLang('en')));

        // Sync active state and localize on load
        updateActive(lang);
        localizeLayout(lang);
    }
    function buildNavbar() {
        return `
		<nav id="navigation" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300">
			<div class="container mx-auto px-6">
				<div class="flex items-center justify-between h-20">
					<div class="flex items-center space-x-3">
                        <img src="${BASE_PATH}/assets/images/logo-hazer-1.svg" alt="Hazer Construction Chemicals Logo" class="h-12 w-12">
						<div>
                            <div id="company-name" class="text-xl font-bold text-gray-900">Hazer Construction Chemicals</div>
                            <div id="company-tagline" class="text-sm text-blue-600">Gluing the Future of the Construction Industry.</div>
						</div>
					</div>

					<div class="hidden lg:flex items-center space-x-8">
                        <ul id="nav-links" class="flex space-x-8">
                            <li><a href="${BASE_PATH}/index.html" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</a></li>
                            <li><a href="${BASE_PATH}/hakkimizda.html" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">About</a></li>
                            <li><a href="${BASE_PATH}/products.html" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Products</a></li>
                            <li><a href="${BASE_PATH}/iletisim.html" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact</a></li>
                        </ul>
						<div class="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
							<button id="lang-tr" class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white">TR</button>
							<button id="lang-en" class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900">EN</button>
						</div>
					</div>

					<button id="mobile-menu-btn" class="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
						<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>

				<div id="mobile-menu" class="lg:hidden hidden pb-4">
					<ul id="mobile-nav-links" class="space-y-2">
                            <li><a href="${BASE_PATH}/index.html" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Home</a></li>
                            <li><a href="${BASE_PATH}/hakkimizda.html" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">About</a></li>
                            <li><a href="${BASE_PATH}/products.html" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Products</a></li>
                            <li><a href="${BASE_PATH}/iletisim.html" class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">Contact</a></li>
					</ul>
					<div class="flex items-center space-x-2 bg-gray-100 rounded-lg p-1 mt-4 w-fit">
						<button id="mobile-lang-tr" class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white">TR</button>
						<button id="mobile-lang-en" class="px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900">EN</button>
					</div>
				</div>
			</div>
		</nav>`;
    }

    function buildFooter() {
        return `
		<footer class="bg-gradient-to-br from-slate-900 to-black text-white py-16">
			<div class="container mx-auto px-6">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div class="lg:col-span-2">
						<div class="flex items-center space-x-3 mb-6">
                            <img src="./assets/images/logo-hazer-1.svg" alt="Hazer Construction Chemicals Logo" class="h-12 w-12">
							<div>
                                <div id="footer-company-name" class="text-2xl font-bold text-white">Hazer Construction Chemicals</div>
                                <div id="footer-company-tagline" class="text-sm text-blue-200">Gluing the Future of the Construction Industry.</div>
							</div>
						</div>
                        <p id="footer-description" class="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions.</p>
						<div class="flex space-x-4">
							<a href="#" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
							</a>
							<a href="https://www.linkedin.com/in/erkan-gen%C3%A7-2711a4222/" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300" aria-label="LinkedIn">
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
							</a>
							<a href="#" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/></svg>
							</a>
						</div>
					</div>

                    <div>
                        <h3 id="footer-pages-title" class="text-lg font-semibold mb-6 text-blue-200">Pages</h3>
						<div id="footer-nav-links" class="space-y-3">
                            <a href="${BASE_PATH}/index.html" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Home</a>
                            <a href="${BASE_PATH}/hakkimizda.html" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">About</a>
                            <a href="${BASE_PATH}/products.html" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Products</a>
                            <a href="${BASE_PATH}/iletisim.html" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a>
						</div>
					</div>

                    <div>
                        <h3 id="footer-contact-title" class="text-lg font-semibold mb-6 text-blue-200">Contact</h3>
						<div class="space-y-4">
							<div class="flex items-start space-x-3">
								<svg class="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <p id="footer-address" class="text-gray-400 text-sm">Head Office: Istanbul, Turkey</p>
							</div>
							<div class="flex items-center space-x-3">
								<svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <a id="footer-phone" href="tel:+902123335555" class="text-gray-400 text-sm">+90 212 333 55 55</a>
							</div>
							<div class="flex items-center space-x-3">
								<svg class="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <a id="footer-email" href="mailto:info@hazeryapikimyasallari.com.tr" class="text-gray-400 text-sm">info@hazeryapikimyasallari.com.tr</a>
							</div>
						</div>
					</div>
				</div>
				<div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p id="footer-copyright" class="text-gray-400 text-sm">© 2024 Hazer Yapı Kimyasalları. Tüm hakları saklıdır.</p>
					<div id="footer-links" class="flex items-center space-x-6 mt-4 md:mt-0">
						<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Gizlilik Politikası</a>
						<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Kullanım Şartları</a>
						<a href="#" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">Kariyer</a>
					</div>
				</div>
			</div>
		</footer>`;
    }

    function ensureContainers() {
        // Replace existing nav/footer with shared markup to ensure single source of truth across pages
        const existingNav = document.getElementById('navigation');
        if (existingNav) {
            existingNav.outerHTML = buildNavbar();
        } else {
            const navWrapper = document.createElement('div');
            navWrapper.innerHTML = buildNavbar();
            document.body.prepend(navWrapper.firstElementChild);
        }

        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = buildFooter();
        } else {
            const footerWrapper = document.createElement('div');
            footerWrapper.innerHTML = buildFooter();
            document.body.appendChild(footerWrapper.firstElementChild);
        }
    }

    function init() {
        ensureContainers();
        attachLanguageRouting();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();


