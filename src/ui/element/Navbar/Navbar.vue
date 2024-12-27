<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Input from "@/ui/element/Input/Input.vue";
import Badge from "@/ui/element/Badge/Badge.vue";

// 定義 Model
const modelValue = defineModel();

// 定義 props
const props = defineProps({
    links: {
        type: Array,
        required: true,
        default: () => [],
    },
    logoSrc: {
        type: String,
        default: "https://storage.googleapis.com/ded-wds-bucket/AUO_LOGO.svg",
    },
    className: {
        type: String,
        default: "",
    },
})
</script>

<template>

    <nav :class="{'navbar':true, [props.className]:!!props.className }">

        <div class="navbar-menu">
            <!-- 公司logo -->
            <Button themeColor="primary" variant="text">
                <Icon :src="props.logoSrc" />
            </Button>
            <!-- links -->
            <ul class="navbar-links">
                <Button
                    v-for="link in props.links"
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
                    prefix="search"
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
                        isShowDot="true"
                        :value="100"
                        :limit="99"
                        className=""
                    >
                        <Icon name="notification" size="26"></Icon>
                    </Badge>
                </div>
            </div>
        </div>

    </nav>


</template>

<style scoped lang="scss">

</style>