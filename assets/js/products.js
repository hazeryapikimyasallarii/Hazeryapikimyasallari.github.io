// Hazer Yapı Kimyasalları - Ürünler Sayfası JavaScript

class ProductsPage {
    constructor() {
        this.currentLanguage = this.getInitialLang();
        this.currentCategory = 'all';
        this.filteredProducts = productsData;
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
        // URL'den kategori parametresini oku ve başlangıç filtresini uygula
        try {
            const params = new URLSearchParams(window.location.search);
            const urlCategory = params.get('category');
            if (urlCategory) {
                this.currentCategory = urlCategory;
                this.filteredProducts = getProductsByCategory(urlCategory);
            }
        } catch (_) {}

        this.setupEventListeners();
        this.renderCategoryFilters();
        this.renderProducts();
        this.setupLanguageSupport();
    }

    setupEventListeners() {
        // Dil değiştirici butonları
        document.getElementById('lang-tr')?.addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('lang-en')?.addEventListener('click', () => this.changeLanguage('en'));
        document.getElementById('mobile-lang-tr')?.addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('mobile-lang-en')?.addEventListener('click', () => this.changeLanguage('en'));

        // Mobil menü
        document.getElementById('mobile-menu-btn')?.addEventListener('click', this.toggleMobileMenu);
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.updateLanguageButtons(lang);
        this.updatePageContent(lang);
        this.renderCategoryFilters();
        this.renderProducts();
        
        // HTML lang attribute'unu güncelle
        document.documentElement.lang = lang;
        
        // Meta description'ı güncelle
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            if (lang === 'tr') {
                metaDesc.content = "Hazer Yapı Kimyasalları ürünleri - Endüstriyel yapıştırıcılar, zemin kaplama tutkalları, ahşap yapıştırıcıları ve genel amaçlı tutkallar. Yüksek kalite, güvenilir çözümler.";
            } else {
                metaDesc.content = "Hazer Construction Chemicals products - Industrial adhesives, floor covering glues, wood adhesives and general purpose glues. High quality, reliable solutions.";
            }
        }
        try { localStorage.setItem('lang', lang); } catch (_) {}
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
        
        // Sayfa başlığı
        document.title = isEnglish ? 
            'Products - Hazer Construction Chemicals' : 
            'Ürünler - Hazer Yapı Kimyasalları';

