# ETAŞ Afyon — Kapsam ve Teknik Proje Planı

Tarih: 3 Ekim 2026
Durum: HTML tasarım önizlemesi hazır. Kullanıcının son kararı önceki Astro önerisinin yerini aldı.

## Kararlar ve varsayımlar

- Tasarım referansı: ETAS_Afyon_Web_Tasarim_Kilavuzu.pdf.
- Kullanıcının tercihi doğrultusunda ilk sürümde PDF'deki logo ve fotoğraflar kullanılacak.
- Alan adı mevcut; adresi ve mevcut barındırma hizmeti henüz paylaşılmadı.
- Türkçe, kurumsal tanıtım ve ürün kataloğu öneriliyor.
- Telefon/WhatsApp üzerinden sipariş talebi öneriliyor; kullanıcı henüz satış akışını kesinleştirmedi.
- Yönetim paneli, online ödeme ve üyelik bu taslakta kapsam dışı; bunlar kesinleşmiş kullanıcı kararları değil.

## Sayfa kapsamı

1. Ana sayfa: header, hero, güven şeridi, ürün mozaiği, kurumsal/tesisler, gebe düve satış alanı, footer.
2. Kurumsal.
3. Ürünlerimiz.
4. Yumurta ürün detay sayfası.
5. Jersey Süt ürün detay sayfası.
6. Angus Et ürün detay sayfası.
7. Angus Gebe Düve ürün ve satış detay sayfası.
8. Tesislerimiz.
9. İletişim.

Gerekli bilgilendirme sayfaları ve 404 sayfası ayrıca hazırlanacak. Firma bilgileri ve ürün detayları doğrulanmış içerikten oluşturulacak; eksik ticari bilgiler uydurulmayacak.

## Güncel uygulama kararı

- Saf HTML, CSS ve JavaScript; framework veya derleme yok.
- Tek sayfalık tasarım önizlemesi; ürün detayları erişilebilir pencerelerde açılır.
- GitHub Pages için kökte index.html ve göreli dosya yolları.
- Telefon bilgisi bekleniyor; satış aksiyonları iletişim bölümüne yönlenir.
- 9 sayfalık tam site aşağıda ileri aşama kapsamı olarak korunmuştur.

## Önceki teknik öneri (uygulanmadı)

- Astro: sayfaların önceden HTML olarak üretilmesi.
- TypeScript: ürün ve iletişim verileri için tip kontrolü.
- CSS: kılavuzdaki renk, tipografi ve boşlukları ortak değişkenlerle uygulama; Grid/Flexbox ile responsive yerleşim.
- Menü ve gerekli etkileşimler için sınırlı JavaScript.
- Yerel içerik dosyaları: ürün açıklamaları için Markdown; şirket/iletişim bilgileri için ortak yapılandırma.
- İlk sürümde veritabanı veya sürekli çalışan uygulama sunucusu gerekmeyecek.
- Yönetim paneli istenirse içerik katmanı bir CMS bağlantısıyla yeniden planlanacak; güncelleme sonrası yeniden derleme akışı kurulacak.

## Dosya organizasyonu

- src/pages/: sayfa adresleri ve ürün detay rotaları.
- src/layouts/: ortak sayfa iskeleti ve SEO metadatası.
- src/components/: Header, Footer, Hero, TrustStrip, ProductMosaic, ProductCard, CompanySection, SalesBanner.
- src/content/products/: ürün içerikleri.
- src/data/site.ts: şirket, iletişim ve sosyal bağlantı bilgileri.
- src/assets/: logo ve fotoğraflar.
- src/styles/: tasarım değişkenleri, temel stiller ve ortak bileşen stilleri.
- public/: favicon ve işlenmeden sunulacak dosyalar.

## PDF görsellerinin hazırlanması

Önce gömülü dosyalar incelenecek. Görseller tek bir site önizlemesine gömülüyse ilgili bölgeler kırpılacak. Fotoğrafların üzerindeki mevcut yazı ve ikonlar kontrol edilecek; web arayüzü canlı HTML/CSS olarak kurulacak. Logo oranı korunacak, düşük çözünürlüklü dosya büyütülerek vektör gibi sunulmayacak. Masaüstü/mobil kırpmalar, kaynak çözünürlüğünün elverdiği ölçüde hazırlanacak. Görsellerin ayrı ve temiz kaynakları bulunamazsa kalite sınırı prototipte değerlendirilecek.

