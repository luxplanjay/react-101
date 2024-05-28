# Заняття 11 - Бібліотека Redux

- Управління станом
  - Глобальний стан
  - Потік даних
- Встановлення Redux та React Redux
- Стор (store)
  - Redux DevTools
- Підписка на стор
  - Хук `useSelector`
  - Функції-селектори
- Екшени (actions)
  - Генератори екшенів
  - Відправлення екшенів
  - Хук `useDispatch`
- Редюсери (reducers)
  - Що таке редюсер
  - Сігнатура редюсера
  - Кореневий редюсер
  - Чому за замовчуванням `return state`
  - Обробка екшенів
  - Композиція редюсерів

## Redux example

![UI завдання](https://raw.githubusercontent.com/goitacademy/react-course-track/11-redux/assets/task.gif)

Так має виглядати початковий стан:

```js
{
  balance: {
    value: 0
  },
  locale: {
    lang: "uk"
  }
}
```

- Усі налаштування Redux роби у папці `src/redux`
- Створи стор у файлі `store.js`
- Створи файли слайсів `balanceSlice.js` та `localeSlice.js`
- Експортуй редюсер слайсу та екшени із файлу слайса
