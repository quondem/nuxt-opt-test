<template>
	<nav class="navbar">
		<NuxtLink
			@click="emit('click')"
			to="/tariffs"
			>Тарифы</NuxtLink
		>
		<NuxtLink
			@click="emit('click')"
			to="/contacts"
			>Контакты</NuxtLink
		>
	</nav>
</template>
<script setup lang="ts">
	const emit = defineEmits(["click"]);
</script>
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
