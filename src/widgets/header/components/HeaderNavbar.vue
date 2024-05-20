<template>
	<div class="navbar">
		<NuxtLink to="/tariffs">Тарифы</NuxtLink>
		<NuxtLink to="/contacts">Контакты</NuxtLink>
	</div>
</template>

<style lang="scss">
	.navbar {
		margin-right: auto;
		display: flex;
		gap: 1.875rem;
		color: white;
		font-size: 1.125rem;
		@media (max-width: 768px) {
			flex-direction: column;
			margin: 0;
		}
	}
</style>
