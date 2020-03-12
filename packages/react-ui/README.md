# React UI

[![Build Status](https://tc.skbkontur.ru/app/rest/builds/buildType:FrontendInfrastructure_Packages_RunAll/statusIcon)](https://tc.skbkontur.ru/project.html?projectId=FrontendInfrastructure_Packages_ReactUI&tab=projectOverview)

- [Квик-старт](#Квик-старт) **@skbkontur/react-ui** собранная версия библиотеки
- [FAQ](#FAQ)

### <a name="Квик-старт"></a>Квик-старт

```bash
yarn add @skbkontur/react-ui
```

И используем компонентики у себя в проекте:

```jsx harmony static
import { Button, Toast } from '@skbkontur/react-ui';

const MyApp = () => (
  <div>
    Click this button <Button onClick={() => Toast.push('Hey!')}>Click me</Button>
  </div>
);
```

Если ругается, что `regeneratorRuntime` не определен, то необходимо подключить `regenerator-runtime` или `@babel/polyfill`, например в `index.html`

Квик-старт подойдёт, если Вебпак настроен на сборку. Например, вы используете `create-react-app`. В противном случае добавьте в конфиг Вебпака `style-`, `css-` и `file-loader`

### Хотим другой цвет кнопки!

Нужно использовать [ThemeProvider](https://tech.skbkontur.ru/react-ui/#/Customization/ThemeProvider). Список переменных можно глянуть в [ThemeShowcase](https://tech.skbkontur.ru/react-ui/#/Customization/ThemeShowcase)

### Глобальные css-стили приложения портят внешний вид контролов

Если библиотека используется в проекте с легаси, где стилизация сделана прямо по названиям тегов, то внешний вид контролов из библиотеки может сильно испортиться

Если нет возможности разобрать легаси, то можно увеличить специфичность селекторов в библиотеке, тогда стили контролов будут приоритетнее стилей из легаси проекта

Специфичность достигается за счет n-кратного повторения css-класса `react-ui` в селекторе стилей. Количество повторений задается через переменную `specificityLevel`, значение по умолчанию равно нулю, то есть по умолчанию css-класс `react-ui` никак ни на что не будет влиять

Чтобы специфичность заработала в легаси проекте, react-блок, в котором используются компоненты из библиотеки, должен быть обернут в тег с css-классом `react-ui`

Пример настройки специфичности:

```js static
import { Upgrade } from '@skbkontur/react-ui/lib/Upgrades';

Upgrade.setSpecificityLevel(1);
```

Специфичность должна устанавливаться в коде раньше импорта любых компонентов из библионтеки.

## <a name="FAQ"></a>FAQ

### Сломались стили при использовании css-loader 2.x (create-react-app/CRA 3.x)

Во [2-й версии](https://github.com/webpack-contrib/css-loader/releases/tag/v2.0.0), `css-loader` отключили использование `css-modules` по умолчанию.
**Решение**: В опциях к `css-loader` явно задать `modules: 'global'`.

### Как использовать react-ui с storybook 5.x?

В 5-й версии изменилось [API сторибука для кастомизации настроек webpack](https://github.com/storybooks/storybook/blob/v5.0.0/MIGRATION.md#webpack-config-simplifcation).
Кроме того был изменен дефолтный webpack конфиг. Это порождает проблемы вида [storybooks/storybook#4891](https://github.com/storybooks/storybook/issues/4891).
**Решение**: Заменить лоадеры для `css/less`. Например [так](https://github.com/storybooks/storybook/issues/6319#issuecomment-477852640) на свои

### Возникает ошибка `Error: Can't resolve 'mask-char-font/font.eot'`

Ошибка проявляется при использовании `css-loader@1.x` с выставленой опцией `modules`.
**Решение**: Обновить `css-loader` до 2-й версии или дополнительно указать опцию `url: false`

### Не могу прокинуть css-класс компонентам. Как кастомизировать?

Никак.

### Помощь в развитии

Мы рады любой сторонней помощи. Не стесняйтесь писать в [issues](https://github.com/skbkontur/retail-ui/issues)
баги и идеи для развития библиотеки.<br />