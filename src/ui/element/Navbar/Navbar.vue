<script setup>
import { computed } from "vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Input from "@/ui/element/Input/Input.vue";
import Badge from "@/ui/element/Badge/Badge.vue";
import Avatar from "@/ui/element/Avatar/Avatar.vue";

// 定義 Model
const modelValue = defineModel();

// 定義 props
const props = defineProps({
    dataSource: {
        type: Array,
        required: true,
    },
	hasLogo: {
		type: Boolean,
		default: true,
	},
    logoSrc: {
        type: String,
        required: true,
        default: "",
    },
	logoLink: {
		type: String,
	},
	avatarSrc: {
		type: String,
	},
    className: {
        type: String,
        default: "",
    },
})

const sortDataSource = computed(() => {
    return [...props.dataSource].sort((a, b) => a.order - b.order);
});

const handleLogoClick = () => {
	if (props.logoLink) {
		window.open(props.logoLink, '_self');
	}
};
</script>

<template>
    <nav :class="{'navbar':true, [props.className]:!!props.className }">

        <div class="navbar-menu">
            <!-- 公司logo -->
	        <template v-if="props.hasLogo === true">
		        <Button themeColor="primary" variant="text" @click="handleLogoClick">
			        <Icon :src="props.logoSrc" alt="Logo" class="navbar-logo"  />
		        </Button>
	        </template>

            <!-- links -->
            <ul class="navbar-links">
                <Button
                    v-for="link in sortDataSource"
                    :key="link.href"
                    themeColor="primary"
                    variant="text"
                    @click="() => link.href && window.open(link.href, '_blank')"
                >
                    {{ link.label }}
                </Button>
            </ul>
        </div>

        <div class="navbar-feature">
            <form class="navbar-form-search" action="">
                <Input
                    type="text"
                    :placeholder="props.placeholder"
                    prefix="SvgSearch"
                    :size="props.size"
                    initValue=""
                    :isDisable="props.isDisable"
                    v-model="modelValue"
                    className="ded-search-input"
                />
            </form>
            <div class="navbar-icons">
                <div class="navbar-icons-icon">
                    <Badge
                        themeColor="error"
                        :isShowDot="true"
                        :value="100"
                        :limit="99"
                        className=""
                    >
                        <Icon name="SvgNotification" size="26"></Icon>
                    </Badge>
                </div>
	            <div class="navbar-icons-icon">
		            <Avatar
			            shape="circle"
			            size="small"
			            status="online"
			            :src="props.avatarSrc"
			            userName="Name"
			            caption="Caption"
		            ></Avatar>
	            </div>
            </div>
	        <button class="navbar-switch">
		        <div class="navbar-switch-bar"></div>
		        <div class="navbar-switch-bar"></div>
		        <div class="navbar-switch-bar"></div>
		        <span class="navbar-switch-sr-only">切換選單</span>
	        </button>
        </div>
    </nav>
</template>
