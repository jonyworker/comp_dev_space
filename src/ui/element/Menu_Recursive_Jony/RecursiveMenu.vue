<script setup>
import Icon from "@/ui/element/Icon/Icon.vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    isCollapsed: {
        type: Boolean,
        required: true,
        default: false,
    },
    color: {
        type: String,
        default: "#000",
    },
    expandedItems: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["navItemClick", "toggleExpand"]);

// 處理菜單點擊
const handleItemClick = (item) => {
    emit("navItemClick", item);
    if (item.children) {
        emit("toggleExpand", item.path); // 告知父元件切換展開狀態
    }
};
</script>

<template>
    <li>
        <!-- 菜單項 -->
        <div
            class="menu-item"
            @click.stop="handleItemClick(props.item)"
            :style="`color:${props.color}`"
        >
            <div class="menu-item-content" style="min-height: 24px;">
                <template v-if="props.item.icon">
                    <Icon class="menu-item-content-icon" :name="props.item.icon" size="20" />
                </template>

                <span
                    class="menu-item-content-title"
                    :style="!props.isCollapsed ? 'opacity: 1; display: block' : 'opacity: 0; display: none'"
                >
          {{ props.item.label }}
        </span>

                <template v-if="!props.isCollapsed && props.item.children">
                    <Icon
                        class="menu-item-content-icon"
                        :name="props.expandedItems[props.item.path] ? 'chevronUp' : 'chevronDown'"
                        size="16"
                    />
                </template>
            </div>
        </div>

        <!-- 子菜單 -->
        <ul
            class="menu-subitem"
            v-if="
        !props.isCollapsed &&
        props.item.children &&
        props.expandedItems[props.item.path]
      "
        >
            <RecursiveMenu
                v-for="child in props.item.children"
                :key="child.path"
                :item="child"
                :isCollapsed="props.isCollapsed"
                :color="props.color"
                :expandedItems="props.expandedItems"
                @navItemClick="$emit('navItemClick', $event)"
                @toggleExpand="$emit('toggleExpand', $event)"
            />
        </ul>
    </li>
</template>

<style scoped lang="scss">
/* 適當樣式可以根據需要定義 */
</style>
