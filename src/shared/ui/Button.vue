<template>
	<button class="button">
		<slot />
	</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.button {
		padding: 0.6875rem 1.25rem;
		background-color: var(--light-blue);
		border-radius: 0.4375rem;
		font-size: 1.125rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1.4375rem;
		height: 2.8125rem;
		white-space: nowrap;
		&:hover {
			background-color: hsl(210, 77%, 36%);
		}
		&:active {
			background-color: var(--dark-blue);
		}
	}
</style>
