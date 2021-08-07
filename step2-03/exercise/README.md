# Adım 2.3-UI Fabric ile tema oluşturma ve şekillendirme (egzersiz)

[Lessons](../../) | [Demo](../demo/)

Zaten çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın. Sonuçları görmek için 2. gün 3. adımın altındaki "egzersiz" bağlantısını tıklayın.

## Fabric temalarını uygulama

Altındaki Todo Uygulaması içindeki UI Fabric paketlerinden önceden tanımlanmış bazı temaları uygulamayı deneyin. `exercise/src/components/TodoApp.tsx`. Bunu değiştirerek yapın:

```ts
import { FluentCustomizations } from '@uifabric/fluent-theme';
```

with:

```ts
import { TeamsCustomizations } from '@uifabric/theme-samples';
```

## Özelleştirilmiş temaları uygulama

1. [Theme generator] kullanarak kendi temanızı oluşturun(https://developer.microsoft.com/en-us/fabric#/styles/themegenerator) ve oluşturulan kodu kopyalayın.

2. `exercise/src/components/TodoApp.tsx` içinde `Customizer` bileşenini silin.

3. Oluşturulan tema kodunu `TodoApp` bileşen tanımından önce yapıştırın.

4. Değerlerle oynayın ve `ITheme` türünün daha fazla özelliğini keşfetmek için VS Kodunun zekasını kullanın.

## Bir Fabric kontrol örneğini özelleştirme

1. `exercise/src/components/TodoFooter.tsx` dosyasını açın

2. `<DefaultButton>` öğesini bulun ve bir `styles` desteği ekleyin

3. Bunu bir styles nesnesiyle özelleştirmeye çalışın (Intellisense of VS Code'un özelleştirmek için ne kullanabileceğiniz konusunda size rehberlik etmesine izin verin)

4. Bunu bir styles işleviyle özelleştirmeyi deneyin

## `MergeStyles`ile CSS-in-JS

Demoda belirtildiği gibi, bu, Fabric dışında da çalışan gelişmiş bir yaklaşımdır. Bu yaklaşımı genellikle Fabric tabanlı bir uygulamada kullanmazsınız.

1. `mergeStyles` kullanarak bir class name oluşturmayı deneyin ve bunu `TodoApp` içinde bir `className` desteği olarak kullanın

```jsx
import { mergeStyles } from 'office-ui-fabric-react';

const className = mergeStyles({
  backgroundColor: 'red',
  selectors: {
    ':hover': {
      backgroundColor: 'blue'
    }
  }
});
```

2. Birkaç bileşene ekstra dolgu vermeyi deneyin
