# ETAŞ Afyon — HTML tasarım önizlemesi

PDF tasarım kılavuzuna göre hazırlanmış, mobil uyumlu HTML/CSS/JavaScript sitesi. Framework, npm kurulumu veya derleme gerekmez.

## Yerel açılış

`index.html` dosyasını tarayıcıda açabilirsiniz. Alternatif olarak proje klasöründe `python3 -m http.server 4173` çalıştırıp `http://localhost:4173` adresini açın.

## GitHub Pages ile müşteriye paylaşma

1. GitHub'da yeni bir repository oluşturun. GitHub Free kullanıyorsanız Pages için public repository seçin.
2. `index.html`, `styles.css`, `script.js` ve `assets` klasörünü repository'nin köküne yükleyin. Varsa `.nojekyll` dosyasını da ekleyin. ZIP dosyasını değil, içindeki dosyaları yükleyin.
3. Repository'de **Settings → Pages** bölümünü açın.
4. **Source: Deploy from a branch**, **Branch: main**, klasör: **/(root)** seçip kaydedin. Ana dalınız farklı adlandırılmışsa onu seçin.
5. Yayın tamamlandığında aynı ekrandaki **Visit site** bağlantısını müşteriye gönderin. Proje adresi genel olarak `https://KULLANICI.github.io/REPO/` biçiminde olur.

Bütün dosya yolları görelidir; GitHub Pages'in repository alt dizininde de çalışır. Alan adı bağlamak zorunlu değil; ilk inceleme GitHub adresinden yapılabilir.

Resmi kılavuz: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Neler çalışır?

- Sabit üst menü ve sayfa içi gezinme.
- Mobil açılır menü, Escape ile kapatma.
- Dört ürün için detay penceresi; klavye odağı ve Escape ile kapatma.
- Kurumsal bilgi penceresi.
- Tesis ve iletişim bölümüne yönlendirmeler.
- Mobilde tek sütun, tablette 2 × 2 ve masaüstünde ürün mozaiği.

## Önizleme sınırları

- Telefon/WhatsApp numarası henüz sağlanmadığından satış butonları iletişim bölümüne gider. Sipariş gönderimi, form ve online ödeme yoktur.
- Logo ve fotoğraflar kullanıcı tarafından sağlanan PDF'nin tek tasarım görselinden ayrılmıştır. Özellikle süt, et ve tesis kaynaklarının çözünürlüğü sınırlıdır. Yayın kalitesi için ayrı yüksek çözünürlüklü kaynaklar sonradan değiştirilebilir.
- Fontlar Google Fonts üzerinden yüklenir; bağlantı olmadığında Georgia ve sistem fontları kullanılır.
- Önizlemenin arama motorlarında listelenmesini önlemek için `noindex, nofollow` eklenmiştir. Bu bir erişim kontrolü değildir. Gerçek yayın aşamasında kaldırılabilir.
- Sosyal hesap, sertifika ve iletişim bilgileri uydurulmadığı için eklenmemiştir.

## Düzenleme

- Metinler ve bölüm yapısı: `index.html`.
- Renkler, ölçüler ve mobil düzen: `styles.css`.
- Ürün detay metinleri ve etkileşimler: `script.js`.
- Logo/fotoğraflar: `assets/images/`.

## Kontrol

1440, 1024, 768 ve 390 px genişliklerde yatay taşma ve görsel yükleme kontrolü yapıldı. Mobil menüden ürünlere gitme, detay penceresi açma ve Escape sonrası odağın ürün kartına dönmesi tarayıcıda doğrulandı.
