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
			:class="{ input_error: error }"
			type="text"
		/>
		<p class="input__error">{{ error }}</p>
	</div>
</template>

<script setup lang="ts">
	const { label, id, error } = defineProps<{ label: string; id: string; error?: string }>();

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
		transition: all 0.05s ease-in-out;
		&:focus {
			outline: 2px solid var(--light-blue);
		}
		&_error {
			border: 1px solid red;
		}
		&__error {
			font-size: 0.75rem;
			color: red;
		}
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
