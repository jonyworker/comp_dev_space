<script setup>
import { ref } from "vue";
import Layout, { Header, Content, Side, Footer } from '@/ui/layout/Layout'
import Grid from "@/ui/layout/Grid/Grid.vue"
import Row from "@/ui/layout/Grid/Row.vue"
import Column from "@/ui/layout/Grid/Column.vue"
import Divider from "@/ui/element/Divider/Divider.vue"
import Title from "@/ui/element/Title/Title.vue"

// 定義 Model
// const modelValue = defineModel();

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
    description: {
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
                            <!--標題描述-->
                            <Grid fluid>
                                <Row>
                                    <Column md="12">
                                        <Title :level="1">{{ props.title }}</Title>
                                    </Column>
                                </Row>
                                <template v-if="props.description">
                                    <Row>
                                        <Column md="12">
                                            <p class="text-neutral-700">{{ props.description }}</p>
                                        </Column>
                                    </Row>
                                </template>
                            </Grid>

                            <!--登入表單-->

                            <!-- 第三方登入? 分隔線-->
                            <Divider
                                width="1px"
                                type="solid"
                                direction="horizontal"
                                align="center"
                                className=""
                            >
                                Or
                            </Divider>

                            <!--第三方登入-->

                            <!--註冊連結-->
                        </div>
                    </Column>
                </Row>
            </Grid>
        </Content>
    </Layout>
</template>

<style scoped lang="scss">

</style>