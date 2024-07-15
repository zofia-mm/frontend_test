# Zadanie rekrutacyjne - rozwiązanie

Zobacz działającą stronę! https://zofia-mm.github.io/frontend_test/

### Spełnione dodatkowe plusy:

- Implementacja - Angular + SCSS.

- Brak plików graficznych w końcowym projekcie. Jedynym svg jest sama ikonka html5.

![logo html5]( /readme/html5-logo.gif )

```html
<div class="logo-container">
  <a routerLink="/"> <div class="logo"></div> </a>
</div>
```

```scss
.logo-container {
  ...
  .logo {
    background-image: url('/assets/html5.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    filter: invert( 100% ); // svg color from default black to white
    ...
  }
}

```

- Animowane CSS IS AWESOME w footerze to czysty CSS.

![animowane css is awesome]( /readme/css-is-awesome.gif )

```scss
:host {
  ...
  &:hover .square {
    transform: rotate(90deg);
    ...
  }
}

.square {
  transition: transform 1s ease-in-out;
}
```

- Większość jednostek w projekcie to rem (używany m.in. do skalowania czcionek, wysokości i szerokości elementów), vh / vw zostały użyte do rozciągnięcia main na cały ekran. Px występuje jedynie w szerokościach ramek.

- Kod pisany z podejściem Mobile first. Skalowanie do rozdzielczości desktop uprościł mixin.

```scss
$mobile-max: 960px;

@mixin desktop {
  @media ( min-width: ($mobile-max + 1px) ) {
    @content;
  }
}
```

```scss
@use '../../styles/breakpoints.scss' as b;

.block {
  h6 {
    padding-bottom: 1.5rem;
    @include b.desktop {&{ padding-bottom: 3rem; }}
  }
}
```

- Artykuły sortują się alfabetycznie. Strona także otrzega alertem, jeśli nie ma więcej artykułów do wczytania albo gdy próbujemy wczytać duplikat.

- Button w footerze wysuwa ramkę dzięki dynamicznym klasom Angular, zmiennej w typescript oraz animacji CSS.

![animacja wysuwania ramki]( /readme/slide-popup.gif )

```html
<div class="popup"
  [ngClass]=" settingsPopupVisible ? '' : 'popup__hidden' "
  (mouseleave)="hideSettingsPopup()" >
  ...
</div>
```
```typescript
settingsPopupVisible = false;
hideSettingsPopup() { this.settingsPopupVisible = false; }
showSettingsPopup() { this.settingsPopupVisible = true; }
```
```scss
.popup {
  height: 8rem;
  transition: 1s;
  ...
}
.popup__hidden {
  height: 2rem;
  & * { display: none !important; }
}
```