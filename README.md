### NETWRIX Task

Реализован функционал поиска партнёров в зависимости от значения селектора Type. Переключение значения селектора приводит к обновлению результатов поиска. Данные вытягиваются из БД, которая реализована через PostgreSQL/Sequelize ORM. Стили написаны на нативном CSS. Для реализации логики на frontend использована библиотека React и стейт-менеджер Redux с менеджером сайд-эффектов Redux-Saga. Адаптив под разрешения мобильных устройств до 767px.

### Установка:

В директории 2 папки:

* **server/** Отвечает за back-end.
   * cd server
   * npm ci
   * npx sequelize db:create
   * npx sequelize db:migrate
   * npx sequelize db:seed:all
   * npm run dev

* **client/** Отвечает за front-end.
   * cd client
   * npm ci
   * npm start
