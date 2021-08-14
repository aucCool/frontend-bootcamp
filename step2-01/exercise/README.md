# Adım 2.1 - TypeScript'e Giriş (Egzersiz)

[Dersler](../../) | [Demo](../demo/) | [Final](../final/)

Hâlâ çalışan uygulamanız yoksa, `frontend-bootcamp` klasörünün kökünden `npm start` komutunu çalıştırarak başlatın.

Alıştırmalar, aksi belirtilmedikçe bu adımın `exercise/src` klasörü altında tamamlanacaktır. Çalışırken sonuçları görmek için [Step2-01 exercise sayfasını](http://localhost:8080/step2-01/exercise/) da açmak isteyeceksiniz.

## Modüller

1. VS Kodunda `exercise/src/fibonacci.ts` dosyasını açın

2. Bu dosyanın içine, bir sayı alan ve `n`inci Fibonacci sayısını döndüren`fib(n)` adlı bir işlev yazın (`n`) türünü belirttiğinizden emin olun.

> İPUCU: `function fib(n: number) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }`

3. `fib(n)`yi **adlandırılmış bir dışa aktarma** olarak dışa aktarın

4. `FibConst` sabit değişkenini **varsayılan dışa aktarma** olarak dışa aktarın

5. Aynı klasördeki `index.ts` içinde, hem `fib` hem de `Fib Const` dosyasını içe aktarın ve `fib(Fib Const)` sonucunu kaydetmek için yerleşik `console.log()` işlevini kullanın.

## Türler ve Arayüzler

İçinde `exercise/src/index.ts`:

1. Kırmızı-Yeşil-Sarı trafik ışığının durumlarını açıklayan dize birliği türü için bir tür takma adı ekleyin: `type TrafficLight = ???`

2. Bir arayüze sahip bir araba türünü tanımlayın: 'arayüz araba { ... } `tekerlekler`, `renk`, `marka`, `model`ile tamamlayın

3. Geçerli bir araba örneği oluşturun ve bunu `console.log()` kullanarak oturum açın: `const myCar: Car = { ??? }`;

## Jenerik

`exercise/src/stack.ts` içinde, yazılan `pop()` ve `push()` yöntemleriyle tamamlanmış bir `Stack<T>` için genel bir sınıf oluşturun

> İpucu: JavaScript dizisinde sizin için zaten `push()` ve `pop()` uygulandı. Bu sizin destek mağazanız olabilir.

`exercise/src/index.ts` içinde bir `Steak<number>` oluşturun ve işlevselliğini göstermek için `console.log()`u kullanın.

## Yayılma ve Yok Etme

1. index.ts dosyasında aşağıdaki kodu not edin:

```ts
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};
```

2. Şimdi, bu iki nesneyi birleştiren yeni bir `megaObj` değişkeni oluşturmak için `{...x, ...y}` spread sözdizimini kullanarak bir tek-liner oluşturun.

3. `megaObj` öğesinden `{first, second, catcher}` değerlerini almak için yok etme sözdizimini kullanın.

## Zaman Uyumsuz / Bekliyor

index.ts dosyasında aşağıdaki kodu not edin:

```ts
function makePromise() {
  return Promise.resolve(5);
}
```

1. `Await` sözdizimi ile `makePromise ()` öğesini çağırın ve sonuçları günlüğe kaydedin.

2. `async` anahtar sözcüğünü kullanan yeni bir işlev oluşturun. Fonksiyonun içinde, `makePromise()` için bir `await` çağrısı yapın ve sonuçları döndürün.
