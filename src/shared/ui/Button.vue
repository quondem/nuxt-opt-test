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
		border-radius: 7px;
		font-size: 1.125rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		&:hover {
			background-color: hsl(210, 77%, 36%);
		}
		&:active {
			background-color: var(--dark-blue);
		}
	}
</style>
