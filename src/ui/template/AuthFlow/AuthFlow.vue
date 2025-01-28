<script setup>
import Layout, { Content } from '@/ui/layout/Layout'
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Divider from "@/ui/element/Divider/Divider.vue"
import Title from "@/ui/element/Title/Title.vue"

// 定義 props
const props = defineProps({
    bgColorSrc: {
        type: String,
        default: "",
    },
    bgImgSrc: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        default: "",
    },
    className: {
        type: String,
        default: "",
    },
})
</script>

<template>
    <Layout class="h-screen">
        <Content >
            <Grid>
                <Row>
                    <!--左側圖片-->
                    <Column md="12" lg="5">
                        <div class="ded-login-bg"
                             :style="{
                                backgroundImage: props.bgImgSrc ? `url(${props.bgImgSrc})` : 'none',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                             }">
                        </div>
                    </Column>

                    <Column md="12" lg="7">
                        <div class="ded-login-content">

                            <Grid fluid>
                                <!-- 標題 -->
                                <Row hasGap>
                                    <Column md="12">
                                        <Title :level="1">{{ props.title }}</Title>
                                    </Column>
                                </Row>

                                <!-- 描述 -->
                                <Row v-if="$slots.description" hasGap>
                                    <Column md="12">
                                        <slot name="description">
                                        </slot>
                                    </Column>
                                </Row>
                            </Grid>


                            <!-- 登入表單 -->
                            <slot name="form" />

                            <!-- 第三方登入? 分隔線-->
                            <Divider
                                v-if="$slots.externalLinks"
                                width="1px"
                                type="solid"
                                direction="horizontal"
                                align="center"
                                className=""
                            >
                                Or
                            </Divider>

                            <!-- 第三方登入 -->
                            <slot name="externalLinks" />

                            <!-- 註冊連結 -->
                            <slot name="signUp" />
                        </div>
                    </Column>
                </Row>
            </Grid>
        </Content>
    </Layout>
</template>

<style scoped lang="scss">

</style>