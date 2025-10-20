// Hazer Yapı Kimyasalları - Ürün Veritabanı
// Bu dosyadan kolayca ürün ekleyebilir/düzenleyebilirsiniz

// Kategori tanımları (TR/EN)
const categories = [
    { id: 'all', name: 'Tümü', nameEn: 'All' },
    { id: 'Endüstriyel', name: 'Endüstriyel', nameEn: 'Industrial' },
    { id: 'Ahşap', name: 'Ahşap', nameEn: 'Wood' },
    { id: 'Genel Amaçlı', name: 'Genel Amaçlı', nameEn: 'General Purpose' }
];

const productsData = [
    {
        id: 'hz110-yapiştirici',
        name: 'Endüstriyel PVC Zemin Kaplama Yapıştırıcısı (HZ110)',
        nameEn: 'Industrial PVC Floor Covering Adhesive (HZ110)',
        category: 'Endüstriyel',
        shortDescription: 'Profesyonel kullanım için yüksek performanslı endüstriyel yapıştırıcı',
        shortDescriptionEn: 'High-performance industrial adhesive for professional use',
        fullDescription: 'İç mekanlarda PVC, linolyum ve tekstil tabanlı zemin kaplama malzemelerinin yapıştırılması için geliştirilmiş, solvent içermeyen, akrilik dispersiyon esaslı, yüksek performanslı zemin kaplama yapıştırıcısıdır.',
        fullDescriptionEn: 'A high-performance acrylic dispersion-based floor covering adhesive developed for bonding PVC, linoleum and textile-backed floor coverings indoors. Solvent-free.',
        image: './assets/images/products/HZ110.png',
        features: [
            'Yüksek yapışma mukavemeti',
            'Çok amaçlı kullanım',
            'Hızlı kuruma süresi',
            'Su ve kimyasal direnci',
            'Uzun raf ömrü'
        ],
        featuresEn: [
            'High bonding strength',
            'Multi-purpose use',
            'Fast drying time',
            'Water and chemical resistance',
            'Long shelf life'
        ],
        applications: ['Rulo Pvc Zemin Kaplamaları (Hastaneler, Okullar, Spor salonları, Kreşler, Fabrikalar, Ofisler)'],
        applicationsEn: ['Roll PVC Floor Coverings (Hospitals, Schools, Gyms, Kindergartens, Factories, Offices)'],
        technicalSpecs: {
            'Renk': 'Gri',
            'Yoğunluk': '1,35 ± 0,05 Kg/L',
            'İçerik': 'Akrilik dispersiyon esaslı',
            'Sarfiyat': '300-350 g/m² (A3 tipi tarak ile)',
            'Açıkta Bekleme Süresi': '15-30 dakika arası',
            'Tam Sertleşme': '24 saat',
            'Çalışma Süresi': '3-4 Saat',
            'Uygulama Sıcaklığı': '+15°C ile +25°C arasında',
            'Sıcaklık Dayanımı': '+70°C (Zeminden ısıtmalı sistemlerde)',
            'Raf Ömrü': 'Üretim tarihinden itibaren 12 ay',
            'Ambalaj': "20 KG'lık plastik kovalar. 1 Palet = 36 kova = 720 KG"
        },
        technicalSpecsEn: {
            'Color': 'Grey',
            'Density': '1.35 ± 0.05 Kg/L',
            'Content': 'Acrylic dispersion based',
            'Consumption': '300-350 g/m² (with A3 type trowel)',
            'Open Time': '15-30 minutes',
            'Full Cure': '24 hours',
            'Working Time': '3-4 hours',
            'Application Temperature': '+15°C to +25°C',
            'Temperature Resistance': '+70°C (on underfloor heating systems)',
            'Shelf Life': '12 months from production date',
            'Packaging': "20 KG plastic buckets. 1 Pallet = 36 buckets = 720 KG"
        },
        advantages: [
            'Solvent içermez, çevre dostu ve sağlığa zararsızdır',
            'Yüksek ilk yapışma gücü sağlar',
            'Zemin ısıtma sistemlerine uygundur (+70°C\'ye kadar)',
            'Kolay ve pratik uygulanır',
            'Mükemmel yaşlanma direnci ve uzun ömürlüdür',
            'Su bazlı olduğu için temizlik kolaydır',
            'Elastik yapısı sayesinde zemin hareketlerine dayanıklıdır',
            'Geniş açık bekleme süresi ile rahat çalışma imkanı'
        ],
        advantagesEn: [
            'Solvent-free, eco-friendly and harmless to health',
            'High initial tack',
            'Suitable for underfloor heating systems (up to +70°C)',
            'Easy and practical application',
            'Excellent aging resistance and long-lasting',
            'Easy to clean thanks to its water-based structure',
            'Elastic structure withstands floor movements',
            'Wide open time for comfortable work'
        ],
        storage: {
            shelfLife: '12 ay (üretim tarihinden itibaren)',
            shelfLifeEn: '12 months (from production date)',
            conditions: [
                'Serin ve kuru ortamda saklayın (+5°C ile +25°C arası)',
                'Doğrudan güneş ışığından uzak tutun',
                'Kapalı orijinal ambalajında muhafaza edin',
                'Donmaya karşı koruyun',
                'Kullanım sonrası kapağı sıkıca kapatın',
                'Çocukların erişemeyeceği yerde saklayın'
            ],
            conditionsEn: [
                'Store in a cool and dry place (+5°C to +25°C)',
                'Keep away from direct sunlight',
                'Keep in original closed packaging',
                'Protect from freezing',
                'Close the lid tightly after use',
                'Keep out of reach of children'
            ],
            warnings: [
                'Donmuş ürünü kullanmayın',
                'Raf ömrü sonrası kullanım önerilmez',
                'İlk açılıştan sonra 6 ay içinde tüketin'
            ],
            warningsEn: [
                'Do not use frozen product',
                'Use after shelf life is not recommended',
                'Consume within 6 months after first opening'
            ]
        },
        usageGuide: {
            preparation: [
                'Yüzeyleri temizleyin ve kurulayın',
                'Yağ, toz ve kir kalıntılarını tamamen giderin',
                'Gözenekli yüzeyler için hafif zımparalama yapın',
                'Her iki yüzeyin de kuru olduğundan emin olun'
            ],
            application: [
                'Ürünü kullanmadan önce homojen bir kıvama gelene kadar iyice karıştırınız.',
                'Yapıştırıcıyı, zemin ve kaplama malzemesine uygun olan A2 veya B1 tipi dişli tarak ile yüzeye eşit bir şekilde yayınız.',
                'Yapıştırıcıyı sürdükten sonra, yüzeyde yapışkanlığın (aderansın) oluşması için yaklaşık 15-30 dakika kadar bekleyiniz.',
                'Zemin kaplama malzemesini yapıştırıcı sürülmüş alana dikkatlice seriniz ve hava kabarcığı kalmaması için mantar rulo ile bastırınız.',
                'Kaplamaların birleşim yerlerini ve ek noktalarını iyice bastırarak yapışmasını sağlayınız.'
            ],
            safety: [
                'İyi havalandırılmış ortamda kullanın',
                'Göz ve deri ile temasından kaçının',
                'Çocukların erişemeyeceği yerde saklayın',
                'Koruyucu eldiven ve gözlük kullanın',
                'Yutmayın - yutulursa derhal doktora başvurun'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Clean and dry the surfaces',
                'Completely remove oil, dust and dirt residues',
                'Lightly sand porous surfaces',
                'Ensure both surfaces are dry'
            ],
            application: [
                'Stir the product thoroughly until it reaches a homogeneous consistency before use.',
                'Spread the adhesive evenly with A2 or B1 notched trowel suitable for the substrate and covering.',
                'Allow approximately 15-30 minutes open time for tack to develop.',
                'Carefully lay the floor covering and press with a cork roller to remove air bubbles.',
                'Press joints and seams firmly to ensure adhesion.'
            ],
            safety: [
                'Use in a well-ventilated area',
                'Avoid contact with eyes and skin',
                'Keep out of reach of children',
                'Use protective gloves and goggles',
                'Do not ingest - seek medical advice if swallowed'
            ]
        },
        documents: [
            {
                name: 'Güvenlik Bilgi Formu (MSDS) - TR',
                nameEn: 'Safety Data Sheet (MSDS) - TR',
                icon: 'fas fa-shield-alt',
                url: 'https://hazeryapikimyasallari.com.tr/wp-content/uploads/2025/05/HZ-110-PVC-TUTKALI-SDS.pdf',
                download: true
            },
            {
                name: 'Güvenlik Bilgi Formu (MSDS) - EN',
                nameEn: 'Safety Data Sheet (MSDS) - EN',
                icon: 'fas fa-shield-alt',
                url: 'https://hazeryapikimyasallari.com.tr/wp-content/uploads/2025/05/HZ-110-PVC-GLUE-SDS.pdf',
                download: true
            },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
    {
        id: 'hz120-yapiştirici',
        name: 'LVT(Luxury Vinyl Tile) Solventsiz Akrilik Kopolimer esaslı Zemin Kaplama Yapıştırıcısı (HZ120)',
        nameEn: 'LVT (Luxury Vinyl Tile) Solvent-free Acrylic Copolymer Floor Adhesive (HZ120)',
        category: 'Endüstriyel',
        shortDescription: 'Yüksek performanslı çok amaçlı endüstriyel yapıştırıcı',
        shortDescriptionEn: 'High-performance multi-purpose industrial adhesive',
        fullDescription: 'LVT tutkalı (yapıştırıcısı), Lüks Vinil Karo (LVT) ve benzeri esnek zemin kaplama malzemelerini (PVC, linolyum, mantar vb.) alt zemine kalıcı ve sağlam bir şekilde sabitlemek için özel olarak geliştirilmiş, yüksek performanslı bir yapıştırıcıdır.',
        fullDescriptionEn: 'Specially developed high-performance adhesive for permanently fixing Luxury Vinyl Tile (LVT) and other flexible floor coverings (PVC, linoleum, cork etc.) to the substrate.',
        image: './assets/images/products/HZ120.png',
        features: [
            'Yüksek yapışma mukavemeti',
            'Çok amaçlı kullanım',
            'Su ve hava koşullarına dayanıklı',
            'Kolay uygulama',
            'Uzun ömürlü bağlantı'
        ],
        featuresEn: [
            'High bonding strength',
            'Multi-purpose use',
            'Resistant to water and weather conditions',
            'Easy application',
            'Long-lasting bond'
        ],
        applications: ['Pvc Karo ve Lvt (Luxury Vinyl Tile)--> Sağlık Kuruluşları, Ofisler, Fabrikalar, Mağazalar, Oteller, Eğitim Kurumları '],
        applicationsEn: ['PVC Tiles and LVT (Luxury Vinyl Tile)--> Healthcare Facilities, Offices, Factories, Stores, Hotels, Educational Institutions'],
        technicalSpecs: {
            'Renk': 'Krem/Bej',
            'İçerik': 'Polimer bazlı',
            'Sarfiyat': '300-400 g/m² (A3 tipi tarak ile)',
            'Açıkta Bekleme Süresi': '10-20 dakika',
            'Çalışma Süresi': '3-4 Saat',
            'İlk Tutma Süresi': '30-45 dakika',
            'Tam Sertleşme': '24-48 saat',
            'Uygulama Sıcaklığı': '+5°C ile +30°C arasında',
            'Sıcaklık Dayanımı': '+70°C (Zeminden ısıtmalı sistemlerde)',
            'Raf Ömrü': 'Üretim tarihinden itibaren 12 ay',
            'Ambalaj': "20 KG'lık plastik kovalar. 1 Palet = 36 kova = 720 KG"
        },
        technicalSpecsEn: {
            'Color': 'Cream/Beige',
            'Content': 'Polymer based',
            'Consumption': '300-400 g/m² (with A3 type trowel)',
            'Open Time': '10-20 minutes',
            'Working Time': '3-4 hours',
            'Initial Tack Time': '30-45 minutes',
            'Full Cure': '24-48 hours',
            'Application Temperature': '+5°C to +30°C',
            'Temperature Resistance': '+70°C (underfloor heating systems)',
            'Shelf Life': '12 months from production date',
            'Packaging': '20 KG plastic buckets. 1 Pallet = 36 buckets = 720 KG'
        },
        advantages: [
            'LVT, PVC ve linolyum için özel formülasyon',
            'Yüksek yapışma mukavemeti ve dayanıklılık',
            'Zemin ısıtma sistemleri ile uyumlu (+70°C)',
            'Solventsiz ve çevre dostu formül',
            'Kolay uygulama ve temizlik',
            'Mükemmel yaşlanma direnci',
            'Elastik yapı ile zemin hareketlerine uyum',
            'Geniş çalışma süresi (3-4 saat)'
        ],
        advantagesEn: [
            'Special formulation for LVT, PVC and linoleum',
            'High bonding strength and durability',
            'Compatible with underfloor heating systems (+70°C)',
            'Solvent-free and eco-friendly formula',
            'Easy application and cleaning',
            'Excellent aging resistance',
            'Elastic structure adapts to floor movements',
            'Wide working time (3-4 hours)'
        ],
        storage: {
            shelfLife: '12 ay (üretim tarihinden itibaren)',
            shelfLifeEn: '12 months (from production date)',
            conditions: [
                'Serin ve kuru ortamda depolayın (+5°C ile +30°C)',
                'Kapalı orijinal ambalajında saklayın',
                'Doğrudan güneş ışığından ve ısı kaynaklarından uzak tutun',
                'Havalandırılmış depoda muhafaza edin',
                'Donmaya karşı koruyun',
                'Nem oranı düşük ortamda saklayın'
            ],
            conditionsEn: [
                'Store in a cool and dry place (+5°C to +30°C)',
                'Keep in original sealed packaging',
                'Keep away from direct sunlight and heat sources',
                'Store in a ventilated warehouse',
                'Protect from freezing',
                'Store in a low humidity environment'
            ],
            warnings: [
                'Açılmış ürünleri hava almayacak şekilde kapatın',
                'Raf ömrü sonunda ürün performansı düşebilir'
            ],
            warningsEn: [
                'Seal opened products airtight',
                'Product performance may decrease after shelf life'
            ]
        },
        usageGuide: {
            preparation: [
                'Yapıştırılacak yüzeylerin temiz, kuru ve yağsız olduğundan emin olun',
                'Gevşek parçaları ve tozları temizleyin',
                'Gözenekli yüzeylerde daha iyi yapışma için hafif pürüzlendirme yapın',
                'Her iki yüzeyin de uygulama sıcaklığında olmasını sağlayın'
            ],
            application: [
                'Ürünü kullanmadan önce iyice karıştırınız',
                'Yapıştırıcıyı, uygun şekilde her iki yüzeye de eşit olarak uygulayın',
                '10-20 dakika kadar açıkta bekleyerek yapışkanlığın oluşmasını sağlayın',
                'Yüzeyleri hizalayın ve 30-45 dakika boyunca basınç altında tutun',
                'Tam mukavemet için 24-48 saat bekleyin'
            ],
            safety: [
                'İyi havalandırılmış ortamda kullanın',
                'Göz ve deri ile temasından kaçının',
                'Çocukların erişemeyeceği yerde saklayın',
                'Koruyucu eldiven kullanın',
                'Yutmayın - yutulursa derhal doktora başvurun',
                'Kullanım sonrası kapağı sıkıca kapatın'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Ensure bonding surfaces are clean, dry and free of grease',
                'Remove loose parts and dust',
                'Lightly roughen porous surfaces for better adhesion',
                'Make sure both surfaces are at application temperature'
            ],
            application: [
                'Mix well before use',
                'Apply adhesive evenly to both surfaces',
                'Allow 10-20 minutes open time for tack to develop',
                'Align surfaces and keep under pressure for 30-45 minutes',
                'Wait 24-48 hours for full strength'
            ],
            safety: [
                'Use in a well-ventilated environment',
                'Avoid contact with eyes and skin',
                'Keep out of reach of children',
                'Use protective gloves',
                'Do not ingest - seek medical advice if swallowed',
                'Close the cap tightly after use'
            ]
        },
        documents: [
            { name: 'Güvenlik Bilgi Formu (MSDS)', nameEn: 'Safety Data Sheet (MSDS)', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
        {
        id: 'hz130-yapiştirici',
        name: 'PVC Duvar Kaplama Yapıştırıcısı - Vinil Kaplama Dispersiyon Yapıştırıcısı (HZ130)',
        nameEn: 'PVC Wall Covering Adhesive - Vinyl Coating Dispersion Adhesive (HZ130)',
        category: 'Endüstriyel',
        shortDescription: 'Duvar Vinil Kaplaması İçin özel üretilmiş yüksek mukavemetli yapıştırıcı',
        shortDescriptionEn: 'High-strength adhesive specially produced for wall vinyl coverings',
        fullDescription: 'Duvar vinil kaplama yapıştırıcısı (veya PVC duvar kaplama yapıştırıcısı), vinil (polivinil klorür veya PVC) esaslı duvar kaplama malzemelerinin duvar yüzeyine sağlam ve kalıcı bir şekilde yapıştırılması için özel olarak formüle edilmiş bir yapıştırıcı türüdür.',
        fullDescriptionEn: 'A specially formulated adhesive for firmly and permanently bonding vinyl (PVC) wall covering materials to wall surfaces.',
        image: './assets/images/products/HZ130.jpg',
        features: [
            'Çok amaçlı kullanım',
            'Yüksek yapışma mukavemeti',
            'Nem ve su direnci',
            'Kolay uygulama',
            'Çevre dostu formül',
            'Uzun ömürlü bağlantı'
        ],
        featuresEn: [
            'Multi-purpose use',
            'High bonding strength',
            'Moisture and water resistance',
            'Easy application',
            'Eco-friendly formula',
            'Long-lasting bond'
        ],
        applications: ['Pvc Paneller ve Vinil Duvar Kaplamaları (Sağlık Kuruluşları, Eğitim Kurumları, Fabrikalar, Ofisler, Restoran ve Kafeler)'],
        applicationsEn: ['PVC Panels and Vinyl Wall Coverings (Healthcare Facilities, Educational Institutions, Factories, Offices, Restaurants and Cafes)'],
        technicalSpecs: {
            'Renk': 'Beyaz/Krem',
            'İçerik': 'Akrilik dispersiyon esaslı',
            'Sarfiyat': '250-400 g/m²',
            'Açıkta Bekleme Süresi': '10-45 dakika',
            'Tam Sertleşme': '72 saat',
            'Çalışma Süresi': '240 dakika',
            'Uygulama Sıcaklığı': '+10°C ile +30°C arasında',
            'Sıcaklık Dayanımı': '+70°C',
            'Raf Ömrü': 'Üretim tarihinden itibaren 12 ay',
            'Ambalaj': "15 kg , 10 kg , 5 kg , 3 kg (Plastik Kovalar ile)",
        },
        technicalSpecsEn: {
            'Color': 'White/Cream',
            'Content': 'Acrylic dispersion based',
            'Consumption': '250-400 g/m²',
            'Open Time': '10-45 minutes',
            'Full Cure': '72 hours',
            'Working Time': '240 minutes',
            'Application Temperature': '+10°C to +30°C',
            'Temperature Resistance': '+70°C',
            'Shelf Life': '12 months from production date',
            'Packaging': '15 kg, 10 kg, 5 kg, 3 kg (Plastic buckets)'
        },
        advantages: [
            'Solvent içermez, çevre dostu ve sağlığa zararsızdır',
            'Yüksek nem direnci sağlar',
            'Kolay ve pratik uygulanır',
            'Su bazlı olduğu için temizlik kolaydır',
            'Elastik yapısı sayesinde zemin hareketlerine dayanıklıdır',
            'Geniş açık bekleme süresi ile rahat çalışma imkanı',
            'Koku yapmaz, kullanıcı dostu'
        ],
        storage: {
            shelfLife: '12 ay (üretim tarihinden itibaren)',
            shelfLifeEn: '12 months (from production date)',
            conditions: [
                'Serin ve kuru ortamda saklayın (+5°C ile +30°C arası)',
                'Doğrudan güneş ışığından uzak tutun',
                'Kapalı orijinal ambalajında muhafaza edin',
                'Donmaya karşı koruyun',
                'Kullanım sonrası kapağı sıkıca kapatın',
                'Çocukların erişemeyeceği yerde saklayın',
                'İyi havalandırılmış ortamda depolayın'
            ],
            warnings: [
                'Donmuş ürünü kullanmayın',
                'Raf ömrü sonrası kullanım önerilmez',
                'İlk açılıştan sonra 6 ay içinde tüketin',
                'Açılmış ürünü hava almayacak şekilde kapatın'
            ]
        },
        usageGuide: {
            preparation: [
                'Yüzeyin temiz, kuru, düz ve taşıyıcı olduğundan emin olun',
                'Yağ, toz, kir ve gevşek parçaları tamamen giderin',
                'Gözenekli veya emici yüzeylerde astar uygulayın',
                'Taban zeminin nem oranını kontrol edin',
                'Uygulama öncesi oda sıcaklığını ayarlayın (+10°C - +30°C)'
            ],
            application: [
                'Ürünü kullanmadan önce homojen bir kıvama gelene kadar iyice karıştırınız',
                'Yapıştırıcıyı, zemin ve kaplama malzemesine uygun olan B1 veya A2 tipi dişli tarak ile yüzeye eşit bir şekilde yayınız',
                'Yapıştırıcıyı sürdükten sonra, yüzeyde yapışkanlığın oluşması için yaklaşık 10-20 dakika kadar bekleyiniz',
                'Parmak testi ile yapışkanlığı kontrol edebilirsiniz (yapışkan olmalı ama ele bulaşmamalı)',
                'Hava kabarcığı kalmaması için rulo veya benzeri bir aletle ortadan kenarlara doğru bastırarak yüzeye tam temasını sağlayınız',
                'Birleşim yerlerini ve kenarları özellikle iyice bastırın'
            ],
            safety: [
                'İyi havalandırılmış ortamda kullanın',
                'Göz ve deri ile temasından kaçının',
                'Çocukların erişemeyeceği yerde saklayın',
                'Koruyucu eldiven kullanın',
                'Yutmayın - yutulursa derhal doktora başvurun',
                'Kullanım sırasında yemek yemeyin ve içmeyin'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Ensure the surface is clean, dry, level and load‑bearing',
                'Completely remove oil, dust, dirt and loose particles',
                'Prime porous or absorbent substrates',
                'Check the substrate moisture level',
                'Set the ambient temperature to +10°C – +30°C before application'
            ],
            application: [
                'Mix thoroughly until a homogeneous consistency before use',
                'Spread evenly with a B1 or A2 notched trowel suitable for the substrate and covering',
                'Allow about 10–20 minutes open time for tack to develop',
                'Verify tack with the finger test (tacky but not transferring to finger)',
                'Press from the center to the edges with a roller to ensure full contact and remove air',
                'Pay extra attention to joints and edges; press firmly'
            ],
            safety: [
                'Use in a well‑ventilated environment',
                'Avoid contact with eyes and skin',
                "Keep out of reach of children",
                'Use protective gloves',
                'Do not ingest – seek medical advice if swallowed',
                'Do not eat or drink during application'
            ]
        },
        documents: [
            { name: 'Güvenlik Bilgi Formu (MSDS) - TR', nameEn: 'Safety Data Sheet (MSDS) - TR', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'Güvenlik Bilgi Formu (MSDS) - EN', nameEn: 'Safety Data Sheet (MSDS) - EN', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
    {
        id: 'hz220-yapiştirici',
        name: 'Hazer Yapı Kimyasalları Karo Halı Tutkalı (HZ220)',
        nameEn: 'Hazer Construction Chemicals Carpet Tile Adhesive (HZ220)',
        category: 'Endüstriyel',
        shortDescription: 'Tekstil ve PVC tabanlı karo halı ve karo pvc yapıştırıcısı',
        shortDescriptionEn: 'Adhesive for textile and PVC-backed carpet tiles and PVC tiles',
        fullDescription: 'Karo halı yapıştırıcısı, karo halıların (genellikle bitüm, PVC veya keçe tabanlı) zemin üzerinde kaymasını önlemek ve gerektiğinde kolayca sökülüp tekrar yapıştırılabilmesini sağlamak üzere formüle edilmiş, basınca duyarlı ve genellikle şeffaf kuruyan akrilik esaslı bir tutkaldır.',
        fullDescriptionEn: 'A pressure-sensitive, typically clear-drying acrylic-based adhesive formulated to prevent carpet tiles (bitumen, PVC or felt-backed) from slipping and to allow easy removal and re-application when needed.',
        image: './assets/images/products/HZ220.jpg',
        features: [
            'Çok amaçlı kullanım',
            'Yüksek yapışma mukavemeti',
            'Nem ve su direnci',
            'Kolay uygulama',
            'Çevre dostu formül',
            'Uzun ömürlü bağlantı',
            'Sabitleme (Kaymayı önleme)',
            'Sökülebilirlik (Yeniden yapıştırılabilirlik)'
        ],
        featuresEn: [
            'Multi-purpose use',
            'High bonding strength',
            'Moisture and water resistance',
            'Easy application',
            'Eco-friendly formula',
            'Long-lasting bond',
            'Stabilization (anti-slip)',
            'Removability (repositionable)'
        ],
        applications: ['Karo Pvc Ve Karo Halı (Ofis Binaları, Kurumsal Merkezler, Ticari Alan ve Mağazalar, Oteller, Eğitim Kurumları, Konferans Salonları, Sinema Ve Tiyatro Salonları)'],
        applicationsEn: ['Carpet PVC and Carpet PVC Tiles (Offices, Corporate Centers, Commercial Areas and Stores, Hotels, Educational Institutions, Conference Rooms, Cinemas and Theaters)'],
        technicalSpecs: {
            'Renk': 'Açık Mavi',
            'İçerik': 'Akrilik dispersiyon esaslı',
            'Sarfiyat': '50-150 g/m²',
            'Çalışma Süresi': '48 saat',
            'Uygulama Sıcaklığı': 'Zemin sıcaklığına göre en az +15°C',
            'Sıcaklık Dayanımı': '+70°C',
            'Raf Ömrü': 'Üretim tarihinden itibaren 12 ay',
            'Ambalaj': " 10 kg (Plastik bidonlar ile)",
        },
        technicalSpecsEn: {
            'Color': 'Light Blue',
            'Content': 'Acrylic dispersion based',
            'Consumption': '50-150 g/m²',
            'Working Time': '48 hours',
            'Application Temperature': 'Minimum +15°C depending on floor temperature',
            'Temperature Resistance': '+70°C',
            'Shelf Life': '12 months from production date',
            'Packaging': '10 kg (Plastic canisters)'
        },
        advantages: [
            'Solvent içermez, çevre dostu ve sağlığa zararsızdır',
            'Yüksek nem direnci sağlar',
            'Kolay ve pratik uygulanır',
            'Su bazlı olduğu için temizlik kolaydır',
            'Elastik yapısı sayesinde zemin hareketlerine dayanıklıdır',
            'Geniş açık bekleme süresi ile rahat çalışma imkanı',
            'Koku yapmaz, kullanıcı dostu',
            'Sökülebilirlik (Yeniden yapıştırılabilirlik)'
        ],
        advantagesEn: [
            'Solvent-free, eco-friendly and harmless to health',
            'Provides high moisture resistance',
            'Easy and practical to apply',
            'Easy cleaning thanks to water-based structure',
            'Elastic structure withstands floor movements',
            'Wide open time for comfortable work',
            'Odorless and user-friendly',
            'Removable (repositionable)'
        ],
        storage: {
            shelfLife: '12 ay (üretim tarihinden itibaren)',
            shelfLifeEn: '12 months (from production date)',
            conditions: [
                'Serin ve kuru ortamda saklayın (+5°C ile +30°C arası)',
                'Doğrudan güneş ışığından uzak tutun',
                'Kapalı orijinal ambalajında muhafaza edin',
                'Donmaya karşı koruyun',
                'Kullanım sonrası kapağı sıkıca kapatın',
                'Çocukların erişemeyeceği yerde saklayın',
                'İyi havalandırılmış ortamda depolayın'
            ],
            warnings: [
                'Donmuş ürünü kullanmayın',
                'Raf ömrü sonrası kullanım önerilmez',
                'İlk açılıştan sonra 6 ay içinde tüketin',
                'Açılmış ürünü hava almayacak şekilde kapatın'
            ]
        },
        usageGuide: {
            preparation: [
                'Yüzeyin temiz, kuru, düz ve taşıyıcı olduğundan emin olun',
                'Yağ, toz, kir ve gevşek parçaları tamamen giderin',
                'Gözenekli veya emici yüzeylerde astar uygulayın',
                'Taban zeminin nem oranını kontrol edin',
                'Uygulama öncesi oda sıcaklığını ayarlayın (+10°C - +30°C)'
            ],
            application: [
                'Uygulama şekli olarak, rulo İle uygulanır.',
                'Alt zemin kontrolü olarak, Zemin temiz, kuru, sağlam, düzgün ve yağdan arındırılmış olmalıdır.Gevşek parçacıklar, toz, kir ve eski yapıştırıcı kalıntıları tamamen temizlenmelidir.',
                'Zemin düzgünlüğü olarak, Zemindeki çatlaklar, çukurlar ve seviye farklılıkları uygun tesviye şapları veya tamir harçları ile mutlaka giderilmelidir. Pürüzsüz bir yüzey, iyi bir yapışma ve kusursuz bir görünüm için şarttır.',
                'Nem Kontrolü olarak, zeminin nem oranı ölçülmeli ve üreticinin belirlediği limitlerin altında olmalıdır. Gerekirse uygun nem bariyeri astarları uygulanmalıdır.',
                'Astar uygulaması (gerekliyse) olarak, Çok emici veya tozlu zeminlerde yapıştırıcının zemine daha iyi tutunması ve sarfiyatı azaltmak için uygun bir astar (primer) kullanılabilir.',
                'Ortam koşulları olarak, Uygulama esnasında ve sonrasında ortam ve zemin sıcaklığı genellikle +15^\circ C ile +25^\circ C arasında tutulmalıdır. Bu, yapıştırıcının doğru kuruması/kürlenmesi için önemlidir.'
            ],
            safety: [
                'İyi havalandırılmış ortamda kullanın',
                'Göz ve deri ile temasından kaçının',
                'Çocukların erişemeyeceği yerde saklayın',
                'Koruyucu eldiven kullanın',
                'Yutmayın - yutulursa derhal doktora başvurun',
                'Kullanım sırasında yemek yemeyin ve içmeyin'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Ensure the surface is clean, dry, flat and sound',
                'Remove all loose particles, dust, dirt and old adhesive residues',
                'Prime porous/dusty substrates when needed',
                'Measure substrate moisture and ensure it is below limits',
                'Keep ambient and floor temperature within +15°C to +25°C during/after application'
            ],
            application: [
                'Apply with a roller',
                'Make sure the subfloor is clean, dry, solid, level and degreased',
                'Repair cracks, holes and level differences with suitable repair/screed materials',
                'If necessary, apply a suitable moisture barrier primer',
                'On very absorbent or dusty surfaces, use a primer to improve adhesion and reduce consumption',
                'Maintain ambient and floor temperature between +15°C and +25°C for proper drying/cure'
            ],
            safety: [
                'Use in a well‑ventilated area',
                'Avoid contact with eyes and skin',
                'Keep out of reach of children',
                'Use protective gloves',
                'Do not ingest – seek medical advice if swallowed',
                'Do not eat or drink during use'
            ]
        },
        documents: [
            { name: 'Güvenlik Bilgi Formu (MSDS) - TR', nameEn: 'Safety Data Sheet (MSDS) - TR', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'Güvenlik Bilgi Formu (MSDS) - EN', nameEn: 'Safety Data Sheet (MSDS) - EN', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
    {
        id: 'hz330-yapiştirici',
        name: 'BRÜT BETON ASTARI (PARLAK YÜZEY) (HZ330)',
        nameEn: 'Exposed Concrete Primer (Glossy Surface) (HZ330)',
        category: 'Endüstriyel',
        shortDescription: 'Prüzsüz (parlak) ve emici olmayan polimer dispersiyon esaslı zemin astarı',
        shortDescriptionEn: 'Floor primer based on polymer dispersion for smooth (glossy) and non-absorbent surfaces',
        fullDescription: 'İnşaat ve yapı kimyasalları sektöründe, özellikle kalıp yağı izleri, düzgün ve çok düşük emiciliğe sahip veya aşırı emici beton yüzeyler ile uygulanacak son kat kaplama (sıva, alçı, şap, seramik yapıştırıcısı vb.) arasında güvenilir bir yapışma (aderans) katmanı oluşturmak için kullanılan sentetik reçine dispersiyonu bazlı bir ön hazırlık malzemesidir.',
        fullDescriptionEn: 'A synthetic resin dispersion-based preparation material used to create a reliable adhesion layer between smooth, very low absorbent or highly absorbent concrete surfaces (especially with mold oil marks) and the subsequent finishing coats (plaster, screed, ceramic adhesive, etc.).',
        image: './assets/images/products/HZ330.jpg',
        features: [
            'Yüksek aderans (yapışma gücü) sağlar',
            'Pürüzlülük sağlar.',
            'Emicililiği dengeler.',
            'Toz bağlama ve gevşek partikülleri bağlar.',
        ],
        featuresEn: [
            'Provides high adhesion (bonding strength)',
            'Creates surface roughness',
            'Balances absorbency',
            'Binds dust and loose particles'
        ],
        applications: [],
        applicationsEn: [],
        technicalSpecs: {
            'Alt Yüzey Uygulama Sıcaklığı': '> +5°C',
            'Kuruma Süresi': '40-120 dakika',
            'Görünüm': 'Pembe',
            'Sarfiyat': '0.150-0.300 kg/m² (Yüzey emiciliğine bağlı olarak)',
            'Raf Ömrü': '12 ay (Kapalı orijinal ambalajda)',
            'Uygulama Sıcaklığı': '+5°C / +35°C',
            'Ambalaj': '13 kg (Plastik kovalar ile)',
        },
        technicalSpecsEn: {
            'Substrate Application Temperature': '> +5°C',
            'Drying Time': '40-120 minutes',
            'Appearance': 'Pink',
            'Consumption': '0.150-0.300 kg/m² (depending on surface absorbency)',
            'Shelf Life': '12 months (in sealed original packaging)',
            'Application Temperature': '+5°C / +35°C',
            'Packaging': '13 kg (Plastic buckets)'
        },
        advantages: [
            'Yüksek aderans (yapışma gücü) sağlar.',
            'Uygulamayı kolaylaştırır.',
            'Dayanıklılığı artırır.',
            'Su ve nem geçirimsizliği sağlar.',
            'Homojen koruma sağlar.',
            'Tozumayı engeller.',
            'Maliyet ve zaman tasarrufu sağlar.'
        ],
        advantagesEn: [
            'Provides high adhesion (bonding strength)',
            'Facilitates application',
            'Increases durability',
            'Provides water and moisture impermeability',
            'Ensures homogeneous protection',
            'Prevents dusting',
            'Saves cost and time'
        ],
        storage: {
            shelfLife: '12 Ay',
            shelfLifeEn: '12 months',
            conditions: [
                'Serin ve kuru ortamda saklayın (+10°C ile +25°C)',
                'Orijinal kapaklı kaplarında muhafaza edin',
                'Nemden ve ısıdan uzak tutun',
                'İyi havalandırılmış depoda saklayın'
            ],
            conditionsEn: [
                'Store in a cool and dry place (+10°C to +25°C)',
                'Keep in original lidded containers',
                'Keep away from moisture and heat',
                'Store in a well-ventilated warehouse'
            ],
            warnings: [
                'Donmuş ürünü çözdürmeyin, atın',
                'Kıvamlı ise karıştırarak kullanın',
                'Açık ürünü 6 ay içinde tüketin'
            ],
            warningsEn: [
                'Do not thaw frozen product; discard',
                'If viscous, use after mixing',
                'Consume opened product within 6 months'
            ]
        },
        usageGuide: {
            preparation: [
                'Yüzeyleri iyice temizleyin ve yağdan arındırın',
                'Zeminin kuru olmasına dikkat edilmelidir.',
                'Gevşek parça ve katmanları olmamasına dikkat edin.'
            ],
            application: [
                'Rulo ya da fırça ile uygulama yapılır.',
                'Homojen karışım için 2-3 dakika iyice karıştırın',
                '%30 su ilavesi yapılır.',
                
            ],
            safety: [
                'Çocuklar için güvenli (toksik değil)',
                'Yutmaktan kaçının',
                'Serin ve kuru yerde saklayın',
                'Donmaya karşı koruyun'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Thoroughly clean and degrease the surfaces',
                'Ensure the substrate is dry',
                'Make sure there are no loose parts or layers'
            ],
            application: [
                'Apply with a roller or brush',
                'Mix well for 2–3 minutes to obtain a homogeneous mixture',
                'Dilute with 30% water as required by the surface condition'
            ],
            safety: [
                'Safe for children (non‑toxic)',
                'Avoid ingestion',
                'Store in a cool and dry place',
                'Protect from freezing'
            ]
        },
        documents: [
            { name: 'Güvenlik Bilgi Formu (MSDS)', nameEn: 'Safety Data Sheet (MSDS)', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
        {
        id: 'hz340-yapiştirici',
        name: 'Hazer Yapı Kimyasalları Premier Zemin Astarı (HZ340)',
        nameEn: 'Hazer Construction Chemicals Premier Floor Primer (HZ340)',
        category: 'Endüstriyel',
        shortDescription: 'Emici yüzeyler için tozuma önleyici ve aderans artırıcı zemin astarı ',
        shortDescriptionEn: 'Dust-preventing and adhesion-enhancing floor primer for absorbent surfaces',
        fullDescription: 'Zeminin emiciliğini dengeleyerek tozumayı önleyen ve üzerine gelecek boya, şap veya kaplamanın yüzeye daha güçlü yapışmasını (aderansını) sağlayan ilk katman malzemesidir. Kaplama performansını ve dayanımını artırır.',
        fullDescriptionEn: 'The first layer material that prevents dusting by balancing the absorbency of the floor and ensures stronger adhesion of the subsequent paint, screed, or coating to the surface. Improves performance and durability.',
        image: './assets/images/products/HZ340.jpg',
        features: [
            'Yüksek aderans (yapışma gücü) sağlar',
            'Kolay temizleme (ıslak bez ile)',
            'Tozumanın engellenmesini sağlar.',
            'Emiciliği dengeler.',
            'Yüzeyi güçlendirir.',
            'Nem bariyeri (opsiyonel) sağlar.',
            'Kuruma süresi kısadır.'
        ],
        featuresEn: [
            'Provides high adhesion (bonding strength)',
            'Easy to clean (with a wet cloth)',
            'Prevents dusting',
            'Balances absorbency',
            'Strengthens the surface',
            'Provides optional moisture barrier',
            'Short drying time'
        ],
        applications: [],
        applicationsEn: [],
        technicalSpecs: {
            'Alt Yüzey Uygulama Sıcaklığı': '> +5°C',
            'Kuruma Süresi': '40 dakika (yüzeye bağlı olarak)',
            'Tam Sertleşme': '6-8 saat',
            'Sarfiyat': '100-150 g/m²',
            'Raf Ömrü': '12 ay',
            'Renk': 'Beyaz (kuruduğunda şeffaf)',
            'Uygulama Sıcaklığı': '+5°C / +30°C',
            'Ambalaj': '10 kg - 20 kg (Plastik bidonlar ile)',
        },
        technicalSpecsEn: {
            'Substrate Application Temperature': '> +5°C',
            'Drying Time': '40 minutes (depending on surface)',
            'Full Cure': '6-8 hours',
            'Consumption': '100-150 g/m²',
            'Shelf Life': '12 months',
            'Color': 'White (transparent when dry)',
            'Application Temperature': '+5°C / +30°C',
            'Packaging': '10 kg - 20 kg (Plastic cans)'
        },
        advantages: [
            'Yüksek aderans (yapışma gücü) sağlar.',
            'Uygulamayı kolaylaştırır.',
            'Dayanıklılığı artırır.',
            'Su ve nem geçirimsizliği sağlar.',
            'Homojen koruma sağlar.',
            'Tozumayı engeller.',
            'Maliyet ve zaman tasarrufu sağlar.'
        ],
        advantagesEn: [
            'Provides high adhesion (bonding strength)',
            'Facilitates application',
            'Increases durability',
            'Provides water and moisture impermeability',
            'Ensures homogeneous protection',
            'Prevents dusting',
            'Saves cost and time'
        ],
        storage: {
            shelfLife: '12 ay (kapalı ambalajda)',
            shelfLifeEn: '12 months (sealed packaging)',
            conditions: [
                'Oda sıcaklığında saklayın (+5°C ile +25°C)',
                'Donmaya karşı koruyun - donmuş ürün kullanılamaz',
            ],
            conditionsEn: [
                'Store at room temperature (+5°C to +25°C)',
                'Protect from freezing - frozen product cannot be used',
            ],
            warnings: [
                'Kıvamlı ise karıştırarak kullanın',
                'Açık ürünü 6 ay içinde tüketin'
            ],
            warningsEn: [
                'If viscous, use after mixing',
                'Consume opened product within 6 months'
            ]
        },
        usageGuide: {
            preparation: [
                'Uygulama yapılacak yüzeylerin temiz, kuru, toz ve yağdan arındılmış olmalıdır.',
                'Gevşek beton veya harç parçacığı kalmadığına emin olun.',
                'Zemin üzerindeki çatlaklar, oyuklar ve boşlukları uygun tamir harcı ile tamir edin.',
            ],
            application: [
                'HZ340 premier astar 1/2 (astar / su) oranında yüzeyin durumuna göre inceltilebilir.',
                'Karıştırılan malzemeyi hemen uygulamaya başlayın. Astarı, zeminin küçük bir bölümüne şeritler halinde dökün.',
                'Zeminin emiciliğine göre rulo fırça veya kauçuk çekpas yardımıyla zemine yedirin.',
                'Malzemenin zeminin gözeneklerine iyi nüfuz etmesi (emprenye olması) için özellikle rulo ile iyice yedirilmesine dikkat edin.',
                'Astarı çok kalın uygulamaktan kaçının. Amaç, zeminde ince bir film tabakası oluşturmaktır; göletlenme (havuzlanma) olmamalıdır',
            ],
            safety: [
                'Çocuklar için güvenli (toksik değil)',
                'Yutmaktan kaçının',
                'Serin ve kuru yerde saklayın',
                'Donmaya karşı koruyun'
            ]
        },
        usageGuideEn: {
            preparation: [
                'Ensure the application surface is clean, dry, dust‑ and grease‑free',
                'Make sure no loose concrete or mortar particles remain',
                'Repair cracks, cavities and voids with a suitable repair mortar'
            ],
            application: [
                'HZ340 primer can be diluted 1/2 (primer/water) depending on surface condition',
                'Start application immediately after mixing; pour the primer in strips on a small area',
                'Work the material into the surface using a roller brush or rubber squeegee depending on absorbency',
                'Ensure good penetration into pores by thoroughly rolling the material',
                'Avoid very thick application; target a thin film without puddling'
            ],
            safety: [
                'Safe for children (non‑toxic)',
                'Avoid ingestion',
                'Store in a cool and dry place',
                'Protect from freezing'
            ]
        },
        documents: [
            { name: 'Güvenlik Bilgi Formu (MSDS)', nameEn: 'Safety Data Sheet (MSDS)', icon: 'fas fa-shield-alt', url: '#' },
            { name: 'ISO 14001-2015 Sertifikası', nameEn: 'ISO 14001-2015 Certificate', icon: 'fas fa-certificate', url: '#' },
            { name: 'CE Belgesi', nameEn: 'CE Certificate', icon: 'fas fa-award', url: '#' }
        ]
    },
];

// Kategori filtreleme fonksiyonu
function getProductsByCategory(categoryId) {
    if (categoryId === 'all' || categoryId === 'Tümü' || !categoryId) {
        return productsData;
    }
    return productsData.filter(product => product.category === categoryId);
}

// Ürün arama fonksiyonu
function searchProducts(query) {
    if (!query) return productsData;
    
    const searchTerm = query.toLowerCase();
    return productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.shortDescription.toLowerCase().includes(searchTerm) ||
        product.fullDescription.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
        product.applications.some(app => app.toLowerCase().includes(searchTerm))
    );
}

// ID'ye göre ürün bulma fonksiyonu
function getProductById(id) {
    return productsData.find(product => product.id === id);
}

// Kategorileri alma fonksiyonu
function getCategories() {
    const categories = ['Tümü'];
    const uniqueCategories = [...new Set(productsData.map(product => product.category))];
    return categories.concat(uniqueCategories);
}

// Öne çıkan ürünleri alma fonksiyonu (ilk 3 ürün)
function getFeaturedProducts() {
    return productsData.slice(0, 3);
}

// Benzer ürünleri alma fonksiyonu
function getSimilarProducts(currentProductId, category, limit = 3) {
    return productsData
        .filter(product => product.id !== currentProductId && product.category === category)
        .slice(0, limit);
}

// İlgili ürünleri alma fonksiyonu (kategoriye göre filtreleme)
function getRelatedProducts(currentProductId, limit = 3) {
    // Önce mevcut ürünü bul
    const currentProduct = getProductById(currentProductId);

    // Eğer ürün bulunamazsa boş array döndür
    if (!currentProduct) {
        return [];
    }

    // Aynı kategorideki diğer ürünleri filtrele (mevcut ürün hariç)
    const relatedProducts = productsData.filter(product =>
        product.id !== currentProductId &&
        product.category === currentProduct.category
    );

    // Belirtilen limit kadar ürün döndür
    return relatedProducts.slice(0, limit);
}
