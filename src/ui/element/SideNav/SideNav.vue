<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Input from "@/ui/element/Input/Input.vue";
import Menu from "@/ui/element/Menu/Menu.vue";
import Avatar from "@/ui/element/Avatar/Avatar.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from '@/ui/element/Icon/Icon.vue';
import Navbar from "@/ui/element/Navbar/Navbar.vue";

// 定義 props
const props = defineProps({
    themeColor: {
        type: String,
        default: "blue",
    },
    logo: {
        type: String,
	    default: "",
    },
	logoSrc: {
		type: String,
		default: "",
	},
	logoLink: {
		type: String,
		default: "",
	},
    hasRWD: {
        type: Boolean,
        default: false,
    },
    hasLogo: {
        type: Boolean,
        default: false,
    },
    hasSearch: {
        type: Boolean,
        default: false,
    },
    dataSource: {
        type: Array,
        required: true,
    },
    className: {
        type: String,
        default: "",
    },
})

const THEME_COLOR = {
	Blue: '#00467C',
	Yellow: '#F4E069',
	Grape: '#AB86D1',
	Black: '#000000',
	White: '#ffffff',
};

// 新增斷點常數
const MOBILE_BREAKPOINT = 1024;

const isMobile = ref(false);
const isCollapsed = ref(false);

const sortDataSource = computed(() => {
	return props.dataSource.sort((a, b) => a.order - b.order);
});

const handleCollapsed = () => {
	isCollapsed.value = !isCollapsed.value;

};

const handleResize = () => {
	const isBelowBreakpoint = window.innerWidth < MOBILE_BREAKPOINT;
	isMobile.value = isBelowBreakpoint;
	isCollapsed.value = isBelowBreakpoint;
};

// 導航欄主題顏色
const computedThemeColor = computed(() => {
	switch (props.themeColor) {
		case "blue":
			return { backgroundColor: "#00467C" };
		case "yellow":
			return { backgroundColor: "#F4E069" };
		case "grape":
			return { backgroundColor: "#AB86D1" };
		case "black":
			return { backgroundColor: "#000000" };
		default:
			return { backgroundColor: "#ffffff" };
	}
});

// 文字內容顏色
const computedContentColor = computed(() => {
	switch (props.themeColor) {
		case "blue":
			return "#ffffff";
		case "yellow":
			return "#004E81";
		case "grape":
			return "#004E81";
		case "black":
			return "#cccccc";
		default:
			return "#000000";
	}
})

// 初始化及監聽
onMounted(() => {
	handleResize(); // 初次檢查
	window.addEventListener('resize', handleResize); // 監聽視窗大小變化
});

onUnmounted(() => {
	window.removeEventListener('resize', handleResize); // 清理監聽
});
</script>

<template>
	<template v-if="isMobile && isCollapsed">
		<Navbar
	        :dataSource="sortDataSource"
			:hasLogo="false"
			logoSrc=""
			className="fixed top-0 h-[60px] w-full"
			style="position: fixed; top: 0; height: 60px; width: 100%;"
		>
		</Navbar>
	</template>

    <div class="ded-side-nav" :style="{ width: isCollapsed ? 'auto' : '100%', ...computedThemeColor} ">
        <!--Logo-->
        <template v-if="props.hasLogo">
            <div class="ded-side-nav-header">
                <template v-if="!isCollapsed">
                    <div class="ded-side-nav-header-logo">
                        <template v-if="props.logoLink">
                            <a :href="props.logoLink">
                                <Icon :name="props.logo" width="90" height="30"
                                      :color="computedContentColor"></Icon>
                            </a>
                        </template>
                        <template v-else>
                            <Icon :name="props.logo" width="90" height="30" :color="computedContentColor"></Icon>
                        </template>
                    </div>
                </template>

                <Button class="side-nav-toggle"
                        themeColor="primary"
                        variant="text"
                        size="large"
                        prefix="SvgArrowLeft"
                        @click="handleCollapsed">
                </Button>
            </div>
        </template>

        <!--personal info-->
        <template v-if="!isCollapsed">
            <div class="ded-side-nav-desktop">
                <Avatar
                    shape="circle"
                    size="large"
                    status="online"
                    :isShowInfo="true"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
                    alt="無圖顯示"
                    userName="Name"
                    caption="Caption"
                    className=""
                ></Avatar>

                <Button
                    themeColor="primary"
                    variant="text"
                    size="large"
                    prefix="SvgLogout"
                ></Button>
            </div>
        </template>
        <template v-else>
            <div class="ded-side-nav-mobile">
                <Avatar
                    shape="circle"
                    size="small"
                    status="online"
                    :isShowInfo="false"
                    src="https://storage.googleapis.com/ded-wds-bucket/fox.png"
                    alt="無圖顯示"
                    userName="Name"
                    caption="Caption"
                    className=""
                ></Avatar>
            </div>
        </template>

        <!--搜尋欄-->
        <template v-if="!isCollapsed && props.hasSearch">
            <Input
                type="text"
                placeholder="Jony Search..."
                prefix="SvgSearch"
                size="medium"
                initValue=""
                @change="()=>{}"
            />
        </template>

        <!--選單區-->
        <Menu
            :dataSource="sortDataSource"
            :isCollapsed="isCollapsed"
            :color="computedContentColor"
            :hasDivider="false"
            className="">
        </Menu>
    </div>
</template>

<style scoped lang="scss">

</style>