<template>
	<div class="card">
		<div class="card__img">
			<NuxtImg :src="img" />
		</div>

		<div class="card__content">
			<h4 class="card__title">{{ title }}</h4>
			<p class="card__text">{{ text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { img, title, text } = defineProps<{ img: string; title: string; text: string }>();
</script>

<style scoped lang="scss">
	.card {
		border: 1px solid #eeeff1;
		border-radius: 0.625rem;
		background-color: #fbfcfd;
		padding: 0 1.25rem;
		display: flex;
		align-items: center;
		// justify-content: space-between;
		height: 9.4375rem;
		gap: 0.9375rem;
		&__content {
			display: flex;
			flex-direction: column;
			gap: 0.625rem;
		}
		&__title {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 1.375rem;
			color: var(--dark-blue);
		}
		&__text {
			font-size: 0.9375rem;
			line-height: 1.125rem;
		}
	}
</style>
