<template>
	<section class="advantages">
		<div class="container">
			<h2 class="advantages__title title">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
			<div class="advantages__cards">
				<PagesAdvantagesCard
					:title="card.title"
					:text="card.text"
					:img="card.img"
					v-for="card in Advantages"
					:key="card.title"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import Advantages from "~/pages/main/composables/advantages.cards";
</script>

<style scoped lang="scss">
	.advantages {
		margin-top: 6.125rem;
		&__title {
			margin-bottom: 2.0625rem;
			text-align: center;
		}
		&__cards {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 2.1875rem;
			@media (max-width: 1240px) {
				grid-template-columns: repeat(2, 1fr);
			}
			@media (max-width: 768px) {
				grid-template-columns: repeat(1, 1fr);
			}
		}
	}
</style>
