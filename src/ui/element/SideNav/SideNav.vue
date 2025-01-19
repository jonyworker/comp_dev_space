<script setup>
import { ref, computed } from "vue";
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Input from "@/ui/element/Input/Input.vue";
import Menu from "@/ui/element/Menu/Menu.vue";
import Avatar from "@/ui/element/Avatar/Avatar.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from '@/ui/element/Icon/Icon.vue';


// 定義 props
const props = defineProps({
    themeColor: {
        type: String,
        default: "blue",
    },
    logoSrc: {
        type: String,
        default: "",
    },
    logo: {
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

const isCollapsed = ref(false);

const handleCollapsed = () => {
	isCollapsed.value = !isCollapsed.value;
	console.log("Collapsed status:", isCollapsed.value);
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
</script>

<template>
    <Grid fluid>
        <Row hasGap>
            <Column xs="12" sm="4" md="4" style="text-align: start;">

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
                        :dataSource="props.dataSource"
                        :isCollapsed="isCollapsed"
                        :color="computedContentColor"
                        :hasDivider="false"
                        className="">
                    </Menu>

                </div>
            </Column>
        </Row>
    </Grid>
</template>

<style scoped lang="scss">

</style>