// Hakkımızda Sayfası - Çok Dilli İçerik

class AboutPage {
    constructor() {
        this.currentLanguage = this.getInitialLang();
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
        this.setupEventListeners();
        this.updatePageContent(this.currentLanguage);
    }

    setupEventListeners() {
        // Dil değiştirici butonları
        const langTr = document.getElementById('lang-tr');
        const langEn = document.getElementById('lang-en');
        const mobileLangTr = document.getElementById('mobile-lang-tr');
        const mobileLangEn = document.getElementById('mobile-lang-en');

        if (langTr) langTr.addEventListener('click', () => this.changeLanguage('tr'));
        if (langEn) langEn.addEventListener('click', () => this.changeLanguage('en'));
        if (mobileLangTr) mobileLangTr.addEventListener('click', () => this.changeLanguage('tr'));
        if (mobileLangEn) mobileLangEn.addEventListener('click', () => this.changeLanguage('en'));

        // Mobil menü
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        this.updateLanguageButtons(lang);
        this.updatePageContent(lang);
        
        // HTML lang attribute'unu güncelle
        document.documentElement.lang = lang;
        try { localStorage.setItem('lang', lang); } catch (_) {}
    }

    updateLanguageButtons(lang) {
        const trBtn = document.getElementById('lang-tr');
        const enBtn = document.getElementById('lang-en');
        const mobileTrBtn = document.getElementById('mobile-lang-tr');
        const mobileEnBtn = document.getElementById('mobile-lang-en');

        if (lang === 'tr') {
            if (trBtn) trBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            if (enBtn) enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            if (mobileTrBtn) mobileTrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            if (mobileEnBtn) mobileEnBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
        } else {
            if (trBtn) trBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            if (enBtn) enBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
            if (mobileTrBtn) mobileTrBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900';
            if (mobileEnBtn) mobileEnBtn.className = 'px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 bg-blue-600 text-white';
        }
    }

