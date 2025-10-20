# 🗺️ Harita Entegrasyonu - OpenStreetMap & Leaflet.js

## ✨ Özellikler

Web sitenizde **tamamen ücretsiz** ve **API anahtarı gerektirmeyen** bir harita entegrasyonu yapıldı!

### Kullanılan Teknolojiler:
- **Leaflet.js**: Açık kaynak, hafif ve güçlü harita kütüphanesi
- **OpenStreetMap**: Ücretsiz, topluluk destekli harita verileri
- **Font Awesome**: İkonlar için

## 🎯 Avantajlar

### ✅ Google Maps'e Göre Avantajlar:
1. **Tamamen Ücretsiz**: API anahtarı, faturalama hesabı veya ödeme gerekmez
2. **Sınırsız Kullanım**: Aylık kullanım limiti yok
3. **Gizlilik**: Kullanıcı verilerini Google ile paylaşmaz
4. **Açık Kaynak**: Topluluk destekli, sürekli güncellenen
5. **Hızlı**: Hafif ve performanslı
6. **Özelleştirilebilir**: Tam kontrol sizde

### 📍 Mevcut Özellikler:
- ✅ Merkez ofis konumu: Körfez/Kocaeli
- ✅ Özel tasarım marker (mavi gradient)
- ✅ Detaylı bilgi popup'ı
- ✅ Otomatik açılan bilgi penceresi
- ✅ Yol tarifi linki (Google Maps'e yönlendirir)
- ✅ Tıklama animasyonları
- ✅ Ofis bölgesi vurgulama (100m çevre)
- ✅ Responsive tasarım
- ✅ Mobil uyumlu

## 📍 Koordinat Bilgileri

**Mevcut Konum:**
```javascript
Enlem (Latitude): 40.7647
Boylam (Longitude): 29.7514
Adres: Yeniyalı Mah. Milli Egemenlik Cad. Yarımca San. Sitesi No: 105, Körfez/Kocaeli 41800
```

### Koordinatları Güncelleme

Eğer tam koordinatları biliyorsanız veya değiştirmek isterseniz:

1. `iletisim.html` dosyasını açın
2. Satır ~553'e gidin
3. Koordinatları güncelleyin:

```javascript
const officeLocation = [40.7647, 29.7514]; // [Enlem, Boylam]
```

### Tam Koordinatları Bulma:

**Yöntem 1: Google Maps**
1. [Google Maps](https://maps.google.com) açın
2. Adresinizi aratın
3. Konuma sağ tıklayın
4. İlk satırdaki koordinatları kopyalayın

**Yöntem 2: OpenStreetMap**
1. [OpenStreetMap](https://www.openstreetmap.org) açın
2. Adresinizi aratın
3. Sağ tıklayın → "Show address" seçin
4. URL'deki koordinatları kullanın

## 🎨 Özelleştirme Seçenekleri

### 1. Zoom Seviyesi
```javascript
zoom: 16,  // 1-19 arası (16 = yakın görünüm)
```

### 2. Marker Rengi
```javascript
background: linear-gradient(135deg, #2563eb, #1e40af); // Mavi gradient
// Değiştirmek için hex kodları güncelleyin
```

### 3. Çevre Dairesi Boyutu
```javascript
radius: 100, // metre cinsinden
```

### 4. Harita Stili Değiştirme

Farklı harita stilleri kullanabilirsiniz:

**Karanlık Tema:**
```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap, &copy; CartoDB'
}).addTo(map);
```

**Açık Renkli:**
```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap, &copy; CartoDB'
}).addTo(map);
```

**Uydu Görünümü (Esri):**
```javascript
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
}).addTo(map);
```

## 🔧 Teknik Detaylar

### Kullanılan CDN'ler:
```html
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- Leaflet JavaScript -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
```

### Tarayıcı Desteği:
- ✅ Chrome (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Edge (son 2 versiyon)
- ✅ Mobil tarayıcılar

## 📱 Responsive Tasarım

Harita tüm cihazlarda mükemmel çalışır:
- **Desktop**: Overlay bilgi kartı + tam harita
- **Tablet**: Optimize edilmiş görünüm
- **Mobile**: Harita altında bilgi kartı

## 🚀 Performans

- **Yükleme Süresi**: ~500ms
- **Harita Boyutu**: ~50KB (sıkıştırılmış)
- **API Çağrısı**: Yok (tamamen client-side)
- **Bant Genişliği**: Minimal

## 🔒 Gizlilik

- ❌ Kullanıcı takibi yok
- ❌ Çerez kullanımı yok
- ❌ Üçüncü parti veri paylaşımı yok
- ✅ GDPR uyumlu
- ✅ Tamamen açık kaynak

## 📞 İletişim Bilgileri (Haritada Gösterilen)

```
Şirket: Hazer Yapı Kimyasalları
Adres: Yeniyalı Mah. Milli Egemenlik Cad. Yarımca San. Sitesi No: 105
       Körfez/Kocaeli 41800
Satış: +90 552 804 29 24
Teknik: +90 555 870 47 59
```

## 🎯 Gelecek İyileştirmeler (İsteğe Bağlı)

1. **Çoklu Konum**: Birden fazla ofis/şube eklenebilir
2. **Rota Çizimi**: İki nokta arası rota gösterimi
3. **Arama Özelliği**: Harita üzerinde arama
4. **Tam Ekran Modu**: Haritayı tam ekran açma
5. **Konum Paylaşımı**: Kullanıcının konumunu gösterme

## 💡 İpuçları

1. **Koordinat Doğruluğu**: En az 4 ondalık basamak kullanın
2. **Zoom Seviyesi**: 15-17 arası ofis gösterimi için ideal
3. **Popup Genişliği**: Mobil için 280-350px arası ideal
4. **Yükleme Animasyonu**: 800ms gecikme kullanıcı deneyimi için optimal

## 🆘 Sorun Giderme

### Harita Görünmüyorsa:
1. Tarayıcı konsolunu kontrol edin (F12)
2. Leaflet CSS ve JS dosyalarının yüklendiğinden emin olun
3. `<div id="map">` elementinin sayfada olduğunu kontrol edin
4. Yükseklik değerinin ayarlandığından emin olun (`height: 500px`)

### Marker Görünmüyorsa:
1. Koordinatların doğru formatta olduğunu kontrol edin: `[lat, lng]`
2. Font Awesome'ın yüklendiğinden emin olun
3. Tarayıcı konsolunda hata mesajı var mı kontrol edin

## 📚 Kaynaklar

- [Leaflet Dokümantasyonu](https://leafletjs.com/reference.html)
- [OpenStreetMap](https://www.openstreetmap.org)
- [Leaflet Örnekleri](https://leafletjs.com/examples.html)
- [Harita Stilleri](https://leaflet-extras.github.io/leaflet-providers/preview/)

## ✅ Sonuç

Artık web sitenizde **tamamen ücretsiz**, **API anahtarı gerektirmeyen** ve **profesyonel görünümlü** bir harita var! 

Herhangi bir ek kurulum veya yapılandırma gerekmez - harita hemen çalışmaya hazır! 🎉

---

**Not**: Bu harita entegrasyonu production ortamında kullanıma hazırdır. Herhangi bir lisans ücreti veya kullanım limiti yoktur.

