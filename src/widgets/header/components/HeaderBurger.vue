<template>
	<button
		class="burger"
		:class="{ active }"
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</template>

<script setup lang="ts">
	const { active } = defineProps<{ active: boolean }>();
</script>

<style scoped lang="scss">
	.burger {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		max-width: 25px;
		height: 20px;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		&.active {
			& span:nth-child(2) {
				display: none;
			}
			& span:nth-child(1) {
				transform: translate(0, 9px) rotate(45deg);
			}
			& span:nth-child(3) {
				transform: translate(0, -9px) rotate(-45deg);
			}
		}
		& span {
			background-color: #fff;
			height: 2px;
			width: 100%;
			transition: all 0.1s ease-in-out;
		}

		@media (max-width: 768px) {
			display: flex;
		}
	}
</style>
