<template>
	<form
		@submit="onSubmit"
		class="form"
	>
		<div class="form__inputs">
			<UiInput
				v-model="number"
				v-bind="numberAttrs"
				:error="errors?.number"
				id="number"
				label="Номер автомобиля"
			/>
			<UiInput
				v-model="region"
				v-bind="regionAttrs"
				:error="errors?.region"
				id="region"
				label="Регион"
			/>
			<UiInput
				v-model="registration"
				v-bind="registrationAttrs"
				:error="errors?.registration"
				id="registration"
				label="Свидетельство о регистрации ТС"
			/>
		</div>
		<div class="form__buttons">
			<UiButton
				class="form__button form__button_check"
				type="submit"
			>
				<span>Проверить штрафы</span>
				<NuxtImg
					class="form__button-fines"
					src="/images/fines-button.svg"
				/>
			</UiButton>
			<UiButton
				@click.prevent="showVideo"
				class="form__button form__button_about"
				type="submit"
			>
				<NuxtImg
					class="form__button-youtube"
					src="/images/youtube-logo.svg"
					alt="youtube"
				/>
				<span>О сервисе <span class="form__button-time">(1 мин. 20 сек)</span></span>
			</UiButton>
		</div>
		<p class="form__terms">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
	</form>
</template>

<script setup lang="ts">
	import { Fancybox } from "@fancyapps/ui";
	import "@fancyapps/ui/dist/fancybox/fancybox.css";
	const showVideo = () => {
		new Fancybox([{ src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }]);
	};

	import * as yup from "yup";
	import { toTypedSchema } from "@vee-validate/yup";

	import { useForm } from "vee-validate";
	const validationSchema = toTypedSchema(
		yup.object({
			number: yup.string().required("Номер автомобиля обязателен"),
			region: yup.string().required("Регион обязателен"),
			registration: yup.string().required("Свидетельство обязателено"),
		})
	);
	const { values, errors, defineField, handleSubmit, handleReset } = useForm({ validationSchema });
	const [number, numberAttrs] = defineField("number");
	const [region, regionAttrs] = defineField("region");
	const [registration, registrationAttrs] = defineField("registration");

	const onSubmit = handleSubmit(values => {
		alert(JSON.stringify(values, null, 2));
		handleReset();
	});
</script>

<style scoped lang="scss">
	.form {
		&__button {
			font-size: 1.125rem;
			&-time {
				font-size: 0.9375rem;
				color: var(--dark-blue);
			}
			&_check {
				gap: 0.25rem;
			}
			&_about {
				background-color: transparent;
				border: 1px solid #0584fe;
				gap: 5px;
				color: black;
				line-height: 1.1;
				&:hover {
					background-color: hsl(210, 80%, 91%);
				}
				&:active {
					background-color: hsl(210, 78%, 76%);
					border: 1px solid hsl(210, 78%, 76%);
				}
			}
			&-youtube {
				width: 2.0625rem;
			}
			&-fines {
				width: 0.875rem;
			}
		}
		&__inputs {
			display: grid;
			grid-row-gap: 1rem;
			grid-column-gap: 1.875rem;
			grid-template-columns: 1fr 213px;
			& div:nth-child(3) {
				grid-column: span 2;
			}
			@media (max-width: 550px) {
				grid-template-columns: 1fr;
				& div:nth-child(3) {
					grid-column: 1;
				}
			}
		}
		&__buttons {
			margin-top: 15px;
			display: flex;
			gap: 1.3125rem;
			@media (max-width: 550px) {
				grid-template-columns: 1fr;
				flex-direction: column;
			}
		}
		&__terms {
			margin-top: 1rem;

			font-size: 0.8125rem;

			line-height: 1rem;
			color: #8f8f8f;
		}
	}
</style>
