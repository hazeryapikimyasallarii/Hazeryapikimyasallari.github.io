// Hazer Yapı Kimyasalları - Ürün Detay Sayfası JavaScript

// Base path for GitHub Pages - change this if deploying elsewhere
const BASE_PATH = '/Hazeryapikimyasallari';

class ProductDetailPage {
    constructor() {
        this.currentLanguage = this.getInitialLang();
        this.currentProduct = null;
        this.productId = this.getProductIdFromURL();
        this.init();
    }

    getInitialLang() {
        try {
            const p = new URLSearchParams(window.location.search);
            const l = p.get('lang');
            if (l === 'tr' || l === 'en') return l;
            const stored = localStorage.getItem('lang');
            if (stored === 'tr' || stored === 'en') return stored;
            const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
            return browser.startsWith('tr') ? 'tr' : 'en';
        } catch (_) {
            return 'en';
        }
    }

    init() {
        if (!this.productId) {
            this.redirectToProducts();
            return;
        }

        this.currentProduct = getProductById(this.productId);
        if (!this.currentProduct) {
            this.redirectToProducts();
            return;
        }

        this.setupEventListeners();
        this.renderProductContent();
        this.renderRelatedProducts();
        this.setupLanguageSupport();
    }

    getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    redirectToProducts() {
        window.location.href = BASE_PATH + '/products.html';
    }

