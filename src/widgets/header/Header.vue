<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<WidgetsHeaderLogo />
				<div
					class="header__info"
					:class="{ open: isOpen }"
				>
					<WidgetsHeaderNavbar />
					<div class="header__side">
						<a
							class="header__phone"
							href="tel:+74951184422"
							>+7 495 118-44-22</a
						>
						<NuxtLink
							to="/login"
							class="header__login"
							>Вход</NuxtLink
						>
						<NuxtLink to="/register">
							<UiButton class="header__button">Регистрация</UiButton>
						</NuxtLink>
					</div>
				</div>
				<WidgetsHeaderBurger
					@click="isOpen = !isOpen"
					:active="isOpen"
				/>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	const isOpen = ref(false);
</script>

<style scoped lang="scss">
	.header {
		position: fixed;
		width: 100%;
		height: 3.75rem;
		background: linear-gradient(90deg, #000 30%, #1c2734 73%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1.875rem;
		}
		&__info {
			display: flex;
			gap: 1.875rem;
			align-items: center;
			width: 100%;
			transition: all 0.3s;
			@media (max-width: 768px) {
				position: fixed;
				transform: translateY(-100%);
				flex-direction: column;
				background: linear-gradient(90deg, #000 30%, #1c2734 73%);
				padding: 20px 10px;
				top: 0;
				right: 0;
				left: 0;

				&.open {
					transform: translateY(0);
					top: 3.75rem;
				}
			}
		}
		&__side {
			display: flex;
			gap: 1.875rem;
			align-items: center;
			@media (max-width: 768px) {
				flex-direction: column;
			}
		}
		&__phone {
			color: white;
			font-weight: 700;
			font-size: 1.125rem;
		}
		&__login {
			font-size: 1.125rem;
			color: white;
		}
		&__button {
			padding: 0.5625rem 1.125rem;
			font-size: 0.9375rem;
		}
	}
</style>
