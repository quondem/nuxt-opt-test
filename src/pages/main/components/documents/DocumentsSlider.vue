<template>
	<div
		ref="slider"
		class="documents__slider f-carousel">
		<PagesDocumentsCard
			class="f-carousel__slide"
			v-for="document in documents"
			:to="document.to"
			:title="document.title"
			:text="document.text" />
		<div class="f-carousel__nav">
			<button class="f-button is-next">
				<svg
					width="40"
					height="80"
					viewBox="0 0 40 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_1_255)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M40 80C17.9086 80 0 62.0914 0 40C0 17.9086 20.4343 0 40 0V80Z"
							fill="#A6B7D4"
							fill-opacity="0.471045" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M28.4127 38.9505C28.9247 39.3751 29.1807 39.7928 29.1807 40.2037C29.1807 40.6146 28.9141 41.0802 28.3808 41.6007L18.4424 51.6012C17.9285 52.1184 17.9202 52.9508 18.4237 53.478C18.9123 53.9897 19.7231 54.0084 20.2347 53.5198C20.2417 53.5132 20.2486 53.5064 20.2554 53.4996L32.1442 41.6238C32.9256 40.8431 32.9263 39.5768 32.1457 38.7953C32.1435 38.7931 32.1413 38.7909 32.1391 38.7887L20.0628 26.8117C19.5471 26.3003 18.7146 26.3037 18.2032 26.8193C18.1961 26.8265 18.1891 26.8336 18.1822 26.8409C17.6674 27.3843 17.6794 28.2391 18.2092 28.7679L28.4127 38.9505Z"
							fill="white" />
					</g>
					<defs>
						<clipPath id="clip0_1_255">
							<rect
								width="40"
								height="80"
								fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import documents from "../../composables/documents.data";
import Fancybox from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { ref } from "vue";
const slider = ref();
onMounted(() => {
	new Fancybox.Carousel(slider.value, {
		infinite: true,
		slidesPerPage: 3,
		Dots: {
			minCount: 2,
			dynamicFrom: 1,
		},
	});
});
</script>

<style lang="scss">
.documents__slider {
	padding: 0 2.1875rem;
	@media (max-width: 1240px) {
		max-width: 37.5rem;
		margin: 0 auto;
	}
}
.f-carousel__slide {
	margin-right: 2.1875rem;
	width: calc((100% - 4.375rem) / 3);
	@media (max-width: 1240px) {
		margin-right: 1.5625rem;
		width: 100%;
	}
}
.f-button.is-prev,
.f-button.is-next {
	width: 40px;
	height: 80px;
	& svg {
		display: none;
	}
	&:hover {
		opacity: 0.8;
	}
	&.is-next {
		background-image: url("/images/documents/next-arrow.svg");
	}
	&.is-prev {
		background-image: url("/images/documents/prev-arrow.svg");
	}
}
// .f-carousel__dots {
// 	gap: 5px;
// }
.f-carousel__dots li button {
	width: 15px;
	height: 15px;
	& span {
		background-color: #007aff;
		width: 7px;
		height: 7px;
	}
}
.f-carousel__dots li.is-current button {
	& span {
		transform: scale(1.429);
	}
}
</style>
