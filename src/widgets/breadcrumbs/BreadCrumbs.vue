<template>
	<div class="container">
		<div class="breadcrumbs">
			<NuxtLink
				to="/"
				class="breadcrumbs__item"
			>
				Главная страница
			</NuxtLink>
			<span
				:to="breadcrumb"
				class="breadcrumbs__item"
				v-for="breadcrumb in breadcrumbs"
			>
				{{ routeMap[breadcrumb] }}
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Router } from "vue-router";

	const router: Router = useRouter();

	const routeMap: { [key: string]: string } = {
		documents: "Документы",
		license: "Лицензионный договор",
		payment: "Информация об оплате",
		policy: "Политика обработки персональных данных",
		contacts: "Контакты",
		tariffs: "Тарифы",
		login: "Вход",
		register: "Регистрация",
	};

	const breadcrumbs = computed(() => {
		const path = router.currentRoute.value.path;
		return path.split("/").filter(item => item != "");
	});
</script>

<style scoped lang="scss">
	.breadcrumbs {
		padding: 1.25rem 0;
		display: flex;
		flex-wrap: wrap;
		row-gap: 5px;
		&__item {
			font-size: 0.8125rem;
			line-height: 1rem;
			padding-right: 25px;
			position: relative;
			white-space: nowrap;
			&:not(:last-child) {
				&::before {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					right: 10px;
					content: "";
					width: 5px;
					height: 5px;
					background-color: #000;
					border-radius: 50%;
				}
			}
			&:last-child {
				color: #8f8f8f;
			}
		}
	}
</style>