## İletişim ve içerik yönetimi

Telefon ve WhatsApp bağlantıları tek yapılandırmadan yönetilecek. Doğrulanmış numara bulunana kadar sipariş aksiyonu iletişim sayfasına yönlendirilebilir. Sosyal bağlantılar yalnızca hesap adresleri hazırsa gösterilecek.

İletişim formu opsiyonel. Seçilirse e-posta teslim servisi veya sunucu tarafı uç nokta, doğrulama, spam koruması, hata/başarı durumları ve teslim testi kapsama eklenecek. Statik site tek başına e-posta göndermez. API anahtarları istemci koduna konmayacak.

## Performans, SEO ve erişilebilirlik

- Uygun çözünürlükte WebP/AVIF görseller; responsive kaynaklar ve ayrılmış görsel alanları.
- Hero öncelikli, ekran altı görseller ertelenerek yüklenecek.
- Yerel WOFF2 fontlar; yalnızca gerekli ağırlıklar.
- Sayfa başlığı, açıklama, canonical URL, paylaşım görseli, sitemap ve robots.txt.
- Doğrulanmış şirket verilerine dayalı yapılandırılmış veri.
- Sayfa başına tek H1; anlamlı başlık sırası, alt metinler ve klavye odağı.
- En az 44×44 px dokunma alanları; azaltılmış hareket tercihine uyum.
- Hedefler: LCP ≤ 2.5 sn, CLS ≤ 0.1, INP ≤ 200 ms. Bunlar garanti değil, ölçüm hedefleridir; INP gerçek kullanım verisiyle değerlendirilir.

## Test ve teslim

- 390, 768, 1024 ve 1440 px görsel kontrolleri; ara genişliklerde taşma kontrolü.
- Chrome ve Safari'de menü, gezinme ve görsel kırpma kontrolleri.
- Klavye kullanımı, kontrast ve bağlantı doğrulaması.
- Üretim derlemesi ve TypeScript kontrolü.
- Menü ve temel yönlendirmeler için küçük, anlamlı otomatik tarayıcı testleri.
- Form varsa gerçek teslim testi.
- Kaynak kod, kurulum/derleme notları ve içerik güncelleme rehberi.

## Yayın yaklaşımı

Önce yerel önizleme, sonra yayın öncesi test ortamı. Statik çıktıyı sunabilen mevcut hosting varsa kullanılabilir; yoksa barındırma seçimi yayın aşamasında yapılacak. Alan adı değişikliği öncesinde mevcut site ve e-posta DNS kayıtları kontrol edilecek. HTTPS, doğru alan adı yönlendirmesi ve geri dönüş için önceki sürümün saklanması teslim kapsamına alınacak. Şimdilik DNS değişikliği veya yayın yapılmayacak.

## İş sırası ve süre

1. PDF görselleri ve içerik envanteri: 1 gün.
2. Proje temeli, tasarım değişkenleri, header/footer ve ana sayfa: 3–4 gün.
3. İç sayfalar ve ürün verileri: 2–3 gün.
4. Responsive, erişilebilirlik, performans ve SEO: 2–3 gün.
5. Son kontrol, revizyon ve yayın hazırlığı: 2–4 gün.

Toplam ilk tahmin: 10–15 iş günü. İçerik bekleme süreleri, panel, form ve e-ticaret ekleri dahil değil.

## Açık kararlar

- Sipariş yalnızca telefon/WhatsApp üzerinden mi alınacak?
- İçerik yönetim paneli gerekiyor mu?
- İletişim formu gerekiyor mu?
- PDF dışındaki şirket ve ürün metinleri hazır mı?
- Alan adı hangi hizmette ve mevcut hosting var mı?

## Teknik kaynaklar

- https://docs.astro.build/en/basics/project-structure/
- https://docs.astro.build/en/reference/routing-reference/
- https://docs.astro.build/en/guides/configuring-astro/