    updatePageContent(lang) {
        const isEnglish = lang === 'en';
        const t = (typeof content !== 'undefined') ? content[lang] : null;

        // Sayfa başlığı
        document.title = isEnglish ? 'About Us - Hazer Construction Chemicals' : 'Hakkımızda - Hazer Yapı Kimyasalları';

        // Navbar text via shared layout if available
        if (t) {
            // Company name/tagline
            this.updateElement('company-name', t.companyName);
            this.updateElement('company-tagline', t.tagline);
        }

        // Hero Section
        this.updateElement('about-hero-title', isEnglish ? 'About Us' : 'Hakkımızda');
        this.updateElement('about-hero-subtitle', isEnglish ? 
            'Building the future of the construction industry with innovative adhesive solutions' : 
            'İnovatif yapıştırıcı çözümleriyle yapı sektörünün geleceğini inşa ediyoruz'
        );
        this.updateElement('about-company-chip', isEnglish ? 'Hazer Construction Chemicals' : 'Hazer Yapı Kimyasalları');
        this.updateElement('cta-values-btn', isEnglish ? 'Our Values' : 'Değerlerimiz');
        this.updateElement('cta-contact-btn', isEnglish ? 'Contact' : 'İletişim');

        // Story Section
        this.updateElement('story-title', isEnglish ? 'Our Story' : 'Hikayemiz');
        this.updateElement('story-text', isEnglish ? 
            'Hazer Construction Chemicals was founded with the vision of providing high-performance and eco-friendly adhesive solutions to the construction industry. With years of experience and continuous innovation, we have become a trusted partner for construction professionals.' :
            'Hazer Yapı Kimyasalları, yapı sektörüne yüksek performanslı ve çevre dostu yapıştırıcı çözümleri sunma vizyonuyla kuruldu. Yılların deneyimi ve sürekli inovasyon ile inşaat profesyonellerinin güvenilir ortağı olduk.'
        );

        // Mission Section
        this.updateElement('mission-title', isEnglish ? 'Our Mission' : 'Misyonumuz');
        this.updateElement('mission-text', isEnglish ? 
            'To provide the construction industry with the highest quality, most reliable, and environmentally friendly adhesive solutions. We aim to exceed our customers\' expectations with innovative products and excellent service.' :
            'Faaliyet gösterdiğimiz ürün gruplarında, insana, doğaya ve topluma saygılı ve sürdürülebilir yaşam için iyi olanı sunma ilkesi ile hareket etmekteyiz. Yapı sektörüne en kaliteli, en güvenilir ve çevre dostu yapıştırıcı çözümlerini sunmak. İnovatif ürünler ve destekleyici hizmetler ile müşterilerimizin beklentilerini karşılamayı hedefliyoruz.'
        );

        // Vision Section
        this.updateElement('vision-title', isEnglish ? 'Our Vision' : 'Vizyonumuz');
        this.updateElement('vision-text', isEnglish ? 
            'To be the leading adhesive solutions provider in the construction industry, recognized globally for innovation, quality, and sustainability. We strive to shape the future of construction with our cutting-edge products.' :
            'Geleceğin dünyası için yaşam çözümleri sunmak bizim kimyamızda var.Dünya için daha konforlu bir geleceği bugünden tasarlarken, ürün gruplarımızla en yüksek müşteri memnuniyetini hedefleriz. Bunu başarmak için sürekli yenilikçi ürünlerle yapılamayanı yapma arzusu ile çalışıyoruz. Bilimin ve kimyanın tüm olanaklarından güç alarak pazar liderliğini hedeflemekteyiz.'
        );

        // Values Section
        this.updateElement('values-title', isEnglish ? 'Our Values' : 'Değerlerimiz');
        
        this.updateElement('value-quality-title', isEnglish ? 'Quality' : 'Kalite');
        this.updateElement('value-quality-text', isEnglish ? 
            'We never compromise on quality. Every product undergoes rigorous testing.' :
            'Kaliteden asla ödün vermeyiz. Her ürün titiz testlerden geçer.'
        );

        this.updateElement('value-innovation-title', isEnglish ? 'Innovation' : 'İnovasyon');
        this.updateElement('value-innovation-text', isEnglish ? 
            'We continuously invest in R&D to develop cutting-edge solutions.' :
            'Son teknoloji çözümler geliştirmek için sürekli Ar-Ge\'ye yatırım yapıyoruz.'
        );

        this.updateElement('value-sustainability-title', isEnglish ? 'Sustainability' : 'Sürdürülebilirlik');
        this.updateElement('value-sustainability-text', isEnglish ? 
            'Eco-friendly products that protect our planet for future generations.' :
            'Gelecek nesiller için gezegenimizi koruyan çevre dostu ürünler.'
        );

        this.updateElement('value-trust-title', isEnglish ? 'Trust' : 'Güven');
        this.updateElement('value-trust-text', isEnglish ? 
            'Building long-term relationships based on reliability and transparency.' :
            'Güvenilirlik ve şeffaflığa dayalı uzun vadeli ilişkiler kuruyoruz.'
        );

        // Stats Section
        this.updateElement('stats-title', isEnglish ? 'Our Achievements' : 'Başarılarımız');
        
        this.updateElement('stat-years-label', isEnglish ? 'Years of Experience' : 'Yıllık Deneyim');
        this.updateElement('stat-products-label', isEnglish ? 'Products' : 'Ürün');
        this.updateElement('stat-customers-label', isEnglish ? 'Happy Customers' : 'Mutlu Müşteri');
        this.updateElement('stat-countries-label', isEnglish ? 'Countries' : 'Ülke');

        // Team Section
        this.updateElement('team-title', isEnglish ? 'Our Expert Team' : 'Uzman Ekibimiz');
        this.updateElement('team-subtitle', isEnglish ? 
            'Professionals dedicated to providing you with the best solutions' :
            'Size en iyi çözümleri sunmaya adanmış profesyoneller'
        );

        // CTA Section
        this.updateElement('cta-title', isEnglish ? 'Ready to Work Together?' : 'Birlikte Çalışmaya Hazır mısınız?');
        this.updateElement('cta-subtitle', isEnglish ? 
            'Contact us to learn more about our products and services' :
            'Ürünlerimiz ve hizmetlerimiz hakkında daha fazla bilgi almak için bizimle iletişime geçin'
        );
        this.updateElement('cta-button', isEnglish ? 'Contact Us' : 'İletişime Geçin');

        // Footer
        if (t) {
            this.updateElement('footer-company-name', t.companyName);
            this.updateElement('footer-company-tagline', t.tagline);
            this.updateElement('footer-description', t.footer?.description || '');
            this.updateElement('footer-pages-title', t.footer?.pagesTitle || (isEnglish ? 'Pages' : 'Sayfalar'));
            this.updateElement('footer-contact-title', t.footer?.contactTitle || (isEnglish ? 'Contact' : 'İletişim'));
            this.updateElement('footer-address', t.locations?.address || '');
            this.updateElement('footer-phone', t.locations?.phone || '');
            this.updateElement('footer-email', t.locations?.email || '');
            this.updateElement('footer-copyright', `© 2024 ${t.companyName}. ${t.footer?.copyright || (isEnglish ? 'All rights reserved.' : 'Tüm hakları saklıdır.')}`);
        } else {
            this.updateElement('footer-copyright', isEnglish ? 
                '© 2024 Hazer Construction Chemicals. All rights reserved.' :
                '© 2024 Hazer Yapı Kimyasalları. Tüm hakları saklıdır.'
            );
        }

        // Timeline/History section
        this.updateElement('history-title', isEnglish ? 'Our Journey' : 'Yolculuğumuz');
        this.updateElement('history-2015', isEnglish ? 'Establishment and launch of the first product line.' : 'Kuruluş ve ilk ürün gamının pazara sunulması.');
        this.updateElement('history-2010', isEnglish ? 'Opening of the R&D center and international certifications.' : 'Ar-Ge merkezinin açılışı ve uluslararası sertifikasyonlar.');
        this.updateElement('history-2024', isEnglish ? 'Exports to 15+ countries and an expanded product family.' : '15+ ülkeye ihracat ve genişletilmiş ürün ailesi.');
    }

    updateElement(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});

