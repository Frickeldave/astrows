import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://frickeldave.github.io",
  base: process.env.CI ? "/astrows/" : "/",
  output: "static",
  integrations: [
    starlight({
      // Einfacher Titel → mehrsprachiges Objekt
      title: {
        en: "Conference docs",
        de: "Konferenz-Dokumentation",
        kl: "Qapla' Documentation",
      },
      // Standard-Sprache (Fallback)
      defaultLocale: "root",
      // Locale-Konfiguration
      locales: {
        // Root locale → keine URL-Prefix (z.B. /astrows/)
        root: {
          label: "English",
          lang: "en",
        },
        // Deutsche Variante → URL-Prefix /astrows/de/
        de: {
          label: "Deutsch",
          lang: "de",
        },
        // Klingonisch → URL-Prefix /astrows/kl/ (Spaß-Zugabe!)
        kl: {
          label: "tlhIngan Hol",
          lang: "kl",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/frickeldave/astrows",
        },
      ],
      sidebar: [
        {
          label: "Cloudland",
          items: [{ autogenerate: { directory: "cloudland" } }],
        },
      ],
    }),
  ],
});
