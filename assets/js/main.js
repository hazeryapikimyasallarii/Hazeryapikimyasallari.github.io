// Ana JavaScript dosyası - Çok dilli işlevsellik ve sayfa etkileşimleri

class HazerWebsite {
    constructor() {
        this.currentLanguage = this.getInitialLang();
        this.init();
    }

    getInitialLang() {
        // language-utils.js'den getLanguagePreference() kullan
        return getLanguagePreference();
    }

    init() {
        this.setupEventListeners();
        this.updateContent(this.currentLanguage);
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupNavbarScroll();
    }

    setupEventListeners() {
        // Dil değiştirici butonları
        document.getElementById('lang-tr').addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('lang-en').addEventListener('click', () => this.changeLanguage('en'));
        document.getElementById('mobile-lang-tr').addEventListener('click', () => this.changeLanguage('tr'));
        document.getElementById('mobile-lang-en').addEventListener('click', () => this.changeLanguage('en'));

        // Mobil menü
        document.getElementById('mobile-menu-btn').addEventListener('click', this.toggleMobileMenu);

        // Form gönderimi
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit);
        }
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.updateContent(lang);
        this.updateLanguageButtons(lang);

        // Dil tercihini cookie'ye kaydet ve HTML lang attribute'unu güncelle
        updateLanguagePreference(lang);

        // Meta description'ı güncelle
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            if (lang === 'tr') {
                metaDesc.content = "Hazer Yapı Kimyasalları - Yüksek performanslı yapıştırıcı çözümleri. Zemin kaplama, ahşap ve endüstriyel yapıştırıcılar. Güvenilir, çevre dostu ve kaliteli ürünler.";
            } else {
                metaDesc.content = "Hazer Construction Chemicals - High-performance adhesive solutions. Floor covering, wood and industrial adhesives. Reliable, eco-friendly and quality products.";
            }
        }
    }

    updateLanguageButtons(lang) {
        // Desktop dil butonları
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

    updateContent(lang) {
        const t = content[lang];

        // Sayfa başlığı
        document.title = `${t.companyName} - ${t.hero.title}`;

        // Şirket bilgileri
        this.updateElement('company-name', t.companyName);
        this.updateElement('company-tagline', t.tagline);

        // Navigasyon
        this.updateNavigation(t.navigation);

        // Hero section (slide 1)
        this.updateElement('hero-company-name', t.companyName);
        this.updateElement('hero-title', t.hero.title);
        this.updateElement('hero-subtitle', t.hero.subtitle);
        this.updateElement('hero-cta-primary', t.hero.cta);
        this.updateElement('hero-cta-secondary', t.hero.ctaSecondary);

        // Slide 2 texts
        this.updateElement('slide2-badge', lang === 'en' ? 'Industrial Solutions' : 'Endüstriyel Çözümler');
        this.updateElement('slide2-title', lang === 'en' ? 'Professional Industrial Adhesives' : 'Profesyonel Endüstriyel Yapıştırıcılar');
        this.updateElement('slide2-subtitle', lang === 'en' ? 'High-strength adhesive solutions tailored for automotive, electronics and metalworking.' : 'Otomotiv, elektronik ve metal işleme için özel tasarlanmış yüksek mukavemetli yapıştırıcı çözümleri.');
        this.updateElement('slide2-cta-products-text', lang === 'en' ? 'Industrial Products' : 'Endüstriyel Ürünler');
        this.updateElement('slide2-cta-support-text', lang === 'en' ? 'Technical Support' : 'Teknik Destek');

        // About section
        this.updateElement('about-title', t.about.title);
        this.updateElement('about-mission-title', t.about.missionTitle);
        this.updateElement('about-mission-text', t.about.mission);
        this.updateElement('about-expertise-title', t.about.expertiseTitle);
        this.updateElement('about-expertise-text', t.about.expertise);
        this.updateElement('about-vision-title', t.about.visionTitle);
        this.updateElement('about-vision-text', t.about.vision);

        // About features
        this.updateElement('feature-eco-title', t.about.features.eco.title);
        this.updateElement('feature-eco-desc', t.about.features.eco.desc);
        this.updateElement('feature-quality-title', t.about.features.quality.title);
        this.updateElement('feature-quality-desc', t.about.features.quality.desc);
        this.updateElement('feature-delivery-title', t.about.features.delivery.title);
        this.updateElement('feature-delivery-desc', t.about.features.delivery.desc);
        this.updateElement('feature-support-title', t.about.features.support.title);
        this.updateElement('feature-support-desc', t.about.features.support.desc);

        // Statistics section
        this.updateElement('statistics-title', t.statistics.title);
        this.updateElement('statistics-subtitle', t.statistics.subtitle);
        this.updateElement('statistics-description', t.statistics.description);
        this.updateStatistics(t.statistics.items);

        // Team section
        this.updateElement('team-title', t.team.title);
        this.updateElement('team-subtitle', t.team.subtitle);
        this.updateTeamMembers(t.team.members);
        this.updateElement('value-innovation-title', t.team.values.innovation.title);
        this.updateElement('value-innovation-desc', t.team.values.innovation.desc);
        this.updateElement('value-quality-title', t.team.values.quality.title);
        this.updateElement('value-quality-desc', t.team.values.quality.desc);
        this.updateElement('value-teamwork-title', t.team.values.teamwork.title);
        this.updateElement('value-teamwork-desc', t.team.values.teamwork.desc);

        // Services section
        this.updateElement('services-title', t.services.title);
        this.updateElement('services-subtitle', t.services.subtitle);
        this.updateElement('view-all-products-btn', t.services.viewAllProducts);
        this.updateServices(t.services.categories);

        // Services cards static section headlines/ctas
        const mapped = t.services.categories;
        if (mapped && mapped.length >= 4) {
            this.updateElement('category-1-title', mapped[0].name);
            this.updateElement('category-1-desc', mapped[0].description);
            this.updateElement('category-1-cta-text', lang === 'en' ? 'View Products' : 'Ürünleri Gör');

            this.updateElement('category-2-title', mapped[1].name);
            this.updateElement('category-2-desc', mapped[1].description);
            this.updateElement('category-2-cta-text', lang === 'en' ? 'View Products' : 'Ürünleri Gör');

            this.updateElement('category-3-title', mapped[2].name);
            this.updateElement('category-3-desc', mapped[2].description);
            this.updateElement('category-3-cta-text', lang === 'en' ? 'View Products' : 'Ürünleri Gör');

            this.updateElement('category-4-title', mapped[3].name);
            this.updateElement('category-4-desc', mapped[3].description);
            this.updateElement('category-4-cta-text', lang === 'en' ? 'View Products' : 'Ürünleri Gör');
        }

        // Testimonials section
        this.updateElement('testimonials-title', t.testimonials.title);
        this.updateElement('testimonials-subtitle', t.testimonials.subtitle);
        this.updateTestimonials(t.testimonials.items);
        this.updateElement('trust-quality-title', t.testimonials.trust.quality.title);
        this.updateElement('trust-quality-desc', t.testimonials.trust.quality.desc);
        this.updateElement('trust-support-title', t.testimonials.trust.support.title);
        this.updateElement('trust-support-desc', t.testimonials.trust.support.desc);
        this.updateElement('trust-delivery-title', t.testimonials.trust.delivery.title);
        this.updateElement('trust-delivery-desc', t.testimonials.trust.delivery.desc);
        this.updateElement('trust-satisfaction-title', t.testimonials.trust.satisfaction.title);
        this.updateElement('trust-satisfaction-desc', t.testimonials.trust.satisfaction.desc);

        // Contact section
        this.updateElement('contact-title', t.locations.title);
        this.updateElement('contact-subtitle', t.locations.subtitle);
        this.updateElement('contact-address-title', lang === 'tr' ? 'Adres' : 'Address');
        this.updateElement('contact-address-text', t.locations.address);
        this.updateElement('contact-phone-title', lang === 'tr' ? 'Telefon' : 'Phone');
        this.updateElement('contact-phone-text', t.locations.phone);
        this.updateElement('contact-email-title', lang === 'tr' ? 'E-posta' : 'Email');
        this.updateElement('contact-email-text', t.locations.email);

        // Contact form
        this.updateElement('contact-form-title', t.locations.form.title);
        this.updateElement('contact-form-name-label', t.locations.form.nameLabel);
        this.updateElement('contact-form-email-label', t.locations.form.emailLabel);
        this.updateElement('contact-form-subject-label', t.locations.form.subjectLabel);
        this.updateElement('contact-form-message-label', t.locations.form.messageLabel);
        this.updateElement('contact-form-submit', t.locations.form.submit);

        // Form placeholders
        this.updatePlaceholder('contact-form-name-placeholder', t.locations.form.namePlaceholder);
        this.updatePlaceholder('contact-form-email-placeholder', t.locations.form.emailPlaceholder);
        this.updatePlaceholder('contact-form-subject-placeholder', t.locations.form.subjectPlaceholder);
        this.updatePlaceholder('contact-form-message-placeholder', t.locations.form.messagePlaceholder);

        // Global presence
        this.updateElement('global-presence-title', t.locations.global.title);
        this.updateElement('global-countries', t.locations.global.countries);
        this.updateElement('global-distributors', t.locations.global.distributors);
        this.updateElement('global-support', t.locations.global.support);
        this.updateElement('global-satisfaction', t.locations.global.satisfaction);

        // Footer
        this.updateElement('footer-company-name', t.companyName);
        this.updateElement('footer-company-tagline', t.tagline);
        this.updateElement('footer-description', t.footer.description);
        this.updateElement('footer-pages-title', t.footer.pagesTitle);
        this.updateElement('footer-contact-title', t.footer.contactTitle);
        this.updateElement('footer-address', t.locations.address);
        this.updateElement('footer-phone', t.locations.phone);
        this.updateElement('footer-email', t.locations.email);
        this.updateElement('footer-copyright', `© 2024 ${t.companyName}. ${t.footer.copyright}`);

        // Footer navigation
        this.updateFooterNavigation(t.navigation);
        this.updateFooterLinks(t.footer.links);
    }

    updateElement(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    updatePlaceholder(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = text;
        }
    }

    updateNavigation(navItems) {
        const navLinks = document.getElementById('nav-links');
        const mobileNavLinks = document.getElementById('mobile-nav-links');
        
        if (navLinks) {
            navLinks.innerHTML = navItems.map(item => 
                `<li><a href="${item.href}" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">${item.name}</a></li>`
            ).join('');
        }

        if (mobileNavLinks) {
            mobileNavLinks.innerHTML = navItems.map(item => 
                `<li><a href="${item.href}" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200">${item.name}</a></li>`
            ).join('');
        }
    }

    updateStatistics(stats) {
        stats.forEach((stat, index) => {
            const valueElement = document.querySelector(`[data-stat="${stat.value}"]`);
            const labelElement = document.querySelector(`[data-stat-label="${index === 0 ? 'production' : index === 1 ? 'satisfaction' : index === 2 ? 'markets' : 'years'}"]`);
            
            if (valueElement) valueElement.textContent = stat.value;
            if (labelElement) labelElement.textContent = stat.label;
        });
    }

    updateTeamMembers(members) {
        const teamContainer = document.getElementById('team-members');
        if (teamContainer) {
            teamContainer.innerHTML = members.map(member => `
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                    <!-- Avatar -->
                    <div class="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                        <div class="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="text-white text-3xl font-bold">
                                ${member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        
                        <!-- Decorative elements -->
                        <div class="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div class="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"></div>
                    </div>

                    <!-- Content -->
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${member.name}</h3>
                        <p class="text-blue-600 font-medium mb-3">${member.role}</p>
                        <p class="text-gray-600 text-sm leading-relaxed">${member.bio}</p>

                        <!-- Social Links -->
                        <div class="flex space-x-3 mt-4">
                            <div class="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group">
                                <svg class="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </div>
                            <div class="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group">
                                <svg class="w-4 h-4 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </div>
                            <div class="w-8 h-8 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group">
                                <svg class="w-4 h-4 text-gray-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateServices(categories) {
        const servicesContainer = document.getElementById('services-grid');
        if (servicesContainer) {
            servicesContainer.innerHTML = categories.map((category, index) => {
                const gradients = [
                    'from-blue-600 to-blue-800',
                    'from-green-600 to-green-800',
                    'from-purple-600 to-purple-800',
                    'from-amber-600 to-amber-800'
                ];
                const icons = [
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>',
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>',
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>',
                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>'
                ];
                
                return `
                    <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div class="w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center mb-6">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                ${icons[index]}
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">${category.name}</h3>
                        <p class="text-gray-600 leading-relaxed">${category.description}</p>
                        <div class="mt-6">
                            <a href="products.html" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                                <span>${this.currentLanguage === 'tr' ? 'Ürünleri Gör' : 'View Products'}</span>
                                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    updateTestimonials(testimonials) {
        const testimonialsContainer = document.getElementById('testimonials-container');
        if (testimonialsContainer) {
            testimonialsContainer.innerHTML = testimonials.map(testimonial => `
                <div class="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-6">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                    </div>
                    
                    <blockquote class="text-lg text-gray-700 leading-relaxed italic mb-6">
                        "${testimonial.quote}"
                    </blockquote>
                    
                    <div class="flex items-center pt-6 border-t border-blue-200">
                        <div class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-4">
                            <span class="text-white text-lg font-bold">
                                ${testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        
                        <div>
                            <p class="font-bold text-gray-900 text-lg">${testimonial.name}</p>
                            <p class="text-blue-600 font-medium">${testimonial.company}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    updateFooterNavigation(navItems) {
        const footerNavLinks = document.getElementById('footer-nav-links');
        if (footerNavLinks) {
            footerNavLinks.innerHTML = navItems.map(item => 
                `<a href="${item.href}" class="block text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">${item.name}</a>`
            ).join('');
        }
    }

    updateFooterLinks(links) {
        const footerLinks = document.getElementById('footer-links');
        if (footerLinks) {
            footerLinks.innerHTML = links.map(link => 
                `<a href="${link.href}" class="text-gray-400 hover:text-white text-sm transition-colors duration-300">${link.name}</a>`
            ).join('');
        }
    }

    setupSmoothScrolling() {
        // Tüm anchor linkler için smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Navbar yüksekliği için offset
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupMobileMenu() {
        // Mobil menü linkleri tıklandığında menüyü kapat
        document.querySelectorAll('#mobile-nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }

    setupNavbarScroll() {
        let lastScrollTop = 0;
        const navbar = document.getElementById('navigation');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Aşağı scroll - navbar'ı gizle
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Yukarı scroll - navbar'ı göster
                navbar.style.transform = 'translateY(0)';
            }
            
            // Scroll pozisyonuna göre navbar arka planını değiştir
            if (scrollTop > 50) {
                navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.remove('shadow-lg');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Basit form validasyonu
        if (!data.name || !data.email || !data.message) {
            alert(this.currentLanguage === 'tr' ? 'Lütfen tüm alanları doldurun.' : 'Please fill in all fields.');
            return;
        }
        
        // Email validasyonu
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert(this.currentLanguage === 'tr' ? 'Geçerli bir e-posta adresi girin.' : 'Please enter a valid email address.');
            return;
        }
        
        // Başarı mesajı
        alert(this.currentLanguage === 'tr' ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!');
        
        // Formu temizle
        e.target.reset();
    }
}

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
    new HazerWebsite();
});

// Scroll animasyonları için Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Sayfa yüklendiğinde animasyon elementlerini gözlemle
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('section > div');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
