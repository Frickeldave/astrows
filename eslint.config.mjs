import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import stylistic from "@stylistic/eslint-plugin";

export default [
  // Basis: empfohlene Regeln
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  // TypeScript-Dateien
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { "unused-imports": unusedImports, "@stylistic": stylistic },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@stylistic/semi": ["error", "always"],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Astro-Dateien
  {
    files: ["**/*.astro"],
    plugins: { astro: astroPlugin },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },

  // Ignorierte Verzeichnisse
  {
    ignores: ["dist/", "node_modules/", ".astro/", "src/lib/beispiel.ts"],
  },
];