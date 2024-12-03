<script setup>
import MenuItem from "./MenuItem.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import { ref } from "vue";

let router;
try {
	router = require("vue-router").useRouter();
} catch (e) {
	router = null;
}

const props = defineProps({
	dataSource: {
		type: Array,
		required: true,
	},
	isCollapsed: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "#000000",
	},
	className: {
		type: String,
		default: "",
	},
	useRouter: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["navItemClick", "expandedNav"]);

const expandedItems = ref({});

const handleItemClick = ({item, event}) => {
	emit("navItemClick", item);
	emit("expandedNav");

	if (item.children) {
		event.preventDefault();
		expandedItems.value[item.path] = !expandedItems.value[item.path];
	} else if (item.path && props.useRouter && router) {
		router.push(item.path);
	}
};
</script>

<template>
	<div
		:class="{
      'ded-nav-container': true,
      [props.className]: !!props.className,
    }"
	>
		<nav
			class="ded-nav"
			:style="props.isCollapsed ? 'width:60px' : 'width:100%'"
		>
			<ul class="ded-nav-list">
				<MenuItem
					v-for="item in props.dataSource"
					:key="item.path"
					:item="item"
					:is-collapsed="props.isCollapsed"
					:use-router="props.useRouter"
					:color="props.color"
					:expanded-items="expandedItems"
					@itemClick="handleItemClick"
				/>
			</ul>
		</nav>
	</div>
</template>
