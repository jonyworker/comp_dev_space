<script setup>
import Image from "@/ui/element/Image/Image.vue";

// 定義 props
const props = defineProps({
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
		default: false,
	},
	rounded: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="card__image" :class="{'fullImg': props.fullImg}" >
		<div class="card__image--container"
		     :class="{'rounded': props.rounded}">
			<slot>
				<Image
					:ratio="props.imgRatio"
					:src="props.imgSrc"
					objectFit="cover">
				</Image>
			</slot>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>