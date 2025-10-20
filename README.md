# Hazer Yapı Kimyasalları - Statik Web Sitesi

Bu proje, Hazer Yapı Kimyasalları şirketi için geliştirilmiş modern ve responsive bir web sitesidir. Site, Node.js veya React bağımlılığı olmadan, saf HTML, CSS ve JavaScript kullanılarak oluşturulmuştur.

## 🚀 Özellikler

- **Çok Dilli Destek**: Türkçe ve İngilizce tam destek
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Modern UI/UX**: Premium görünüm ve smooth animasyonlar
- **SEO Optimizasyonu**: Arama motorları için optimize edilmiş
- **Hızlı Yükleme**: Optimize edilmiş görsel ve kod yapısı
- **Erişilebilirlik**: WCAG standartlarına uygun

## 📁 Proje Yapısı

```
profix-static-website/
├── index.html              # Ana HTML dosyası
├── assets/
│   ├── css/
│   │   └── styles.css      # Özel CSS stilleri
│   ├── js/
│   │   ├── content.js      # Çok dilli içerik verisi
│   │   └── main.js         # Ana JavaScript dosyası
│   └── images/             # Görsel varlıklar
│       ├── hero/
│       ├── products/
│       ├── team/
│       └── ...
└── README.md               # Bu dosya
```

## 🛠️ Kurulum ve Çalıştırma

### Gereksinimler
- Modern bir web tarayıcısı
- Yerel web sunucusu (opsiyonel, ancak önerilen)

### Çalıştırma Seçenekleri

#### 1. Live Server (VS Code Eklentisi)
1. VS Code'da projeyi açın
2. Live Server eklentisini yükleyin
3. `index.html` dosyasına sağ tıklayın
4. "Open with Live Server" seçeneğini seçin

#### 2. Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 3. Node.js HTTP Server
```bash
# http-server paketini global olarak yükleyin
npm install -g http-server

# Proje dizininde çalıştırın
http-server
```

#### 4. Doğrudan Tarayıcıda
`index.html` dosyasını doğrudan tarayıcınızda açabilirsiniz, ancak bazı özellikler (CORS) çalışmayabilir.

## 🌐 Dil Değiştirme

Web sitesi Türkçe ve İngilizce olmak üzere iki dili destekler:
- Varsayılan dil: Türkçe
- Dil değiştirici: Header'da sağ üst köşede
- Tüm içerik dinamik olarak değişir

## 📱 Responsive Tasarım

Site aşağıdaki ekran boyutları için optimize edilmiştir:
- **Desktop**: 1024px ve üzeri
- **Tablet**: 768px - 1023px
- **Mobile**: 767px ve altı

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: Mavi tonları (#3b82f6, #1e40af)
- **Secondary**: Gri tonları (#64748b, #475569)
- **Accent**: Yeşil, Mor, Amber tonları
- **Background**: Beyaz ve açık gri gradyanlar

### Tipografi
- **Font Family**: System fonts (sans-serif)
- **Headings**: Bold, büyük boyutlar
- **Body Text**: Regular, okunabilir boyutlar

## 🔧 Özelleştirme

### İçerik Değiştirme
Tüm içerik `assets/js/content.js` dosyasında tanımlanmıştır. Bu dosyayı düzenleyerek:
- Şirket bilgilerini
- Ürün kategorilerini
- Ekip üyelerini
- İletişim bilgilerini
değiştirebilirsiniz.

### Stil Değiştirme
- **Tailwind CSS**: CDN üzerinden yüklenir
- **Özel Stiller**: `assets/css/styles.css` dosyasında
- **Renkler**: CSS değişkenleri ile kolayca değiştirilebilir

### Görseller
Görseller `assets/images/` dizininde organize edilmiştir:
- Logo: `logo.png`
- Hero görseli: `hero/hero-image.webp`
- Ürün görselleri: `products/` dizini
- Diğer görseller ilgili dizinlerde

## 📊 Performans

- **Lighthouse Score**: 90+ (tüm kategorilerde)
- **Yükleme Süresi**: <3 saniye
- **Görsel Optimizasyonu**: WebP formatı kullanımı
- **CSS/JS Minification**: Üretim için optimize edilmiş

## 🔒 Güvenlik

- **HTTPS**: SSL sertifikası önerilir
- **Content Security Policy**: Güvenlik başlıkları
- **XSS Koruması**: Input sanitization

## 📈 SEO Optimizasyonu

- **Meta Tags**: Tam SEO meta etiketleri
- **Open Graph**: Sosyal medya paylaşımları için
- **Structured Data**: Schema.org markup
- **Sitemap**: XML sitemap oluşturulabilir

## 🌍 Tarayıcı Desteği

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📞 Destek

Herhangi bir sorun veya öneriniz için:
- **Email**: info@hazerkimya.com
- **Telefon**: +90 212 555 55 55

## 📄 Lisans

Bu proje Hazer Yapı Kimyasalları şirketi için özel olarak geliştirilmiştir.

---

**Hazer Yapı Kimyasalları** - Gücüyle Birleştirir, Geleceği İnşa Eder.
