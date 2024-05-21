<template>
	<section class="fines">
		<div class="container">
			<div class="fines__wrapper">
				<div class="fines__content">
					<h2 class="fines__title title-main">Проверьте штрафы и зарегестрируйтесь в 1 клик</h2>
					<PagesFinesForm />
				</div>

				<div class="fines__img">
					<NuxtImg
						src="/images/fines.png"
						alt="fines"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.fines {
		margin-top: 4.9375rem;
		@media (max-width: 600px) {
			margin-top: 2rem;
		}
		&__wrapper {
			display: flex;
			justify-content: space-between;
			gap: 2.5rem;
			@media (max-width: 1100px) {
				flex-direction: column;
				align-items: center;
			}
		}
		&__content {
			display: flex;
			flex-direction: column;
			gap: 1.5625rem;
			width: 100%;
			@media (max-width: 1100px) {
				max-width: 700px;
			}
		}
		&__img {
			max-width: 33.25rem;
			width: 100%;
			& img {
				width: 100%;
			}
		}
	}
</style>