    setupEventListeners() {
        // Dil değiştirici butonları
        document.getElementById('lang-tr')?.addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('lang-en')?.addEventListener('click', () => this.changeLanguage('en'));
        document.getElementById('mobile-lang-tr')?.addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('mobile-lang-en')?.addEventListener('click', () => this.changeLanguage('en'));

        // Mobil menü
        document.getElementById('mobile-menu-btn')?.addEventListener('click', this.toggleMobileMenu);

        // Geri dön butonu
        document.getElementById('back-to-products')?.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.back();
        });
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.updateLanguageButtons(lang);
        this.updatePageContent(lang);
        this.renderProductContent();
        this.renderRelatedProducts();

        // HTML lang attribute'unu güncelle
        document.documentElement.lang = lang;

        // Meta description'ı güncelle
        this.updateMetaData(lang);
        try { localStorage.setItem('lang', lang); } catch (_) { }
    }

    updateMetaData(lang) {
        const isEnglish = lang === 'en';
        const product = this.currentProduct;

        // Sayfa başlığı
        document.title = isEnglish ?
            `${product.name} - Hazer Construction Chemicals` :
            `${product.name} - Hazer Yapı Kimyasalları`;

        // Meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = isEnglish ?
                `${product.name} - Detailed product information, usage guide and technical specifications. Professional adhesive solutions.` :
                `${product.name} - Detaylı ürün bilgileri, kullanım rehberi ve teknik özellikler. Profesyonel yapıştırıcı çözümleri.`;
        }

        // Open Graph meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDesc = document.querySelector('meta[property="og:description"]');

        if (ogTitle) {
            ogTitle.content = isEnglish ?
                `${product.name} - Hazer Construction Chemicals` :
                `${product.name} - Hazer Yapı Kimyasalları`;
        }

        if (ogDesc) {
            ogDesc.content = product.shortDescription;
        }
    }

    updateLanguageButtons(lang) {
        const trBtn = document.getElementById('lang-tr');
        const enBtn = document.getElementById('lang-en');
        const mobileTrBtn = document.getElementById('mobile-lang-tr');
        const mobileEnBtn = document.getElementById('mobile-lang-en');

        if (lang === 'tr') {
            trBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            mobileTrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            mobileEnBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
        } else {
            trBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            mobileTrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            mobileEnBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
        }
    }

    updatePageContent(lang) {
        const isEnglish = lang === 'en';

        // Şirket bilgileri
        this.updateElement('company-name', isEnglish ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
        this.updateElement('company-tagline', isEnglish ? 'Bonding Strength, Building the Future.' : 'Gücüyle Birleştirir, Geleceği İnşa Eder.');

        // İletişim kartı
        this.updateElement('contact-card-title', isEnglish ? 'Technical Support' : 'Teknik Destek');
        this.updateElement('contact-card-subtitle', isEnglish ? 'Do you have questions about the product?' : 'Ürün hakkında sorularınız mı var?');
        this.updateElement('contact-card-cta', isEnglish ? 'Contact Us' : 'İletişime Geçin');

        // İlgili ürünler - Kategoriye göre dinamik başlık
        const currentCategory = this.currentProduct?.category || '';
        const categoryName = isEnglish ?
            categories.find(cat => cat.id === currentCategory)?.nameEn || currentCategory :
            currentCategory;

        this.updateElement('related-products-title',
            isEnglish ? `Similar ${categoryName} Products` : `Benzer ${categoryName} Ürünleri`
        );
        this.updateElement('related-products-subtitle',
            isEnglish ? `Other ${categoryName.toLowerCase()} products that may interest you` :
                `İlginizi çekebilecek diğer ${categoryName.toLowerCase()} ürünlerimiz`
        );

        // Geri dön butonu
        this.updateElement('back-to-products', isEnglish ? 'Back to All Products' : 'Tüm Ürünlere Dön');

        // Footer
        this.updateElement('footer-company-name', isEnglish ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
        this.updateElement('footer-company-tagline', isEnglish ? 'Gluing the Future of the Construction Industry.' : 'Yapı Sektörünün Geleceğini Yapıştırıyoruz.');
        this.updateElement('footer-description', isEnglish ?
            'Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions.' :
            'Yapı sektörünün geleceğini, yüksek performanslı ve çevre dostu yapıştırıcı çözümlerimizle şekillendiriyoruz.');
        this.updateElement('footer-pages-title', isEnglish ? 'Pages' : 'Sayfalar');
        this.updateElement('footer-contact-title', isEnglish ? 'Contact' : 'İletişim');
        this.updateElement('footer-address', isEnglish ? 'Head Office: Istanbul, Turkey' : 'Merkez Ofis: Kocaeli, Türkiye');
        this.updateElement('footer-copyright', isEnglish ?
            '© 2024 Hazer Construction Chemicals. All rights reserved.' :
            '© 2024 Hazer Yapı Kimyasalları. Tüm hakları saklıdır.');
    }

    updateElement(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    setupLanguageSupport() {
        // Sayfa yüklendiğinde varsayılan dili ayarla
        this.updatePageContent(this.currentLanguage);
        this.updateMetaData(this.currentLanguage);
    }

    renderProductContent() {
        const product = this.currentProduct;
        const isEnglish = this.currentLanguage === 'en';

        const getLocalized = (obj, field) => {
            if (isEnglish && obj[`${field}En`]) return obj[`${field}En`];
            return obj[field];
        };

        // Ürün başlığı
        this.renderProductHeader(product, isEnglish, getLocalized);

        // Ürün açıklaması
        this.renderProductDescription(product, isEnglish, getLocalized);

        // Teknik özellikler
        this.renderTechnicalSpecs(product, isEnglish, getLocalized);

        // Ürün avantajları
        this.renderAdvantages(product, isEnglish, getLocalized);

        // Depolama bilgileri
        this.renderStorage(product, isEnglish, getLocalized);

        // Kullanım rehberi
        this.renderUsageGuide(product, isEnglish, getLocalized);

        // Hızlı bilgi kartı
        this.renderQuickInfo(product, isEnglish);

        // Belgeler ve Sertifikalar kartı (ayrı blokta)
        this.renderDocuments(product, isEnglish);
    }

    renderProductHeader(product, isEnglish, getLocalized) {
        const headerContainer = document.getElementById('productHeader');
        if (!headerContainer) return;

        const categoryName = isEnglish ?
            categories.find(cat => cat.id === product.category)?.nameEn || product.category :
            product.category;

        const name = getLocalized(product, 'name');
        const shortDescription = getLocalized(product, 'shortDescription');
        headerContainer.innerHTML = `
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
            </div>

            <div class="container mx-auto px-6 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Product Info -->
                    <div class="text-white">
                        <div class="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
                            <span class="text-blue-200 text-sm font-medium">
                                ${isEnglish ? 'Products' : 'Ürünler'} / ${categoryName}
                            </span>
                        </div>
                        
                        <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            ${name}
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-blue-200 leading-relaxed mb-8">
                            ${shortDescription}
                        </p>
                        
                        <!-- Quick Features -->
                        <div class="grid grid-cols-2 gap-4 mb-8">
                            ${(isEnglish && product.featuresEn ? product.featuresEn : product.features).slice(0, 4).map(feature => `
                                <div class="flex items-center space-x-2">
                                    <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span class="text-blue-100 text-sm">${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="flex flex-wrap gap-4">
                            <a href="#productDescription" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>${isEnglish ? 'Product Details' : 'Ürün Detayları'}</span>
                            </a>
                            
                            <a href="iletisim.html" class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span>${isEnglish ? 'Contact Us' : 'İletişim'}</span>
                            </a>
                        </div>
                    </div>

                    <!-- Product Image -->
                    <div class="relative">
                        <div class="relative z-10">
                            <img 
                                src="${product.image}" 
                                alt="${product.name}"
                                class="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                                onerror="this.src='./assets/images/products/placeholder.png'"
                            />
                        </div>
                        
                        <!-- Floating Elements -->
                        <div class="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
                        <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        `;
    }

    renderProductDescription(product, isEnglish, getLocalized) {
        const container = document.getElementById('productDescription');
        if (!container) return;

        container.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                    ${isEnglish ? 'Product Description' : 'Ürün Açıklaması'}
                </h2>
            </div>
            
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
                ${getLocalized(product, 'fullDescription')}
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">
                        ${isEnglish ? 'Key Features' : 'Temel Özellikler'}
                    </h3>
                    <ul class="space-y-3">
                        ${(isEnglish && product.featuresEn ? product.featuresEn : product.features).map(feature => `
                            <li class="flex items-start space-x-3">
                                <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-gray-700">${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">
                        ${isEnglish ? 'Application Areas' : 'Uygulama Alanları'}
                    </h3>
                    <div class="flex flex-wrap gap-2">
                        ${((isEnglish && product.applicationsEn) ? product.applicationsEn : product.applications).map(app => `
                            <span class="px-3 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg">
                                ${app}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderTechnicalSpecs(product, isEnglish) {
        const container = document.getElementById('technicalSpecs');
        if (!container) return;

        // Localize technical spec keys when English is selected (best-effort mapping)
        const keyMap = {
            'Renk': 'Color',
            'İçerik': 'Content',
            'Sarfiyat': 'Consumption',
            'Açıkta Bekleme Süresi': 'Open Time',
            'Tam Sertleşme': 'Full Cure',
            'Çalışma Süresi': 'Working Time',
            'İlk Tutma Süresi': 'Initial Tack Time',
            'Uygulama Sıcaklığı': 'Application Temperature',
            'Sıcaklık Dayanımı': 'Temperature Resistance',
            'Raf Ömrü': 'Shelf Life',
            'Ambalaj': 'Packaging',
            'Alt Yüzey Uygulama Sıcaklığı': 'Substrate Application Temperature',
            'Kuruma Süresi': 'Drying Time',
            'Görünüm': 'Appearance'
        };

        const sourceEntries = (isEnglish && product.technicalSpecsEn)
            ? Object.entries(product.technicalSpecsEn)
            : Object.entries(product.technicalSpecs);

        const localizedEntries = (isEnglish && product.technicalSpecsEn)
            ? sourceEntries
            : sourceEntries.map(([key, value]) => [keyMap[key] ? keyMap[key] : key, value]);

        container.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                    ${isEnglish ? 'Technical Specifications' : 'Teknik Özellikler'}
                </h2>
            </div>
            
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gray-50">
                            <th class="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
                                ${isEnglish ? 'Property' : 'Özellik'}
                            </th>
                            <th class="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
                                ${isEnglish ? 'Value' : 'Değer'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${localizedEntries.map(([key, value]) => `
                            <tr class="hover:bg-gray-50 transition-colors duration-200">
                                <td class="py-4 px-6 font-medium text-gray-900 border-b border-gray-100">${key}</td>
                                <td class="py-4 px-6 text-gray-700 border-b border-gray-100">${value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    renderAdvantages(product, isEnglish) {
        const container = document.getElementById('advantages');
        if (!container) return;

        const advantages = isEnglish && product.advantagesEn ? product.advantagesEn : product.advantages;

        container.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                    ${isEnglish ? 'Product Advantages' : 'Ürün Avantajları'}
                </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${advantages.map(advantage => `
                    <div class="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                        <svg class="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-800 leading-relaxed">${advantage}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderStorage(product, isEnglish) {
        const container = document.getElementById('storage');
        if (!container) return;

        const shelfLife = isEnglish && product.storage.shelfLifeEn ? product.storage.shelfLifeEn : product.storage.shelfLife;
        const conditions = (isEnglish && product.storage.conditionsEn) ? product.storage.conditionsEn : product.storage.conditions;
        const warnings = (isEnglish && product.storage.warningsEn) ? product.storage.warningsEn : product.storage.warnings;

        container.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                    ${isEnglish ? 'Storage and Shelf Life' : 'Depolama ve Raf Ömrü'}
                </h2>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="bg-blue-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-blue-900 mb-3">
                        ${isEnglish ? 'Shelf Life' : 'Raf Ömrü'}
                    </h3>
                    <p class="text-blue-800 font-medium">${shelfLife}</p>
                </div>
                
                <div class="bg-green-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-green-900 mb-3">
                        ${isEnglish ? 'Storage Conditions' : 'Depolama Koşulları'}
                    </h3>
                    <ul class="space-y-2">
                        ${conditions.map(condition => `
                            <li class="flex items-start space-x-2">
                                <svg class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span class="text-green-800 text-sm">${condition}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-red-50 p-6 rounded-lg">
                    <h3 class="text-lg font-semibold text-red-900 mb-3">
                        ${isEnglish ? 'Important Warnings' : 'Önemli Uyarılar'}
                    </h3>
                    <ul class="space-y-2">
                        ${warnings.map(warning => `
                            <li class="flex items-start space-x-2">
                                <svg class="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <span class="text-red-800 text-sm">${warning}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    renderUsageGuide(product, isEnglish) {
        const container = document.getElementById('usageGuide');
        if (!container) return;

        const prep = (isEnglish && product.usageGuideEn && product.usageGuideEn.preparation) ? product.usageGuideEn.preparation : product.usageGuide.preparation;
        const app = (isEnglish && product.usageGuideEn && product.usageGuideEn.application) ? product.usageGuideEn.application : product.usageGuide.application;
        const safe = (isEnglish && product.usageGuideEn && product.usageGuideEn.safety) ? product.usageGuideEn.safety : product.usageGuide.safety;

        container.innerHTML = `
            <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-gray-900">
                    ${isEnglish ? 'Usage Guide' : 'Kullanım Rehberi'}
                </h2>
            </div>
            
            <div class="space-y-8">
                <div class="bg-blue-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                        <span class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                        ${isEnglish ? 'Surface Preparation' : 'Yüzey Hazırlığı'}
                    </h3>
                    <ul class="space-y-2">
                        ${prep.map(step => `
                            <li class="flex items-start space-x-3">
                                <svg class="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span class="text-blue-800">${step}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-green-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-green-900 mb-4 flex items-center">
                        <span class="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                        ${isEnglish ? 'Application Steps' : 'Uygulama Adımları'}
                    </h3>
                    <ul class="space-y-2">
                        ${app.map(step => `
                            <li class="flex items-start space-x-3">
                                <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <span class="text-green-800">${step}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-red-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold text-red-900 mb-4 flex items-center">
                        <span class="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                        ${isEnglish ? 'Safety Precautions' : 'Güvenlik Önlemleri'}
                    </h3>
                    <ul class="space-y-2">
                        ${safe.map(safety => `
                            <li class="flex items-start space-x-3">
                                <svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <span class="text-red-800">${safety}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    renderQuickInfo(product, isEnglish) {
        const container = document.getElementById('quickInfo');
        if (!container) return;

        const categoryName = isEnglish ?
            categories.find(cat => cat.id === product.category)?.nameEn || product.category :
            product.category;

        container.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                ${isEnglish ? 'Quick Information' : 'Hızlı Bilgi'}
            </h3>
            
            <div class="space-y-4">
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <span class="text-gray-600 font-medium">${isEnglish ? 'Category:' : 'Kategori:'}</span>
                    <span class="text-gray-900 font-semibold">${categoryName}</span>
                </div>
                
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <span class="text-gray-600 font-medium">${isEnglish ? 'Shelf Life:' : 'Raf Ömrü:'}</span>
                    <span class="text-gray-900 font-semibold">${(isEnglish && product.storage.shelfLifeEn) ? product.storage.shelfLifeEn : product.storage.shelfLife}</span>
                </div>
                
                ${(() => {
                const trToEnKeyMap = {
                    'Renk': 'Color',
                    'İçerik': 'Content',
                    'Sarfiyat': 'Consumption',
                    'Uygulama Sıcaklığı': 'Application Temperature'
                };
                const source = (isEnglish && product.technicalSpecsEn)
                    ? Object.entries(product.technicalSpecsEn)
                    : Object.entries(product.technicalSpecs).map(([k, v]) => [isEnglish && trToEnKeyMap[k] ? trToEnKeyMap[k] : k, v]);
                return source.slice(0, 3).map(([key, value]) => `
                        <div class="flex justify-between items-center py-3 border-b border-gray-100">
                            <span class="text-gray-600 font-medium">${key}:</span>
                            <span class="text-gray-900 font-semibold">${value}</span>
                        </div>
                    `).join('');
            })()}
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
                <a href="iletisim.html" class="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>${isEnglish ? 'Get Quote' : 'Fiyat Teklifi Al'}</span>
                </a>
            </div>
        `;
    }

    renderDocuments(product, isEnglish) {
        const container = document.getElementById('documents');
        if (!container) return;

        container.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                ${isEnglish ? 'Documents & Certificates' : 'Belgeler ve Sertifikalar'}
            </h3>
            
            <div class="space-y-3">
                ${product.documents.map(doc => `
                    <a href="${doc.url}" class="flex items-center p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors duration-200 group" ${doc.download ? 'download' : ''}>
                        <div class="w-10 h-10 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center mr-4">
                            <i class="${doc.icon} text-blue-600"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-gray-900 group-hover:text-blue-600">${isEnglish && doc.nameEn ? doc.nameEn : doc.name}</h4>
                        </div>
                        <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </a>
                `).join('')}
            </div>
        `;
    }

    renderRelatedProducts() {
        const container = document.getElementById('relatedProducts');
        if (!container) return;

        // Mevcut ürünün kategorisine göre benzer ürünleri getir (6 ürün)
        const relatedProducts = getRelatedProducts(this.productId, 6);
        const isEnglish = this.currentLanguage === 'en';

        // Eğer benzer ürün yoksa bilgi mesajı göster
        if (relatedProducts.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="max-w-md mx-auto">
                        <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                            </svg>
                        </div>
                        <p class="text-gray-600 text-lg font-medium mb-2">
                            ${isEnglish ? 'No similar products found' : 'Bu kategoride başka ürün bulunamadı'}
                        </p>
                        <p class="text-gray-500 text-sm">
                            ${isEnglish ? 'Check out our other product categories' : 'Diğer ürün kategorilerimize göz atabilirsiniz'}
                        </p>
                        <a href="products.html" class="inline-flex items-center mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            ${isEnglish ? 'View All Products' : 'Tüm Ürünleri Gör'}
                        </a>
                    </div>
                </div>
            `;
            return;
        }

        // Slider için ürünleri render et
        container.innerHTML = relatedProducts.map(product => {
            const categoryName = isEnglish ?
                categories.find(cat => cat.id === product.category)?.nameEn || product.category :
                product.category;
            const name = (isEnglish && product.nameEn) ? product.nameEn : product.name;
            const shortDesc = (isEnglish && product.shortDescriptionEn) ? product.shortDescriptionEn : product.shortDescription;

            return `
                <div class="slider-item">
                    <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 h-full">
                        <!-- Product Image -->
                        <div class="relative h-56 bg-white overflow-hidden flex items-center justify-center p-4">
                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                onerror="this.src='./assets/images/products/placeholder.png'"
                            />

                            <!-- Category Badge -->
                            <div class="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-full shadow-lg">
                                ${categoryName}
                            </div>
                        </div>

                        <!-- Product Content -->
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 min-h-[3.5rem]">
                                ${name}
                            </h3>

                            <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 min-h-[4rem]">
                                ${shortDesc}
                            </p>

                            <!-- Action Button -->
                            <a
                                href="product-detail.html?id=${product.id}"
                                class="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                                <span>${isEnglish ? 'View Details' : 'Detayları Gör'}</span>
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Slider'ı başlat
        this.initSlider(relatedProducts.length);
    }

    initSlider(totalItems) {
        let currentIndex = 0;
        const slider = document.getElementById('relatedProducts');
        const prevBtn = document.getElementById('slider-prev');
        const nextBtn = document.getElementById('slider-next');
        const dotsContainer = document.getElementById('slider-dots');

        if (!slider || !prevBtn || !nextBtn || !dotsContainer) return;

        // Ekran boyutuna göre görünür item sayısını belirle
        const getItemsPerView = () => {
            if (window.innerWidth >= 1024) return 3; // Desktop
            if (window.innerWidth >= 768) return 2;  // Tablet
            return 1; // Mobile
        };

        // Toplam sayfa sayısını hesapla
        const getTotalPages = () => {
            const itemsPerView = getItemsPerView();
            return Math.ceil(totalItems / itemsPerView);
        };

        // Dots oluştur
        const createDots = () => {
            const totalPages = getTotalPages();
            dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, i) =>
                `<div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
            ).join('');

            // Dot click event
            dotsContainer.querySelectorAll('.slider-dot').forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.dataset.index);
                    goToSlide(index);
                });
            });
        };

        // Slider'ı hareket ettir
        const updateSlider = () => {
            const itemsPerView = getItemsPerView();
            const offset = -(currentIndex * (100 / itemsPerView));
            slider.style.transform = `translateX(${offset}%)`;

            // Butonları güncelle
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= getTotalPages() - 1;

            // Dots'u güncelle
            dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        };

        // Belirli bir slide'a git
        const goToSlide = (index) => {
            const totalPages = getTotalPages();
            currentIndex = Math.max(0, Math.min(index, totalPages - 1));
            updateSlider();
        };

        // Önceki slide
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

        // Sonraki slide
        nextBtn.addEventListener('click', () => {
            if (currentIndex < getTotalPages() - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        // Klavye navigasyonu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
        });

        // Touch/Swipe desteği
        let touchStartX = 0;
        let touchEndX = 0;

        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) nextBtn.click(); // Swipe left
            if (touchEndX > touchStartX + 50) prevBtn.click(); // Swipe right
        };

        // Responsive: Ekran boyutu değiştiğinde slider'ı güncelle
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                currentIndex = 0;
                createDots();
                updateSlider();
            }, 250);
        });

        // İlk yükleme
        createDots();
        updateSlider();
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }
}

// Sayfa yüklendiğinde uygulamayı başlat
let productDetailPageInstance;
document.addEventListener('DOMContentLoaded', () => {
    productDetailPageInstance = new ProductDetailPage();
});

// Smooth scrolling için
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar scroll efekti
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const navbar = document.getElementById('navigation');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        if (scrollTop > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }

        lastScrollTop = scrollTop;
    });
});
