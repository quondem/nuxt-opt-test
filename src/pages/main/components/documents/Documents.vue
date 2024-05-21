<template>
	<section class="documents">
		<div class="container">
			<h2 class="documents__title title">Документы</h2>

			<PagesDocumentsSlider />
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.documents {
		margin-top: 5.3125rem;
		&__title {
			margin-bottom: 2.5rem;
			text-align: center;
		}
	}
</style>
