<script setup>
import Image from  "@/ui/element/Image/Image.vue"
import AvatarStatus from  "@/ui/element/Avatar/AvatarStatus.vue"

// 定義 Props
const props = defineProps({
	shape: {
		type: String,
		default: "circle",
		validator: (value) =>
			["circle", "square"].includes(value),
	},
	size: {
		type: String,
		default: "medium",
		validator: (value) =>
			["xsmall", "small", "medium", "large"].includes(value),
	},
	status: {
		type: String,
		default: "none",
		validator: (value) =>
			["none", "online", "idle", "busy", "offline"].includes(value),
	},
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "無圖顯示",
	},
	userName: {
		type: String,
		required: true,
	},
	className: {
		type: String,
		default: "",
	},
})

const getInitialsOrDefault = (string, count) => {
	let matchCount = 0;
	let matchString = '';

	string.split('').forEach((char) => {
		if (/^[A-Z]+$/.test(char)) {
			if (matchCount < 2) {
				matchCount++;
				matchString = matchString + char;
			}
		}
	});
	return matchCount < 2 ? string.slice(0, count).toUpperCase() : matchString;
};
</script>

<template>
	<div :class="{
		'ded-avatar-container': true,
		 [`ded-avatar-container-${props.size}`]: true,
		 [ props.className ]: !!props.className
	}">
		<div :class="['ded-avatar', `ded-avatar-${props.shape}`]">
			<template v-if="props.src">
				<Image :src="props.src" :alt="props.alt" ratio="11" objectFit="cover"></Image>
			</template>
			<template v-else>
				<span
					:class="['ded-avatar-text', `text-${props.size}`]">{{ getInitialsOrDefault(props.userName, 2) }}</span>
			</template>
		</div>
		<AvatarStatus :avatarStatus="props.status" :avatarSize="props.size"></AvatarStatus>
	</div>
</template>

<style scoped lang="scss">

</style>