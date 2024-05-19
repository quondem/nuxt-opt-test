<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__side">
					<Logo />
					<Navbar />
				</div>
				<div class="header__side">
					<a href="tel:+74951184422">+7 495 118-44-22</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

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
			justify-content: space-between;
		}
		&__side {
			display: flex;
			gap: 1.875rem;
			align-items: center;
		}
	}
</style>
