<script setup>
import Button from '@/ui/element/Button/Button.vue'
import Icon from "@/ui/element/Icon/Icon.vue";

const modelValue = defineModel();

defineProps({
    hasClose: {
        type: Boolean,
        default: false,
    },
    className: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <Teleport to="#dialog">
        <transition name="dialog">
            <div class="mask-overlay" v-if="modelValue" @click.self="modelValue = false">
                <div :class="{'ded-dialog-content': true, [className]: !!className}" >

                    <template v-if="hasClose === true">
                        <button class="ded-dialog-close-btn" @click="modelValue = false">
                            <Icon name="SvgClose" size="20"></Icon>
                        </button>
                    </template>

                    <div class="ded-dialog-header">
                        <slot name="header"></slot>
                    </div>

                    <div class="ded-dialog-body">
                        <slot name="content"></slot>
                    </div>

                    <div class="ded-dialog-footer">
                        <slot name="footer">
                            <Button variant="contained" size="medium" className="ded-cancel-btn" @click="modelValue = false">
                                Cancel
                            </Button>
                            <Button variant="contained" themeColor="primary" size="medium">
                                OK
                            </Button>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>
