# Adım 2.2 - UI Fabric bileşen kitaplığı (Egzersiz)


[Lessons](../../) | [Demo](../demo/)

# Egzersiz 1: Fabric dokümantasyon sitesine aşina olmak:


[Documentation for DefaultButton](https://developer.microsoft.com/en-us/fabric/#/components/button).dosyasını açın mevcut diğer bileşenleri keşfetmek için kenar çubuğunu kullanın.

# Alıştırma 2: TodoFooter.tsx'i "Fabric"leştirin

Hâlâ çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın. Sonuçları görmek için 2. gün 2. adımın altındaki "egzersiz" bağlantısına tıklayın.

1. `exercise/src/components/TodoFooter.tsx` içindeki TSX dosyasını açın.
2. Yığın, Metin ve Default Button bileşenlerini Fabric'ten içe aktarmak için en iyi TODO yorumunu izleyin.
3. TODO yorumunu takip edin:

- `<footer>` yerine `<Stack>` yazın
- `<span>` yerine `<Text>` yazın
- `<button>` yerine  `<DefaultButton>` yazın

## Bonus Egzersiz

VAHŞİLEŞ! Fabric kütüphanesinde o kadar çok bileşen var ki! Egzersiz bileşen dosyalarına bazı bileşenleri koymayı deneyin. Daha önce bahsedilen bu kavramları deneyin:

- `Office-uı-fabric-react` bileşenlerinden içe aktarma.
- Dokümantasyon sitesinde bulunan sahne ile bileşeni özelleştirme.
- Bileşeni render sahneleri ile özelleştirin (Bunlar onRender\_\_\_ veya benzeri olarak adlandırılacaktır.)
