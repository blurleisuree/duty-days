module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat', // Новая функциональность
          'fix',  // Исправление багов
          'docs', // Изменения в документации
          'style', // Изменения стилей (без логики)
          'refactor', // Рефакторинг кода
          'test', // Добавление тестов
          'chore', // Мелкие задачи (настройки, зависимости)
          'ci', // Изменения в CI/CD
          'perf', // Улучшение производительности
          'revert' // Откат изменений
        ]
      ]
    }
  };