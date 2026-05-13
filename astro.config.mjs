import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
	site: "https://frickeldave.github.io",
	// base nur in Production setzen — lokal ist kein Prefix nötig
	base: process.env.CI ? "/astrows/" : "/",
	output: "static",           // Immer static für GitHub Pages!
	integrations: [
		starlight({
			title: "Conference docs",
			social: [
				{ icon: "github", label: "GitHub", href: "https://github.com/frickeldave/astrows" },
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