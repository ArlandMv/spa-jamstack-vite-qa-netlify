import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts', '**/*.js'], // Archivos donde se aplicará la configuración
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020, // 11:2020 12:2021 13:2022 14:2023
      sourceType: 'module', // Módulos ES
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
     ignores: [
      "package.json",
      "package-lock.json",
      "netlify.toml",
      "*.config.js",   
      "*.config.json", 
      "*.yml",         
      "*.yaml",
      "*.toml",
      ".env",          
      "node_modules/",
      "dist/",
      "build/",
      ".git/",
      "eslint.config.js"
    ],
    rules: {
      eqeqeq: ['error', 'always'], // Usa siempre `===` en vez de `==`
      'no-empty-function': 'error', // Prohíbe funciones vacías
      'no-implicit-coercion': 'warn', // Advierte sobre coerciones implícitas
      '@typescript-eslint/no-explicit-any': 'warn', // Advierte sobre `any`
      '@typescript-eslint/no-duplicate-enum-values': 'warn', // Evita valores duplicados en enums
      'prettier/prettier': 'error', // Enlaza Prettier para formatear el código
    },
  },
  prettierConfig, // Añade configuración de Prettier para que no choque con ESLint
];
