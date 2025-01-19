<script setup>
import MenuItem from "./MenuItem.vue";
import { ref, computed } from "vue";

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
    // isSideNavLink: {
    //     type: Boolean,
    //     default: false,
    // },
    hasDivider: {
       type: Boolean,
       default: false,
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

const computedWidth = computed(() => (props.isCollapsed ? 'auto' : '100%'));

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
		<nav class="ded-nav" :style="{ width: computedWidth }">
			<ul class="ded-nav-list">
				<MenuItem
					v-for="item in props.dataSource"
					:key="item.path"
					:item="item"
					:is-collapsed="props.isCollapsed"
					:use-router="props.useRouter"
					:color="props.color"
                    :hasDivider="props.hasDivider"
					:expanded-items="expandedItems"
					@itemClick="handleItemClick"
				/>
			</ul>
		</nav>
	</div>
</template>
