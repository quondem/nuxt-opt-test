<template>
	<div class="layout">
		<WidgetsHeader />
		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.content {
		padding-top: 3.75rem;
	}
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding-bottom: 2.5rem;
	}
</style>
