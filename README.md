# Http Status Kodları
Bir web sitesini ziyaret ettiğimizde iki taraflı bir iletişim kurmuş oluruz. Bu iletişimin bir tarafında tarayıcı bulunurken diğer tarafta sunucu yer alır. Tarayıcı aracılığıyla ilgili web sayfasının sunucusuna istek göndeririz. Sunucu bu isteğe üç haneli bir durum kodu ile karşılık verir. Bu kodlara Http Status Codes denir.

## Http Status Kodu Sınıfları:
1. **1xx:** 
Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını ve işlemin başladığını bildiren bilgilendirme kodlarını ifade eden durum kodudur.
2. **2xx:**
Tarayıcı tarafından gönderilen isteğin sunucuya ulaştığını, anlaşıldığını ve başarılı olduğunu ifade eden durum kodlarıdır.
3. **3xx:** 
Erişilmek istenen kaynağın başka bir kaynağa taşındığını ve bir yönlendirmenin söz konusu olduğunu ifade eden durum kodlarıdır.
4. **4xx:** 
İsteğin yerine getirilmediğini, ilgili sayfaya ya da web sitesine ulaşılamadığını ifade eden durum kodlarıdır.
5. **5xx:** 
Tarayıcı tarafından gönderilen isteğin başarıyla sunucuya ulaştığını fakat sunucu tarafındaki sorunlar nedeniyle isteğin yerine getirilemediğini ifade eden durum kodlarıdır.

## En Sık Karşılaşılan Durum Kodları:
1.	**200 Durum Kodu (Başarılı):** Sunucudan tarayıcıya gönderilen 200 durum kodu bir web sayfasının sorunsuz bir şekilde çalıştığını ifade eder. Her şey olması gerektiği gibi çalışıyordur.

2.	**301 Durum Kodu (Kalıcı Yönlendirme):** Bir web sayfasının kalıcı olarak bir başka web sayfasına yönlendirildiği ve sayfayı ziyaret eden kullanıcının da otomatik olarak yönlenmesini sağlayan durum kodudur. 

3.	**302 Durum Kodu (Geçici Yönlendirme):** Bir web sayfasının geçici olarak bir başka web sayfasına yönlendirildiğini ifade eden durum kodudur. 301 yönlendirme kodundan farkı ilgili sayfanın test aşamasında olması, bakıma alınması ya da bir e-ticaret sitesi için ilgili ürünün stoklarının geçici olarak tükenmesi gibi ilgili sayfanın tekrar aktif edileceği durumlarda kullanılmasıdır. Fakat kullanıcılar 301 yönlendirmesi ile 302 yönlendirmesi arasındaki farkı anlamayacaktır. İlgili sayfaya giriş yapan kullanıcılar direkt olarak diğer sayfaya yönlendirilecektir.

4.	**403 Durum Kodu (Erişim İzni Sorunu):** Kullanıcının bir web sayfasına erişmek adına sunucuya gönderdiği isteğe karşılık ilgili web sayfasına erişim izni olmadığı ya da ilgili web sayfasının yasaklandığını ifade eden durum kodudur.

5.	**404 Durum Kodu (Sayfa Bulunamadı):** Kullanıcının görüntülemek istediği web sayfasının ilgili sunucuda bulunmadığını ifade eden durum kodudur. İlgili web sayfası silinmiş ya da URL’si değiştirilmiş olabilir. Fakat 404 durum kodları ilgili sayfanın geçici ya da kalıcı olarak ulaşılamadığı hakkında bir fikir vermez. 404 alınabilecek durumlarda, kullanıcının web sitesini terk etmesi yerine aynı web sitesi içerisinde bulunan farklı bir sayfaya yönlendirme yapmak kullanıcı deneyimini arttırıp, kullanıcı kayıplarını minimum değer indirir.

# Http Request Metodları:
Http, web browser ile web server arasında iletişim kurmamızı sağlayan bir protokoldür.  Get ve Post metodları en sık kullanılan metodlar olup sunucudaki kaynaklara erişmek için kullanılırlar.

Http metodları şunlardır:
1)	**GET:** Bu metod sunucuda veri almak için kullanılır. Get metodu ile URL üzerinden veriler gönderebilir, URL üzerinden veriler arasında gezinilebilir, veriler üzerinde değişiklik yapılıp tekrar gönderilebilir. Geri tuşuna basılarak önceki sorgular tekrar gönderilebilir. Bu kullanım kolaylık sağlasa da güvenlik açısından riskli bir yöntemdir. Bu yüzden hassas parametrelerin GET metodu ile gönderilmemesi gerekir. 

2)	**POST:** Bu metod sunucuya veri göndermek için kullanılır. Bu method ile istek parametreleri hem URL içinde hem de mesaj gövdesinde gönderilir. Sadece mesaj gövdesinin kullanımı Get metod’u kullanırken oluşabilecek riskleri ortadan kaldıracaktır. Tarayıcılar geri butonuna basıldığında POST isteğinin mesaj gövdesinde yer alan parametreleri tekrar göndermek isteyip istemediğimizi sorarlar. Bunun temel nedeni bir işlemi yanlışlıkla birden fazla yapmayı engellemektir. Bu özellik ve de güvenlik gerekçeleriyle bir işlem gerçekleştirileceğinde POST metodunun kullanılması önerilir.

3)	**PUT:**  Bu metod ile servis sağlayıcı üzerindeki bir kaynak güncellenebilir. Hangi kaynak güncellenecekse o kaynağın id’sini göndermek zorunludur.

4)	**HEAD:** GET metoduyla benzer işleve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (yani başlıklar ve içerikleri GET metoduyla aynıdır). Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilir.

5)	**DELETE:** Bu metod ile sunucudaki herhangi bir veriyi silebilirsiniz.

6)	**CONNECT:**  Bu metod, bir kaynaktan diğer kaynağa iletişim kurmak için kullanılabilir. Bu kaynaklar bir Proxy sunucusu olabilir. Böylelikle Proxy sunucusunu bir tünel gibi kullanmış olursunuz. 

7)	**OPTIONS:**  Bu metod belli bir kaynak için kullanılabilecek HTTP metodlarını sunucudan sorgulamak için kullanılır.

8)	**TRACE:** Teşhis amaçlı kullanılan bir metoddur. Sunucu bu metodla gelen istek mesajının içeriğini aynen yanıt gövdesinde geri göndermelidir. Bu yöntemle sunucu ile istemci arasında bir vekil sunucu varsa bu sunucunun ve yaptığı değişikliklerin tespiti mümkün olabilir.

9)	**PATCH:** Bu metod bir kaynağa istediğiniz küçük çaplı değişimi yapmanızı sağlar.

10)	**SEARCH:** Bir dizinin altındaki kaynakları sorgulamak için kullanılır.


