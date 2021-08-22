# Frontend Bootcamp / Web'deki günler 

> 🚨🚨 Bu proje devam eden bir çalışmadır! Sorunlar ve çekme istekleri teşvik edilir. 🚨🚨

## Hoş Geldin

Bu iki günlük atölyede, çalışan bir web uygulaması oluştururken ön uç geliştirmenin temellerini öğreneceksiniz.

İlk gün, web'in temellerine bir giriş sağlar: HTML, CSS ve JavaScript. Bu, hem yeni hem de deneyimli geliştiricilere yöneliktir. İkinci gün TypeScript, durum yönetimi ve test gibi daha gelişmiş konulara dalacağız. Örnekler herkes tarafından erişilebilir olsa da, programlama ve web teknolojileri konusunda önceden deneyiminiz varsa, bundan en iyi şekilde yararlanacaksınız.

## Kurulum

### 1. Gerekli Yazılım

Başlamadan önce, bilgisayarınızda aşağıdakilerin güncel sürümlerinin kurulu olduğundan emin olun:

- [Node/NPM](https://nodejs.org/en/) (sürüm 10 olması gereken **LTS** seçeneğini seçin)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com)
  - Bir Mac kullanıyorsanız,terminal komutunu `code` yüklemek için ayrıca[bu adımları](https://https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) takip edin.
  - VS kodunu zaten yüklediyseniz, güncellemeleri kontrol edin!
- [Chrome]için react Geliştirici Araçları(https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) ya da [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### 2. Projeyi Yükleme ve Açma

- Vs kodunu açın ve ardından yerleşik terminali açmak için `ctrl + ` " tuşlarına basın (klavyenin sol üst köşesindeki backtick.)

- Kodunuz için uygun bir yer bulmak için `cd` (dizini Değiştir) komutunu kullanın
- Atölye kodunun bir kopyasını almak için terminale `git clone https://github.com/Microsoft/frontend-bootcamp.git` yazın.
- Geçerli dizini bootcamp klasörüne değiştirmek için `cd frontend-bootcamp` yazın.
- Tüm proje bağımlılıklarını kurmak için `npm install` yazın.
- VS Code'da bootcamp kodunu açmak için `code -r .` yazın.
>Mac kullanıyorsanız, takip ettiğinizden emin olun [bu adımlar](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) ilk önce `code` komutunu kullanılabilir hale getirmek için.

### 3. "İç Döngü" Yapısını Çalıştırın

Bu noktada, VS Kodu pencereniz şöyle görünmelidir:

<img src="https://user-images.githubusercontent.com/1434956/53654442-9c379400-3c02-11e9-8768-d19e092b606d.png" width=500 />

Dev "iç döngü"yü başlatmak için şunu çalıştırın:
```
npm start
```

Bu, aşağıda gösterilen siteyi yükleyecektir.

<img src="https://user-images.githubusercontent.com/1434956/53656239-88426100-3c07-11e9-8456-e3d958aa4def.png" width=500 />

### 4. Ders Yapısı

1. Demolar ya CodePen (Adım 1, 2 ve 3) ile olacak ya da adım klasöründe yapılacaktır. Demoyu izlemek için README adımını izleyin.

2. Demolar gibi, alıştırmalar CodePen veya project step klasörlerinde yapılır. Bu alıştırmalar size ilk adımda gösterilenleri denemek için bir fırsat verecektir.
  
## Ne Beklenir

Her ders için sunucu, konuyla ilgili temel kavramları öğretmek için bazı demo kodlarını gözden geçirecektir. Bu noktada kod yazma konusunda endişelenmeyin. Aşağıda bağlantısı verilen readmes aracılığıyla takip edin.

Çoğu dersin de bir egzersiz kısmı vardır. Egzersiz talimatları genellikle her adımın "exercise" klasörü içinde readme dosyasında bulunur.

### Birinci Gün

Birinci gün, HTML, CSS ve JavaScript'in temellerinin yanı sıra React ve TypeScript'e giriş konularını kapsar.

1. [HTML'e Giriş](step1-01)
2. [Css 'e Giriş](step1-02)
3. [Java Script'e Giriş](step1-03)
4. [React'a Giriş](step1-04)
5. [React Bileşenleri](step1-05)
6. [State-driven UI](step1-06)
7. [Types and UI-driven state](step1-07)

### 2. Gün

1. [TypeScript temelleri](step2-01)
2. [UI Fabric bileşen kitaplığı](step2-02)
3. [Tema ve stil](step2-03)
4. [Tepki Bağlamı](step2-04)
5. [Redux: Mağaza](step2-05)
6. [Redux: tepki bağlama](step2-06)

### Bonus İçerik

* [Redux: Servis çağrıları](bonus-servicecalls)
* [Jest ile test etme](bonus-jest)

## Ek Kaynaklar

- [MDN Web dokümanları](https://developer.mozilla.org/en-US/)
- [React Dokümanları](https://reactjs.org/docs/getting-started.html)
- [React'te Düşünme](https://reactjs.org/docs/thinking-in-react.html)

## Follow the authors!

If you are interested in JavaScript, TypeScript, React, Redux, or Design Systems, follow us on Twitter:

- [@kenneth_chau](https://twitter.com/kenneth_chau)
- [@micahgodbolt](https://twitter.com/micahgodbolt)

## Other projects from the UI Fabric team at Microsoft

- [UI Fabric](https://developer.microsoft.com/en-us/fabric) - [github repo](https://github.com/officedev/office-ui-fabric-react)
- [Just](https://microsoft.github.io/just): The task library that just works - [github repo](https://github.com/Microsoft/just)
- [Rush](https://rushjs.io): A scalable monorepo manager for the web - [github repo](https://github.com/Microsoft/web-build-tools/)

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Legal notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
