# Adım 2.4-Tepki Bağlamı (Egzersiz)

[Lessons](../../) | [Demo](../demo/)

Hâlâ çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın. Sonuçları görmek için 2. gün 4. adımın altındaki `exercise` bağlantısını tıklayın.

## Todo Context:Provider Bileşeni

1. `exercise/src/components/TodoApp.tsx` dosyasını açın.

2. Değer prop içindeki eksik işlevlerin yorumunu kaldırın.

## Todofooter: İşlevsel Bileşen İçindeki Bağlam

1. `exercise/src/components/TodoFooter.tsx` dosyasını açın.

2. `TodoContext`e erişmek için `useContext`i kullanın ve iki sabiti bağlamdan değerlerle değiştirin.

## TodoHeader: Sınıf Bileşeni İçindeki Bağlam

1. `exercise/src/components/TodoHeader.tsx` dosyasını açın.

2. `this.context` nesnesini kullanarak `onAdd` öğesini gerçek bir uygulamayla değiştirin.

3. `onFilter`ı, `this.context` nesnesini kullanarak gerçek bir uygulama ile değiştirin.

4. TodoHeader bileşeninin `contextType` değerini ayarladığınızdan emin olun.
