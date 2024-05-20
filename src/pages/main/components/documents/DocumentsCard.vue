<template>
	<div
		v-bind="$attrs"
		class="card"
	>
		<h4 class="card__title">{{ title }}</h4>
		<p class="card__text">{{ text }}</p>
		<NuxtLink
			class="card__button"
			:to="to"
		>
			<UiButton>Перейти</UiButton>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
	const { to, title, text } = defineProps<{ to: string; title: string; text: string }>();
</script>

<style scoped lang="scss">
	.card {
		height: 28.125rem;
		padding: 1.5625rem;
		border: 1px solid var(--border-color);
		border-radius: 0.625rem;
		// max-width: 21.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.9375rem;
		&__title {
			font-weight: 700;
			font-size: clamp(1.5rem, 5vw, 1.9375rem);
			line-height: clamp(1.875rem, 5vw, 2.3125rem);
			color: var(--dark-blue);
		}
		&__text {
			font-size: 1.125rem;
			line-height: 1.375rem;
		}
		&__button {
			display: block;
			margin-top: auto;
			& button {
				width: 100%;
			}
		}
	}
</style>
