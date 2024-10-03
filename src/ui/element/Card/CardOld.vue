<script setup>
import {computed} from "vue";
import { cva } from "class-variance-authority";
import Image from "@/ui/element/Image/Image.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Col from "@/ui/layout/Col/Col.vue";
import Heading from "@/ui/element/Heading/Heading.vue";



// 定義 props
const props = defineProps({
	//卡片樣式接口
	elevation: {
		type: String,
		default: "none",
		validator: (value) => ['none', 'low', 'height'].includes(value),
	},
	direction: {
		type: String,
		default: "row",
		validator: (value) => ['row', 'column'].includes(value),
	},
	// 卡片Header文字
	headerTitle:{
		type: String,
	},
	// 卡片文字接口
	title: {
		type: String,
		default: "Card title",
	},
	subTitle: {
		type: String,
		default: "Card subtitle",
	},
	text: {
		type: String,
		default: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},

	// 圖片設定接口
	imgSrc: {
		type: String,
		default: "../../../src/assets/fakeImg/avatar_01.jpg",
	},
	imgRatio: {
		type: String,
		default: '',
		validator: (value) => ['11', '43', '54', '169'].includes(value),
	},
	fullImg: {
		type: Boolean,
		default: true,
	},
	rounded: {
		type: Boolean,
		default: false,
	},
})

const cardContainerCVAClass = computed(()=>{
	return cva ("card__container",{
		variants: {
			elevation: {
				'none': "",
				'low': "shadow_2",
				'height': "shadow_5",
			},
			direction: {
				'row': "card__direction-row",
				'column': "card__direction-column",
			},
		},
	})({
		//這裡設定 variants名稱接收 props的值
		elevation: props.elevation,
		direction: props.direction
	})
})

</script>

<template>

	<!-- Card - Column -->
	<div class="card__container card__direction-column shadow_2">
		<!-- Card Head -->
		<div class="card__header">
			<slot name="card-header">
				<p class="card__text">Card Header Title</p>
			</slot>
		</div>
		<!-- Card Image -->
		<div class="card__image fullImag" >
			<div class="card__image--container">
				<Image ratio="11"
				       objectFit="cover"
				       src="../../../src/assets/fakeImg/avatar_01.jpg">
				</Image>
			</div>
		</div>
		<!-- Card Body -->
		<div class="card__body">
			<slot name="card-body">
				<div style="display:flex; justify-content: space-between; align-items: center">
					<Heading class="card__title" level="2">Card title</Heading>
					<Icon name="more_vert" size="24"></Icon>
				</div>

				<h6 class="card__subtitle" style="margin-bottom: 16px;">Card subtitle</h6>
				<p class="card__text" style="margin-bottom: 16px;">Some quick example text to build on the card title and make up the bulk of the
					card's content.</p>

				<Button
					variant="contained"
					size="medium"
					width="fit"
					style="margin-top: auto;"
					>
					Learn More
				</Button>
			</slot>
		</div>

		<div class="card__footer card__footer-border">
			<slot>
				<small class="card__subtitle">Last updated 3 mins ago</small>
			</slot>
		</div>

	</div>


	<!-- Card - row -->
	<div :class="cardContainerCVAClass">
		<!-- Card Image -->
		<Col col="4">
			<div class="card__image" :class="{'fullImg': props.fullImg}" >
				<div class="card__image--container"
				     :class="{'rounded': props.rounded}">
					<Image
						:ratio="props.imgRatio"
						:src="props.imgSrc"
						objectFit="cover">
					</Image>
				</div>
			</div>
		</Col>

		<!-- Card Body -->
		<Col col="8">
			<div class="card__body">
				<slot name="card-body">
					<div style="display:flex; justify-content: space-between; align-items: center">
						<Heading class="card__title" level="2">{{ props.title }}</Heading>
						<Icon name="more_vert" size="24"></Icon>
					</div>

					<h6 class="card__subtitle" style="margin-bottom: 16px;">{{ props.subTitle }}</h6>
					<p class="card__text" style="margin-bottom: 16px;">{{ props.text }}</p>

					<Button
						variant="contained"
						size="medium"
						width="fit"
						style="margin-top: auto;"
						>
						Learn More
					</Button>
				</slot>
			</div>
		</Col>


	</div>


</template>

<style scoped lang="scss">
</style>