<template>
	<div class="layout">
		<WidgetsHeader />
		<div class="content">
			<WidgetsBreadCrumbs />
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
	.content {
		padding-top: 3.75rem;
	}
</style>
