// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	srcDir: "src",
	components: [{ path: "@widgets", pathPrefix: false }],

	css: ["@assets/styles/style.scss"],
	alias: { "@widgets": "~/widgets", "@pages": "~/shared/pages", "@ui": "~/shared/ui", "@assets": "~/shared/assets" },
	modules: [
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					"PT Sans": [400, 700],
				},
			},
		],
		"@nuxt/image",
	],

	dir: {
		plugins: "shared/plugins",
		public: "shared/public",
		assets: "shared/assets",
		pages: "../pages",
		layouts: "../layouts",
	},
});
