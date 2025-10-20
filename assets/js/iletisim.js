// İletişim Sayfası - Çok Dilli İçerik

class ContactPage {
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
        this.setupFormHandling();
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

        // Sayfa başlığı
        document.title = isEnglish ? 'Contact - Hazer Construction Chemicals' : 'İletişim - Hazer Yapı Kimyasalları';

        // Hero Section
        this.updateElement('contact-hero-title', isEnglish ? 'Contact' : 'İletişim');
        this.updateElement('contact-hero-subtitle', isEnglish ? 
            'Get in touch with us for product information and technical support' : 
            'Ürün bilgileri ve teknik destek için bizimle iletişime geçin'
        );

        // Info title and text
        this.updateElement('contact-info-title', isEnglish ? 'Contact Information' : 'İletişim Bilgileri');
        this.updateElement('contact-info-text', isEnglish ? 
            'With over 30 years of experience, we serve in the adhesive industry. You can reach us for your questions and requests.' : 
            '30 yılı aşkın tecrübemizle yapıştırıcı sektöründe hizmet veriyoruz. Sorularınız ve talepleriniz için bize ulaşabilirsiniz.'
        );

        // Contact Info Cards
        this.updateElement('contact-sales-title', isEnglish ? 'Sales Department' : 'Satış Departmanı');
        this.updateElement('contact-sales-desc', isEnglish ? 
            'For product inquiries and orders' : 
            'Ürün sorgulamaları ve siparişler için'
        );

        this.updateElement('contact-support-title', isEnglish ? 'Technical Support' : 'Teknik Destek');
        this.updateElement('contact-support-desc', isEnglish ? 
            'For technical assistance and product guidance' : 
            'Teknik yardım ve ürün rehberliği için'
        );

        this.updateElement('contact-office-title', isEnglish ? 'Head Office' : 'Merkez Ofis');
        this.updateElement('contact-office-address', isEnglish ? 
            'Yeniyalı Mah. Milli Egemenlik Cad. Yarımca San. Sitesi No: 105, Körfez/Kocaeli 41800' : 
            'Yeniyalı Mah. Milli Egemenlik Cad. Yarımca San. Sitesi No: 105, Körfez/Kocaeli 41800'
        );

        // Contact Form
        this.updateElement('form-title', isEnglish ? 'Send a Message' : 'Mesaj Gönderin');
        this.updateElement('form-subtitle', isEnglish ? 
            'Fill out the form below to reach us. We will get back to you as soon as possible.' : 
            'Bize ulaşmak için aşağıdaki formu doldurun. En kısa sürede size geri dönüş yapacağız.'
        );

        // Form labels
        this.updateElement('form-firstname-label', isEnglish ? 'First Name *' : 'Ad *');
        this.updateElement('form-lastname-label', isEnglish ? 'Last Name *' : 'Soyad *');
        this.updateElement('form-email-label', isEnglish ? 'Email *' : 'E-posta *');
        this.updateElement('form-phone-label', isEnglish ? 'Phone' : 'Telefon');
        this.updateElement('form-company-label', isEnglish ? 'Company' : 'Şirket');
        this.updateElement('form-subject-label', isEnglish ? 'Subject *' : 'Konu *');
        this.updateElement('form-message-label', isEnglish ? 'Message *' : 'Mesaj *');

        this.updateElement('form-name-label', isEnglish ? 'Full Name' : 'Ad Soyad');
        this.updateElement('form-email-label', isEnglish ? 'Email Address' : 'E-posta Adresi');
        this.updateElement('form-phone-label', isEnglish ? 'Phone Number' : 'Telefon Numarası');
        this.updateElement('form-subject-label', isEnglish ? 'Subject' : 'Konu');
        this.updateElement('form-message-label', isEnglish ? 'Message' : 'Mesajınız');
        this.updateElement('form-submit-btn', isEnglish ? 'Send Message' : 'Mesaj Gönder');

        // Form placeholders
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const company = document.getElementById('company');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        if (firstName) firstName.placeholder = isEnglish ? 'Enter your first name' : 'Adınızı girin';
        if (lastName) lastName.placeholder = isEnglish ? 'Enter your last name' : 'Soyadınızı girin';
        if (email) email.placeholder = isEnglish ? 'your.email@example.com' : 'ornek@email.com';
        if (phone) phone.placeholder = isEnglish ? '+90 5XX XXX XX XX' : '+90 5XX XXX XX XX';
        if (company) company.placeholder = isEnglish ? 'Enter your company name' : 'Şirket adınızı girin';
        if (subject) {
            // Subject first option text
            const placeholderOption = document.getElementById('form-subject-placeholder');
            if (placeholderOption) placeholderOption.textContent = isEnglish ? 'Select a subject' : 'Konu seçin';
            // Option texts
            const options = subject.options;
            if (options && options.length >= 6) {
                options[1].text = isEnglish ? 'Product Information' : 'Ürün Bilgisi';
                options[2].text = isEnglish ? 'Technical Support' : 'Teknik Destek';
                options[3].text = isEnglish ? 'Sales & Pricing' : 'Satış ve Fiyatlandırma';
                options[4].text = isEnglish ? 'Partnership' : 'İş Ortaklığı';
                options[5].text = isEnglish ? 'Complaint' : 'Şikayet';
                options[6].text = isEnglish ? 'Other' : 'Diğer';
            }
        }
        if (message) message.placeholder = isEnglish ? 'Write your message in detail...' : 'Mesajınızı detaylı olarak yazın...';

