<template>
	<div class="input__wrapper">
		<label
			class="input__label"
			:for="id"
			>{{ label }}</label
		>
		<input
			v-model="model"
			v-bind="$attrs"
			:id="id"
			class="input"
			type="text"
		/>
	</div>
</template>

<script setup lang="ts">
	const { label, id } = defineProps<{ label: string; id: string }>();

	const model = defineModel();
</script>

<style scoped lang="scss">
	.input {
		border: 1px solid #bcbcbc;
		border-radius: 0.3125rem;
		background-color: transparent;
		height: 2.5rem;
		padding: 0 0.625rem;
		outline: none;
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 0.3125rem;
		}
		&__label {
			font-size: 0.75rem;
		}
	}
</style>
