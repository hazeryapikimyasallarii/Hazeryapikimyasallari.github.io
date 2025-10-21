// Dil tercihini yönetmek için cookie tabanlı utility fonksiyonları

/**
 * Cookie'ye dil tercihini kaydeder
 * @param {string} lang - Dil kodu ('tr' veya 'en')
 */
function setLanguageCookie(lang) {
    try {
        if (lang === 'tr' || lang === 'en') {
            // Cookie'yi 1 yıl için ayarla
            const date = new Date();
            date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = `lang=${lang};${expires};path=/;SameSite=Lax`;
        }
    } catch (_) {
        // Cookie yazma başarısız olursa sessizce devam et
    }
}

/**
 * Cookie'den dil tercihini okur
 * @returns {string|null} Dil kodu veya null
 */
function getLanguageCookie() {
    try {
        const nameEQ = "lang=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                const lang = cookie.substring(nameEQ.length);
                if (lang === 'tr' || lang === 'en') {
                    return lang;
                }
            }
        }
    } catch (_) {
        // Cookie okuma başarısız olursa null döndür
    }
    return null;
}

/**
 * Cookie'den dil tercihini siler
 */
function deleteLanguageCookie() {
    try {
        document.cookie = "lang=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    } catch (_) {
        // Cookie silme başarısız olursa sessizce devam et
    }
}

/**
 * Dil tercihini belirler: Cookie -> Tarayıcı dili -> Varsayılan (en)
 * @returns {string} Dil kodu ('tr' veya 'en')
 */
function getLanguagePreference() {
    try {
        // 1) Cookie'den dil tercihini oku (en yüksek öncelik)
        const cookieLang = getLanguageCookie();
        if (cookieLang === 'tr' || cookieLang === 'en') {
            return cookieLang;
        }

        // 2) Tarayıcı dilini kontrol et
        const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
        return browserLang.startsWith('tr') ? 'tr' : 'en';
    } catch (_) {
        return 'en';
    }
}

/**
 * Dil tercihini günceller (cookie'ye kaydeder ve HTML lang attribute'unu ayarlar)
 * @param {string} lang - Dil kodu ('tr' veya 'en')
 */
function updateLanguagePreference(lang) {
    try {
        // Cookie'ye kaydet
        setLanguageCookie(lang);
        
        // HTML lang attribute'unu güncelle
        try {
            document.documentElement.lang = lang;
        } catch (_) {}
    } catch (_) {
        // Hata durumunda sessizce devam et
    }
}