        // Buttons and consent
        this.updateElement('form-privacy-label', isEnglish ? 
            'I accept the processing of my data under the Personal Data Protection Law. *' : 
            'Kişisel Verilerin Korunması Kanunu kapsamında verilerimin işlenmesini kabul ediyorum. *');
        this.updateElement('form-submit-btn-text', isEnglish ? 'Send Message' : 'Mesaj Gönder');

        // Phone/Email labels in contact info boxes
        this.updateElement('contact-phone-title', isEnglish ? 'Phone' : 'Telefon');
        this.updateElement('phone-sales-label', isEnglish ? 'Sales:' : 'Satış:');
        this.updateElement('phone-tech-label', isEnglish ? 'Technical Support:' : 'Teknik Destek:');
        this.updateElement('contact-email-title', isEnglish ? 'Email' : 'E-posta');
        this.updateElement('email-general-label', isEnglish ? 'General:' : 'Genel:');
        this.updateElement('email-sales-label', isEnglish ? 'Sales:' : 'Satış:');
        this.updateElement('email-technical-label', isEnglish ? 'Technical:' : 'Teknik:');

        // Map Section
        this.updateElement('map-title', isEnglish ? 'Our Location' : 'Konumumuz');
        this.updateElement('map-subtitle', isEnglish ? 
            'Visit us at our head office in Körfez, Kocaeli' : 
            'Körfez, Kocaeli\'deki merkez ofisimizi ziyaret edin'
        );

        // Working Hours
        this.updateElement('hours-title', isEnglish ? 'Working Hours' : 'Çalışma Saatleri');
        this.updateElement('hours-weekdays', isEnglish ? 'Monday - Friday' : 'Pazartesi - Cuma');
        this.updateElement('hours-weekdays-time', isEnglish ? '08:00 - 18:00' : '08:00 - 18:00');
        this.updateElement('hours-saturday', isEnglish ? 'Saturday' : 'Cumartesi');
        this.updateElement('hours-saturday-time', isEnglish ? '09:00 - 13:00' : '09:00 - 13:00');
        this.updateElement('hours-sunday', isEnglish ? 'Sunday' : 'Pazar');
        this.updateElement('hours-sunday-time', isEnglish ? 'Closed' : 'Kapalı');

        // Social Media
        this.updateElement('social-title', isEnglish ? 'Follow Us' : 'Bizi Takip Edin');
        this.updateElement('social-subtitle', isEnglish ? 
            'Stay updated with our latest products and news' : 
            'En son ürünlerimiz ve haberlerimizden haberdar olun'
        );

        // Footer
        this.updateElement('footer-copyright', isEnglish ? 
            '© 2024 Hazer Construction Chemicals. All rights reserved.' :
            '© 2024 Hazer Yapı Kimyasalları. Tüm hakları saklıdır.'
        );
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

    setupFormHandling() {
        const form = document.getElementById('contact-form');
        if (form) {
            // Set FormSubmit redirect dynamically
            const nextField = document.getElementById('form-next');
            if (nextField) {
                try {
                    const url = new URL(window.location.href);
                    url.searchParams.set('sent', '1');
                    nextField.value = url.toString();
                } catch (_) {}
            }

            // Allow normal submit to FormSubmit. No preventDefault here.
        }

        // Show success message if redirected back with ?sent=1 and then clean URL
        try {
            const params = new URLSearchParams(window.location.search);
            if (params.get('sent') === '1') {
                const isEnglish = this.currentLanguage === 'en';
                const successMessage = isEnglish ? 
                    'Your message has been sent successfully! We will get back to you as soon as possible.' :
                    'Mesajınız başarıyla gönderildi! En kısa sürede size geri dönüş yapacağız.';

                // Create a temporary toast/banner
                const banner = document.createElement('div');
                banner.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[60] bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg';
                banner.textContent = successMessage;
                document.body.appendChild(banner);

                setTimeout(() => {
                    banner.remove();
                }, 4000);

                // Clean URL
                params.delete('sent');
                const cleanUrl = window.location.pathname + (params.toString() ? ('?' + params.toString()) : '') + window.location.hash;
                window.history.replaceState({}, '', cleanUrl);
            }
        } catch (_) {}
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    new ContactPage();
});

