import js from "@eslint/js";
import globals from "globals";

export default [
  // 1. Указываем глобальные папки для игнорирования
  {
    ignores: ["dist/**", "node_modules/**"]
  },
  
  // 2. Базовая конфигурация для проверки кода
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        // Добавляем глобальные переменные Jest, чтобы не было ошибок в тестах
        ...globals.jest 
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-useless-escape": "off"
    }
  }
];