        // Şirket bilgileri
        this.updateElement('company-name', isEnglish ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
        this.updateElement('company-tagline', isEnglish ? 'Gluing the Future of the Construction Industry.' : 'Yapı Sektörünün Geleceğini Yapıştırıyoruz.');

        // Sayfa içeriği
        this.updateElement('page-breadcrumb', isEnglish ? 'Home / Products' : 'Anasayfa / Ürünler');
        this.updateElement('page-title', isEnglish ? 'Our Product Portfolio' : 'Ürün Portföyümüz');
        this.updateElement('page-subtitle', isEnglish ? 
            'High-performance adhesive solutions for every need. Wide product range from industrial applications to home use.' :
            'Her ihtiyaca uygun, yüksek performanslı yapıştırıcı çözümleri. Endüstriyel uygulamalardan ev kullanımına kadar geniş ürün yelpazesi.');

        // Filtre bölümü
        this.updateElement('filter-title', isEnglish ? 'Select Category' : 'Kategori Seçin');
        this.updateElement('filter-subtitle', isEnglish ? 
            'You can filter by selecting the product category that suits your needs' :
            'İhtiyacınıza uygun ürün kategorisini seçerek filtreleyebilirsiniz');

        // Ürünler bölümü
        this.updateElement('products-title', isEnglish ? 'Our Products' : 'Ürünlerimiz');

        // Loading ve No Products durumları
        this.updateElement('no-products-title', isEnglish ? 'No Products Found' : 'Ürün Bulunamadı');
        this.updateElement('no-products-text', isEnglish ? 
            'No products found in the selected category. Please select a different category.' :
            'Seçilen kategoride ürün bulunmamaktadır. Lütfen farklı bir kategori seçin.');
        this.updateElement('loading-text', isEnglish ? 'Loading products...' : 'Ürünler yükleniyor...');

        // Özellikler bölümü
        this.updateElement('features-title', isEnglish ? 'Product Features' : 'Ürün Özellikleri');
        this.updateElement('features-subtitle', isEnglish ? 
            'Key features of our quality and performance-oriented adhesive solutions' :
            'Kalite ve performans odaklı yapıştırıcı çözümlerimizin temel özellikleri');

        this.updateElement('feature-quality-title', isEnglish ? 'Quality Certificates' : 'Kalite Sertifikaları');
        this.updateElement('feature-quality-desc', isEnglish ? 
            'ISO 9001, CE and TSE certified products. Production in accordance with international quality standards.' :
            'ISO 9001, CE ve TSE sertifikalı ürünler. Uluslararası kalite standartlarına uygun üretim.');

        this.updateElement('feature-eco-title', isEnglish ? 'Eco-Friendly' : 'Çevre Dostu');
        this.updateElement('feature-eco-desc', isEnglish ? 
            'Formulas developed with sustainable production methods that are harmless to the environment and human health.' :
            'Çevre ve insan sağlığına zararsız, sürdürülebilir üretim yöntemleri ile geliştirilmiş formüller.');

        this.updateElement('feature-rd-title', isEnglish ? 'R&D Laboratory' : 'Ar-Ge Laboratuvarı');
        this.updateElement('feature-rd-desc', isEnglish ? 
            'Innovative formulas developed, tested and approved in our own R&D center.' :
            'Kendi Ar-Ge merkezimizde geliştirilen, test edilmiş ve onaylanmış yenilikçi formüller.');

        this.updateElement('feature-delivery-title', isEnglish ? 'Fast Delivery' : 'Hızlı Teslimat');
        this.updateElement('feature-delivery-desc', isEnglish ? 
            'Safe delivery within 24-48 hours throughout Turkey. Special service for urgent orders.' :
            'Türkiye genelinde 24-48 saat içinde güvenli teslimat. Acil siparişler için özel servis.');

        // Teknik destek bölümü
        this.updateElement('support-title', isEnglish ? 'Technical Support and Consultancy' : 'Teknik Destek ve Danışmanlık');
        this.updateElement('support-subtitle', isEnglish ? 
            'Our expert team is ready to help you with the right product selection and application.' :
            'Uzman ekibimiz, doğru ürün seçimi ve uygulama konularında size yardımcı olmaya hazır.');

        // Destek özellikleri
        const supportFeatures = document.getElementById('support-features');
        if (supportFeatures) {
            supportFeatures.innerHTML = `
                <li class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-lg">${isEnglish ? 'Free technical consultancy' : 'Ücretsiz teknik danışmanlık'}</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-lg">${isEnglish ? 'Pre-application test support' : 'Uygulama öncesi test desteği'}</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-lg">${isEnglish ? 'Custom formulation development' : 'Özel formülasyon geliştirme'}</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-lg">${isEnglish ? 'Training and application seminars' : 'Eğitim ve uygulama seminerleri'}</span>
                </li>
            `;
        }

        this.updateElement('support-cta', isEnglish ? 'Get Technical Support' : 'Teknik Destek Al');

        // Footer
        this.updateElement('footer-company-name', isEnglish ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
        this.updateElement('footer-company-tagline', isEnglish ? 'Gluing the Future of the Construction Industry.' : 'Yapı Sektörünün Geleceğini Yapıştırıyoruz.');
        this.updateElement('footer-description', isEnglish ? 
            'Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions.' :
            'Yapı sektörünün geleceğini, yüksek performanslı ve çevre dostu yapıştırıcı çözümlerimizle şekillendiriyoruz.');
        this.updateElement('footer-pages-title', isEnglish ? 'Pages' : 'Sayfalar');
        this.updateElement('footer-contact-title', isEnglish ? 'Contact' : 'İletişim');
        this.updateElement('footer-address', isEnglish ? 'Head Office: Kocaeli, Turkey' : 'Merkez Ofis: Kocaeli, Türkiye');
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
    }

    renderCategoryFilters() {
        const filtersContainer = document.getElementById('categoryFilters');
        if (!filtersContainer) return;

        const isEnglish = this.currentLanguage === 'en';
        
        filtersContainer.innerHTML = categories.map(category => {
            const isActive = this.currentCategory === category.id;
            const categoryName = isEnglish ? category.nameEn : category.name;
            
            return `
                <button 
                    class="px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive 
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105' 
                            : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                    }"
                    onclick="productsPageInstance.filterByCategory('${category.id}')"
                >
                    ${categoryName}
                </button>
            `;
        }).join('');
    }

    filterByCategory(categoryId) {
        this.currentCategory = categoryId;
        this.filteredProducts = getProductsByCategory(categoryId);
        this.renderCategoryFilters();
        this.renderProducts();
    }

    renderProducts() {
        const productsContainer = document.getElementById('productsGrid');
        const loadingState = document.getElementById('loading-state');
        const noProductsState = document.getElementById('no-products-state');
        
        if (!productsContainer) return;

        // Loading state göster
        if (loadingState) loadingState.classList.remove('hidden');
        if (noProductsState) noProductsState.classList.add('hidden');
        productsContainer.innerHTML = '';

        // Simulated loading delay
        setTimeout(() => {
            if (loadingState) loadingState.classList.add('hidden');
            
            if (this.filteredProducts.length === 0) {
                if (noProductsState) noProductsState.classList.remove('hidden');
                return;
            }

            const isEnglish = this.currentLanguage === 'en';

            const getLocalized = (obj, field) => {
                if (isEnglish && obj[`${field}En`]) return obj[`${field}En`];
                return obj[field];
            };
            
            productsContainer.innerHTML = this.filteredProducts.map(product => {
                const categoryName = isEnglish ? 
                    categories.find(cat => cat.id === product.category)?.nameEn || product.category :
                    product.category;
                const name = getLocalized(product, 'name');
                const shortDescription = getLocalized(product, 'shortDescription');
                const features = (isEnglish && product.featuresEn) ? product.featuresEn : product.features;
                const applications = (isEnglish && product.applicationsEn) ? product.applicationsEn : product.applications;
                
                return `
                    <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                        <!-- Product Image -->
                        <div class="relative h-64 bg-white overflow-hidden flex items-center justify-center p-4">
                            <img
                                src="${product.image}"
                                alt="${name}"
                                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                onerror="this.src='./assets/images/products/placeholder.png'"
                            />
                            
                            <!-- Category Badge -->
                            <div class="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                ${categoryName}
                            </div>
                            
                            <!-- Hover Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <a 
                                    href="product-detail.html?id=${product.id}" 
                                    class="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                                >
                                    ${isEnglish ? 'View Details' : 'Detayları Gör'}
                                </a>
                            </div>
                        </div>

                        <!-- Product Content -->
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                ${name}
                            </h3>
                            
                            <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                ${shortDescription}
                            </p>
                            
                            <!-- Features -->
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">
                                    ${isEnglish ? 'Key Features:' : 'Temel Özellikler:'}
                                </h4>
                                <ul class="space-y-1">
                                    ${features.slice(0, 3).map(feature => `
                                        <li class="flex items-center text-sm text-gray-600">
                                            <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            ${feature}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                            
                            <!-- Applications -->
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-900 mb-2">
                                    ${isEnglish ? 'Applications:' : 'Uygulama Alanları:'}
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    ${applications.slice(0, 3).map(app => `
                                        <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-md">
                                            ${app}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Action Button -->
                            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                                <a 
                                    href="product-detail.html?id=${product.id}" 
                                    class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                                >
                                    <span>${isEnglish ? 'Learn More' : 'Detaylar'}</span>
                                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                
                                <button 
                                    onclick="productsPageInstance.showQuickInfo('${product.id}')"
                                    class="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                                    title="${isEnglish ? 'Quick Info' : 'Hızlı Bilgi'}"
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }, 500);
    }

    showQuickInfo(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const isEnglish = this.currentLanguage === 'en';
        
        // Modal oluştur
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-bold text-gray-900">${product.name}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="p-2 text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg">
                        </div>
                        <div>
                            <p class="text-gray-600 mb-4">${product.shortDescription}</p>
                            <div class="space-y-3">
                                <div>
                                    <h4 class="font-semibold text-gray-900">${isEnglish ? 'Category:' : 'Kategori:'}</h4>
                                    <p class="text-gray-600">${product.category}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">${isEnglish ? 'Applications:' : 'Uygulama Alanları:'}</h4>
                                    <p class="text-gray-600">${product.applications.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 flex justify-end space-x-4">
                        <button onclick="this.closest('.fixed').remove()" class="px-4 py-2 text-gray-600 hover:text-gray-800">
                            ${isEnglish ? 'Close' : 'Kapat'}
                        </button>
                        <a href="product-detail.html?id=${product.id}" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            ${isEnglish ? 'View Details' : 'Detayları Gör'}
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }
}

// Sayfa yüklendiğinde uygulamayı başlat
let productsPageInstance;
document.addEventListener('DOMContentLoaded', () => {
    productsPageInstance = new ProductsPage();
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
