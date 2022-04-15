# Сборка глобальных стилей

Производится скриптом `/scripts/build`.

Берутся содержимое файлов `dark.scheme.css` и `dark.scheme.css` и вставляются в `global.css` вместо `--light: 'scheme';` и `--dark: 'scheme';` соответственно.

В `global.css` также добавляется `normalizr.css`.

Далее этот временный файл со всеми изменениями минимизируется при помощи `cssnano` и генерируется временный файл `global.min.tmp.css`, который импортируется уже для вставки в html.

## Responsive font

https://websemantics.uk/tools/responsive-font-calculator/
from 1200 with 16px to 3000 with 24px

```css
font-size: clamp(16px, calc(1rem + (24 - 16) * ((100vw - 1200px) / (3000 - 1200))), 24px);
```

## Tips

```css
.hidden {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
```
