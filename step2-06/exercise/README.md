# Adım 2.6 - Redux: Tepki bağlama (Egzersiz)

[Lessons](../../) | [Demo](../demo/)

Hâlâ çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın. Sonuçları görmek için 2. gün 6. adımın altındaki "egzersiz" bağlantısını tıklayın.

Bu alıştırmanın başında "Ekle" ve "Tamamlananları Temizle" düğmeleri çalışmıyor. Bu adımda bunu düzelteceğiz!

1. `exercise/src/index.tsx` dosyasını açın ve yorumda belirtildiği gibi `<TodoApp>` dosyasını `<Provider>` ile sarın.

2. `exercise/src/components/TodoFooter.tsx` dosyasını açın ve `TodoFooterProps` arabirim tanımındaki "nullable" tür değiştiricisini (`?`) silin.

3. Kodun alt bitlerini kaldırın ve `connect()` argümanlarını doldurun - `TodoListItem.tsx`i kılavuz olarak kullanmaktan çekinmeyin.

4. `TodoHeader.tsx` dosyası için 2, 3 numaralı adımları tekrarlayın.

## Bonus Egzersiz

Daha fazla okumak için, `connect()` , `mergeProps` ve `options` parametreleri hakkında daha fazla bilgi edinmek için buraya gidin:

https://react-redux.js.org/api/connect
