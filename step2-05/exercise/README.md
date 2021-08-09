# Adım 2.5-Redux: Mağaza (Egzersiz)

[Lessons](../../) | [Demo](../demo/)

Zaten çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın. Sonuçları görmek için 2. gün 5. adımın altındaki `exercise` bağlantısını tıklayın.

1. İlk olarak, `exercise/src/store/index.ts` içindeki mağaza arayüzüne bir göz atın. `Store` arayüzünün iki anahtarı olduğunu unutmayın: `todos` ve `filter`. Anahtarların dize kimlikleri olduğu ve değerlerin `TodoItem` türünde olduğu bir nesne olan `todos`a odaklanacağız.

2. `exercise/src/reducers/index.ts` dosyasını açın ve eksik redüktör uygulamalarını doldurun.

3. `exercise/src/index.tsx` dosyasını açın ve bazı `dispatch` çağrıları yazın.

4. Konsolda ne yazdığına bir bakın (PC'de F12, Mac'te `cmd-option-I`).

5. Redux Devtools'u yükleyin [Chrome] (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) veya [Firefox] (https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) uzantısı

6. Durum değişikliklerini gözlemleyin ve "zaman yolculuğu" yapmayı deneyin
