// Tüm çok dilli içerik (Türkçe ve İngilizce) bu dosyada tutulacaktır.

const content = {
    tr: {
        companyName: "Hazer Yapı Kimyasalları",
        tagline: "Gücüyle Birleştirir, Geleceği İnşa Eder.",
        navigation: [
            { name: "Anasayfa", href: "index.html" },
            { name: "Hakkımızda", href: "hakkimizda.html" },
            { name: "Ürünler", href: "products.html" },
            { name: "İletişim", href: "iletisim.html" },
        ],
        hero: {
            title: "Yüksek Performanslı Yapıştırıcı Çözümleri",
            subtitle: "Güvenilirlik, inovasyon ve kalite, her ürünümüzün temelini oluşturur. İnşaat ve endüstriyel projeleriniz için en iyi yapışma gücünü sunuyoruz.",
            cta: "Ürünlerimizi Keşfet",
            ctaSecondary: "Hakkımızda",
            ctaLink: "#services"
        },
        about: {
            title: "Hazer Hakkında",
            missionTitle: "Misyonumuz",
            mission: "Faaliyet gösterdiğimiz ürün gruplarında, insana, doğaya ve topluma saygılı ve sürdürülebilir yaşam için iyi olanı sunma ilkesi ile hareket etmekteyiz. Yapı sektörüne en kaliteli, en güvenilir ve çevre dostu yapıştırıcı çözümlerini sunmak. İnovatif ürünler ve destekleyici hizmetler ile müşterilerimizin beklentilerini karşılamayı hedefliyoruz.",
            expertiseTitle: "Uzmanlığımız",
            expertise: "30 yılı aşkın tecrübemizle, zemin kaplama, endüstriyel montaj için özel olarak formüle edilmiş geniş bir yapıştırıcı yelpazesi sunuyoruz. Her bir ürünümüz, en zorlu koşullarda bile üstün performans sağlamak üzere tasarlanmıştır.",
            visionTitle: "Vizyonumuz",
            vision: "Geleceğin dünyası için yaşam çözümleri sunmak bizim kimyamızda var. Dünya için daha konforlu bir geleceği bugünden tasarlarken, ürün gruplarımızla en yüksek müşteri memnuniyetini hedefleriz. Bunu başarmak için sürekli yenilikçi ürünlerle yapılamayanı yapma arzusu ile çalışıyoruz. Bilimin ve kimyanın tüm olanaklarından güç alarak pazar liderliğini hedeflemekteyiz.",
            features: {
                eco: { title: "Çevre Dostu", desc: "Sürdürülebilir formüller" },
                quality: { title: "Kalite Güvencesi", desc: "ISO sertifikalı" },
                delivery: { title: "Hızlı Teslimat", desc: "Global lojistik" },
                support: { title: "Teknik Destek", desc: "7/24 uzman desteği" }
            }
        },
        statistics: {
            title: "Rakamlarla Hazer",
            subtitle: "Güvenilir Ortağınız, Kaliteli Çözümleriniz",
            description: "Hazer olarak, sektörde edindiğimiz deneyim ve müşterilerimizin güveniyle, yapı kimyasalları alanında lider konumumuzu sürdürüyoruz. Her projede kalite ve güvenilirlik sunuyoruz.",
            items: [
                { value: "50K+", label: "Yıllık Üretim Kapasitesi (Ton)" },
                { value: "99%", label: "Müşteri Memnuniyeti" },
                { value: "15+", label: "Uluslararası Pazar" },
                { value: "30+", label: "Sektörde Yıl" }
            ]
        },
        team: {
            title: "Uzman Ekibimiz",
            subtitle: "Başarımızın arkasındaki güç: Adanmış ve deneyimli profesyonellerden oluşan ekibimiz.",
            members: [
                { name: "Ahmet Yılmaz", role: "Genel Müdür", bio: "30 yıllık sektör tecrübesiyle şirketin stratejik yönünü belirliyor." },
                { name: "Elif Kaya", role: "Ar-Ge Direktörü", bio: "Yenilikçi ve çevre dostu formüllerin geliştirilmesine liderlik ediyor." },
                { name: "Mehmet Demir", role: "Satış ve Pazarlama Müdürü", bio: "Global pazarda müşteri ilişkilerini ve satış stratejilerini yönetiyor." },
                { name: "Zeynep Öztürk", role: "Operasyon Yöneticisi", bio: "Üretim ve tedarik zinciri süreçlerinin verimliliğini sağlıyor." }
            ],
            values: {
                innovation: { title: "İnovasyon", desc: "Sürekli araştırma ve geliştirme ile sektörde öncü çözümler sunuyoruz." },
                quality: { title: "Kalite", desc: "Her üründe en yüksek kalite standartlarını koruyarak müşteri memnuniyetini sağlıyoruz." },
                teamwork: { title: "Takım Çalışması", desc: "Güçlü ekip ruhumuzla birlikte çalışarak en iyi sonuçları elde ediyoruz." }
            }
        },
        services: {
            title: "Ürün Kategorilerimiz",
            subtitle: "İhtiyacınız olan her uygulama için özel olarak geliştirilmiş yapıştırıcılar.",
            viewAllProducts: "Tüm Ürünleri Görüntüle",
            categories: [
                { name: "Endüstriyel Yapıştırıcılar", description: "Otomotiv, elektronik ve metal işleme için yüksek mukavemetli çözümler." },
                { name: "Zemin Kaplama Yapıştırıcıları", description: "PVC, LVT ve linolyum gibi zemin kaplamaları için profesyonel tutkallar." },
                { name: "Ahşap ve Parke Yapıştırıcıları", description: "Mobilya ve parke montajı için güçlü ve esnek PVA bazlı tutkallar." },
                { name: "Genel Amaçlı Tutkallar", description: "Günlük onarım ve montaj işleri için çok amaçlı yapıştırıcılar." }
            ]
        },
        testimonials: {
            title: "Müşteri Görüşleri",
            subtitle: "Müşterilerimiz Hazer kalitesini anlatıyor.",
            items: [
                { quote: "Hazer'in zemin yapıştırıcıları, projelerimizde bize zaman ve maliyet tasarrufu sağladı. Kalite gerçekten beklentilerimizin üzerinde.", name: "Ali Can", company: "Can İnşaat A.Ş." },
                { quote: "Endüstriyel tutkalları inanılmaz derecede güçlü. Üretim hattımızda verimliliği artırdı ve arıza oranını düşürdü.", name: "Deniz Akın", company: "Akın Otomotiv" },
                { quote: "Ahşap yapıştırıcıları ile mobilyalarımızda mükemmel sonuçlar alıyoruz. Kuruma sonrası şeffaflığı harika.", name: "Ece Yılmaz", company: "Yılmaz Mobilya" }
            ],
            trust: {
                quality: { title: "Kalite Garantisi", desc: "ISO sertifikalı ürünler" },
                support: { title: "Teknik Destek", desc: "Uzman ekip desteği" },
                delivery: { title: "Hızlı Teslimat", desc: "Zamanında teslim" },
                satisfaction: { title: "Müşteri Memnuniyeti", desc: "%99 memnuniyet oranı" }
            }
        },
        locations: {
            title: "Uluslararası Ağımız",
            subtitle: "Global pazarda size yakınız.",
            address: "Merkez Ofis: Kocaeli, Türkiye",
            phone: "+90 552 804 29 24",
            email: "info@hazeryapikimyasallari.com.tr",
            mapLink: "https://maps.app.goo.gl/example",
            form: {
                title: "Bizimle İletişime Geçin",
                nameLabel: "Ad Soyad",
                namePlaceholder: "Adınızı girin",
                emailLabel: "E-posta",
                emailPlaceholder: "E-posta adresinizi girin",
                subjectLabel: "Konu",
                subjectPlaceholder: "Mesaj konusu",
                messageLabel: "Mesaj",
                messagePlaceholder: "Mesajınızı yazın...",
                submit: "Mesaj Gönder"
            },
            global: {
                title: "Global Varlığımız",
                countries: "Ülke",
                distributors: "Distribütör",
                support: "Destek",
                satisfaction: "Memnuniyet"
            }
        },
        footer: {
            description: "Yapı sektörünün geleceğini, yüksek performanslı ve çevre dostu yapıştırıcı çözümlerimizle şekillendiriyoruz.",
            pagesTitle: "Sayfalar",
            contactTitle: "İletişim",
            copyright: "Tüm hakları saklıdır.",
            links: [
                { name: "Gizlilik Politikası", href: "#" },
                { name: "Kullanım Şartları", href: "#" },
                { name: "Kariyer", href: "#" }
            ]
        }
    },
    en: {
        companyName: "Hazer Construction Chemicals",
        tagline: "Bonding Strength, Building the Future.",
        navigation: [
            { name: "Home", href: "index.html#hero" },
            { name: "About", href: "hakkimizda.html" },
            { name: "Products", href: "products.html" },
            { name: "Contact", href: "iletisim.html" },
        ],
        hero: {
            title: "High-Performance Adhesive Solutions",
            subtitle: "Reliability, innovation, and quality form the foundation of every product we create. We offer the best bonding strength for your construction and industrial projects.",
            cta: "Discover Our Products",
            ctaSecondary: "About Us",
            ctaLink: "#services"
        },
        about: {
            title: "About Hazer",
            missionTitle: "Our Mission",
            mission: "Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions. Reliability, innovation, and quality form the foundation of every product we create.",
            expertiseTitle: "Our Expertise",
            expertise: "With over 30 years of experience, we offer a wide range of adhesives specially formulated for floor coverings, woodworking, and industrial assembly. Each of our products is designed to deliver superior performance even in the most demanding conditions.",
            visionTitle: "Our Vision",
            vision: "To be a leading, sustainable, and innovative adhesive solutions brand in the global market.",
            features: {
                eco: { title: "Eco-Friendly", desc: "Sustainable formulas" },
                quality: { title: "Quality Assurance", desc: "ISO certified" },
                delivery: { title: "Fast Delivery", desc: "Global logistics" },
                support: { title: "Technical Support", desc: "24/7 expert support" }
            }
        },
        statistics: {
            title: "Hazer by the Numbers",
            subtitle: "Your Trusted Partner, Quality Solutions",
            description: "As Hazer, we maintain our leading position in construction chemicals with our industry experience and our customers' trust. We offer quality and reliability in every project.",
            items: [
                { value: "50K+", label: "Annual Production Capacity (Tons)" },
                { value: "99%", label: "Customer Satisfaction" },
                { value: "15+", label: "International Markets" },
                { value: "30+", label: "Years in Industry" }
            ]
        },
        team: {
            title: "Our Expert Team",
            subtitle: "The power behind our success: Our dedicated and experienced team of professionals.",
            members: [
                { name: "Ahmet Yilmaz", role: "General Manager", bio: "Determines the company's strategic direction with 30 years of industry experience." },
                { name: "Elif Kaya", role: "R&D Director", bio: "Leads the development of innovative and eco-friendly formulas." },
                { name: "Mehmet Demir", role: "Sales and Marketing Manager", bio: "Manages customer relations and sales strategies in the global market." },
                { name: "Zeynep Ozturk", role: "Operations Manager", bio: "Ensures the efficiency of production and supply chain processes." }
            ],
            values: {
                innovation: { title: "Innovation", desc: "We offer pioneering solutions in the industry through continuous research and development." },
                quality: { title: "Quality", desc: "We ensure customer satisfaction by maintaining the highest quality standards in every product." },
                teamwork: { title: "Teamwork", desc: "We achieve the best results by working together with our strong team spirit." }
            }
        },
        services: {
            title: "Our Product Categories",
            subtitle: "Adhesives specially developed for every application you need.",
            viewAllProducts: "View All Products",
            categories: [
                { name: "Industrial Adhesives", description: "High-strength solutions for automotive, electronics, and metalworking." },
                { name: "Floor Covering Adhesives", description: "Professional glues for floor coverings like PVC, LVT, and linoleum." },
                { name: "Wood and Parquet Adhesives", description: "Strong and flexible PVA-based glues for furniture and parquet installation." },
                { name: "General Purpose Glues", description: "Multi-purpose adhesives for daily repair and assembly jobs." }
            ]
        },
        testimonials: {
            title: "Customer Testimonials",
            subtitle: "Our customers talk about Hazer quality.",
            items: [
                { quote: "Hazer's floor adhesives saved us time and cost in our projects. The quality truly exceeded our expectations.", name: "Ali Can", company: "Can Construction Inc." },
                { quote: "Their industrial glues are incredibly strong. It increased efficiency on our production line and reduced failure rates.", name: "Deniz Akin", company: "Akin Automotive" },
                { quote: "We get excellent results with their wood adhesives in our furniture. The transparency after drying is fantastic.", name: "Ece Yilmaz", company: "Yilmaz Furniture" }
            ],
            trust: {
                quality: { title: "Quality Guarantee", desc: "ISO certified products" },
                support: { title: "Technical Support", desc: "Expert team support" },
                delivery: { title: "Fast Delivery", desc: "On-time delivery" },
                satisfaction: { title: "Customer Satisfaction", desc: "99% satisfaction rate" }
            }
        },
        locations: {
            title: "Our International Network",
            subtitle: "We are close to you in the global market.",
            address: "Head Office: Kocaeli, Turkey",
            phone: "+90 552 804 29 24",
            email: "info@hazeryapikimyasallari.com.tr",
            mapLink: "https://maps.app.goo.gl/example",
            form: {
                title: "Get in Touch",
                nameLabel: "Full Name",
                namePlaceholder: "Enter your name",
                emailLabel: "Email",
                emailPlaceholder: "Enter your email",
                subjectLabel: "Subject",
                subjectPlaceholder: "Message subject",
                messageLabel: "Message",
                messagePlaceholder: "Write your message...",
                submit: "Send Message"
            },
            global: {
                title: "Our Global Presence",
                countries: "Countries",
                distributors: "Distributors",
                support: "Support",
                satisfaction: "Satisfaction"
            }
        },
        footer: {
            description: "Shaping the future of the construction industry with our high-performance and eco-friendly adhesive solutions.",
            pagesTitle: "Pages",
            contactTitle: "Contact",
            copyright: "All rights reserved.",
            links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Use", href: "#" },
                { name: "Careers", href: "#" }
            ]
        }
    }
};

// Başlangıç dili: URL (?lang=tr|en) -> tarayıcı dili -> TR
function getInitialLanguage() {
    try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'tr' || urlLang === 'en') return urlLang;
        const browserLang = (navigator.language || navigator.userLanguage || 'tr').toLowerCase();
        return browserLang.startsWith('tr') ? 'tr' : 'en';
    } catch (_) {
        return 'en';
    }
}

const initialLanguage = getInitialLanguage();
