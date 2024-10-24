<script setup>
import {markRaw, reactive, ref} from "vue";
// [ PAGE ]
import PageBreadcrumb from "@/page/PageBreadcrumb.vue";
import PageCheckbox from "@/page/PageCheckbox.vue";
import PageImage from "@/page/PageImage.vue";
import PageToast from "@/page/PageToast.vue";
import PageSlider from "@/page/PageSlider.vue";
import PageSliderWithButton from "@/page/PageSliderWithButton.vue";
import PageListItem from "@/page/PageListItem.vue";
import PageList from "@/page/PageList.vue";
import PageDropdown from "@/page/PageDropdown.vue";

import Button from "@/ui/element/Button/Button.vue";
import Toggle from "@/ui/element/Toggle/Toggle.vue";

// import Radio from "@/ui/element/Radio/Radio.vue";
// import RadioGroup from "@/ui/element/Radio/RadioGroup.vue";
import Divider from "@/ui/element/Divider/Divider.vue";
import Textarea from "@/ui/element/Textarea/Textarea.vue";
import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";
import LineProgress from "@/ui/element/Progress/LineProgress/LineProgress.vue";
import Tabs from "@/ui/element/Tabs/Tabs.vue";
// import Avatar from "@/ui/element/Avatar/Avatar.vue";
// import AvatarGroup from "@/ui/element/Avatar/AvatarGroup.vue";
import Menu from "@/ui/element/Menu/Menu.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
// import Slider from "@/ui/element/Slider/old/Slider.vue";
import Input from "@/ui/element/Input/Input.vue";
import TooltipRelative from "@/ui/element/Tooltip/TooltipRelative.vue";
import Tooltip from "@/ui/element/Tooltip/Tooltip.vue";
import Search from "@/ui/module/Search/Search.vue";
import Password from "@/ui/module/Password/Password.vue";

import { useDialogSeparate } from "@/ui/element/Dialog/test/useDialogSeparate.js";
import DialogSeparate from "@/ui/element/Dialog/test/DialogSeparate.vue";
import ModalConfirm from "@/ui/element/Dialog/test/ModalConfirm.vue";
import ModalOverview from "@/ui/element/Dialog/test/ModalOverview.vue";


import Table from "@/ui/element/Table/Table.vue";
import TablePeter from "@/ui/element/Table/TablePeter.vue";
import Tag from "@/ui/element/Tag/Tag.vue";
import Chart from "@/ui/element/Chart/Chart.vue";
import Badge from "@/ui/element/Badge/Badge.vue";
import Datepicker from "@/ui/element/Datepicker/Datepicker.vue";
import Accordion from "@/ui/element/Accordion/Accordion.vue";
import CardOld from "@/ui/element/Card/CardOld.vue";
import Card from "@/ui/element/Card/Card.vue";
import CardHeader from "@/ui/element/Card/CardHeader.vue";
import CardBody from "@/ui/element/Card/CardBody.vue";
import CardFooter from "@/ui/element/Card/CardFooter.vue";
import CardImage from "@/ui/element/Card/CardImage.vue";
import Col from "@/ui/layout/Col/Col.vue";
import Title from "@/ui/element/Title/Title.vue";
import PageDialog from "@/page/PageDialog.vue";



// toggle 所需資料
const isChecked = ref(true);
const handleToggle = () => {
    isChecked.value = !isChecked.value;
};


// radio 所需資料
const radioList = [
    {
        inputId: "meals01",
        name: "Meals",
        value: "Pak Nasser's Nasi Lemak",
        label: "帕南薩馬來椰漿飯",
    },
    {
        inputId: "meals02",
        name: "Meals",
        value: "Hyderabadi Vegetable Biryani",
        label: "海德拉巴素食印度香飯",
    },
    {
        inputId: "meals03",
        name: "Meals",
        value: "Uncle Chin's Chicken Rice",
        label: "秦叔叔海南雞飯",
    },
];
const isRadioPicked = ref("");

// textarea 所需資料
const textareaHint = ref({ error: "", description: "" });
const textareaModelValue = ref("");

// Tabs 所需資料
const TabsData = ref([
    {
        title: "頁籤 1",
        content: "內容一",
    },
    {
        title: "頁籤 2",
        content: "內容二",
    },
    {
        title: "頁籤 3",
        content: "內容三",
    },
]);

// Avatar Group 所需資料
const avatarsData = ref([
    {
        userName: "eason",
    },
    {
        userName: "KevinYang",
    },
    {
        userName: "AmosLee",
        imageSrc: "https://picsum.photos/320/240",
    },
    {
        userName: "JohnWu",
        imageSrc: "https://picsum.photos/320/340",
    },
]);

// Menu 所需資料
const menuData = ref([
    {
        userName: "eason",
    },
    {
        userName: "KevinYang",
    },
    {
        userName: "AmosLee",
        imageSrc: "https://picsum.photos/320/240",
    },
    {
        userName: "JohnWu",
        imageSrc: "https://picsum.photos/320/340",
    },
]);

// Slider-Single 所需資料
// const currentSliderValue = ref(250);
// const currentSliderMinValue = ref(114);
// const currentSliderMaxValue = ref(514);

// Tooltip 所需資料
const tooltipPosValue = ref([
    "top-left",
    "top",
    "top-right",
    "right-top",
    "right",
    "right-bottom",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left-bottom",
    "left",
    "left-top",
]);

// Search 所需資料
const searchInputData = ref("");
const searchHint = ref({ error: "", description: "請輸入關鍵字搜尋" });

// Password 所需資料
const passwordInputData = ref("");
const passwordHint = ref({
    error: "",
    description: "請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號",
});



// Dialog Separate 所需資料
const dialogSeparate = useDialogSeparate();
const openConfirmDialog = () => {
    dialogSeparate.component.value = markRaw(ModalConfirm);
    dialogSeparate.showDialogSeparate();
};
const openOverviewDialog = () => {
    dialogSeparate.component.value = markRaw(ModalOverview);
    dialogSeparate.showDialogSeparate();
};


// Table 所需資料
const columnHeadData = ref([
    { key: "employeeId", label: "員工編號", sort: true },
    { key: "lastName", label: "姓", sort: false },
    { key: "firstName", label: "名", sort: true },
    { key: "email", label: "E-Mail", sort: true },
    { key: "gender", label: "性別", sort: true },
    { key: "position", label: "職位", sort: true },
]);
const columnCellData = ref([
    {
        employeeId: "CN-0021",
        firstName: "Amos",
        lastName: "Takatani",
        email: "amos@example.com",
        gender: "man",
        position: "Manager",
    },
    {
        employeeId: "CN-0090",
        firstName: "Kevin",
        lastName: "Yen",
        email: "kevin@example.com",
        gender: "man",
        position: "IT Support",
    },
    {
        employeeId: "CN-0100",
        firstName: "Jenny",
        lastName: "Wilson",
        email: "jenny@example.com",
        gender: "woman",
        position: "UI/UX",
    },
]);

// Tag 所需資料

const tagsData = ref([
	{ id: 1, label: 'Tag 1', iconName: 'home' },
	{ id: 2, label: 'Tag 2' },
]);
const removeTag = (id) => {
	tagsData.value = tagsData.value.filter(tag => tag.id !== id);
};

// chart 所需資料
// const chartData = reactive({
// 	// 橫軸上的分類
// 	labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
// 	datasets: [
// 		{
// 			// label 為資料分類的名稱
// 			label: "commit1",
// 			// data 為資料內容，是一個陣列，相同 index 的數值會放在同一個橫軸的分類區間
// 			data: [10, 20, 30, 50, 40, 30, 10],
// 		},
// 		{
// 			// label 為資料分類的名稱
// 			label: "commit2",
// 			// data 為資料內容，是一個陣列，相同 index 的數值會放在同一個橫軸的分類區間
// 			data: [140, 202, 230, 504, 420, 310, 140],
// 		},
// 		{
// 			// label 為資料分類的名稱
// 			label: "commit3",
// 			// data 為資料內容，是一個陣列，相同 index 的數值會放在同一個橫軸的分類區間
// 			data: [10, 252, 99, 59, 406, 350, 99],
// 		},
//
// 	],
// });
//
// const updateData = () => {
// 	chartData.datasets[0].data = chartData.datasets[0].data.map((d) => d + 50);
// };

// accordion 所需資料
// const accordionItems = ref([
// 	{
// 		title: "Apples",
// 		expanded: false,
// 		contents: [
// 			"Apples are a fine fruit often associated with good health, and fewer doctor's appointments.",
// 			"Example: An apple a day keeps the doctor away.",
// 		],
// 	},
// 	{
// 		title: "Lemons",
// 		expanded: false,
// 		contents: [
// 			"Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.",
// 			"Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon.",
// 		],
// 	},
// 	{
// 		title: "Kiwis",
// 		expanded: false,
// 		contents: ["Kiwis are a fun, under-appreciated fruit.",
// 			"Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.",
// 			"Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon.",
// 			"Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.",
// 			"Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon.",
// 			"Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.",
// 			"Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon.",],
// 	},
// ]);
</script>

<template>
    <div class="container">
        <!-- Image -->
        <div style="width: 250px; height: 250px">
            <PageImage/>
        </div>

        <!-- Toggle -->
        <div>
            <Toggle
                checkChildren="on"
                unCheckChildren="off"
                :isChecked="isChecked"
                @toggleIsChecked="handleToggle"
            >
            </Toggle>
        </div>

        <!-- Checkbox -->
        <PageCheckbox/>

        <!-- Radio -->
        <div>
            isRadioPicked>>> {{ isRadioPicked }}
            <br />
            <Radio-Group>
                <Radio
                    v-for="item in radioList"
                    :inputId="item.inputId"
                    :name="item.name"
                    :value="item.value"
                    :label="item.label"
                    v-model="isRadioPicked"
                ></Radio>
            </Radio-Group>
        </div>

        <!-- Divider -->
        <div class="">
            <Divider
                layout="horizontal"
                type="dashed"
                width="small"
                align="center"
                >OR</Divider
            >
        </div>

        <!-- Textarea -->
<!--        <div>-->
<!--            <p>textarea model value: {{ textareaModelValue }}</p>-->
<!--            <Textarea-->
<!--                label="訂單備註"-->
<!--                placeholder="請輸入此筆訂單備註"-->
<!--                :hint="textareaHint"-->
<!--                v-model="textareaModelValue"-->
<!--            ></Textarea>-->
<!--        </div>-->

        <!-- CircleProgress -->
<!--        <div>-->
<!--            <CircleProgress-->
<!--                label="Something"-->
<!--                :percent="66"-->
<!--                :size="120"-->
<!--                :strokeWidth="10"-->
<!--                themeColor="primary"-->
<!--            ></CircleProgress>-->
<!--        </div>-->

        <!-- LineProgress -->
<!--        <div>-->
<!--            <LineProgress-->
<!--                label="Complete"-->
<!--                :percent="66"-->
<!--                :strokeWidth="10"-->
<!--                themeColor="primary"-->
<!--            ></LineProgress>-->
<!--        </div>-->

        <!-- Tabs -->
<!--        <div>-->
<!--            <Tabs-->
<!--                themeColor="primary"-->
<!--                type="default"-->
<!--                :tabsData="TabsData"-->
<!--                :activeIndex="0"-->
<!--            ></Tabs>-->
<!--        </div>-->

        <!-- Menu -->
<!--        <div>-->
<!--            <Menu :menuData="menuData">-->
<!--                <li class="menu-item" v-for="menu in menuData">-->
<!--                    <Avatar-->
<!--                        size="xsmall"-->
<!--                        shape="circle"-->
<!--                        :imageSrc="menu.imageSrc"-->
<!--                        :username="menu.userName"-->
<!--                        imageAlt="alt text"-->
<!--                    ></Avatar>-->
<!--                    <div style="margin-right: auto">{{ menu.userName }}</div>-->
<!--                    <Icon name="arrow_down" size="24"></Icon>-->
<!--                </li>-->
<!--            </Menu>-->
<!--            <Menu :menuData="menuData"> </Menu>-->
<!--        </div>-->

        <!-- Avatar -->
<!--        <div>-->
<!--            <Avatar-->
<!--                size="large"-->
<!--                shape="circle"-->
<!--                imageSrc="src/assets/fakeImg/avatar_01.jpg"-->
<!--                imageAlt="alt text"-->
<!--                username="jony wu"-->
<!--                status="offline"-->
<!--            ></Avatar>-->
<!--            <AvatarGroup-->
<!--                :avatarsData="avatarsData"-->
<!--                size="large"-->
<!--                shape="circle"-->
<!--                :limit="3"-->
<!--            ></AvatarGroup>-->
<!--        </div>-->

        <!-- Slider -->
<!--        <div>-->
<!--            <h2>Single Slider</h2>-->
<!--            <Slider-->
<!--                :sliderMinVal="0"-->
<!--                :sliderMaxVal="5000"-->
<!--                themeColor="error"-->
<!--                thumbSize="20"-->
<!--                v-model="currentSliderValue"-->
<!--            ></Slider>-->
<!--            <Input type="number" v-model="currentSliderValue" />-->
<!--            <h2>Double Slider</h2>-->
<!--            <Slider-->
<!--                :sliderMinVal="0"-->
<!--                :sliderMaxVal="5000"-->
<!--                themeColor="info"-->
<!--                thumbSize="20"-->
<!--                v-model:currentSliderMinValue="currentSliderMinValue"-->
<!--                v-model:currentSliderMaxValue="currentSliderMaxValue"-->
<!--                range-->
<!--            ></Slider>-->
<!--            <div style="display: flex; gap: 16px">-->
<!--                <Input-->
<!--                    label="起始數值"-->
<!--                    type="number"-->
<!--                    v-model="currentSliderMinValue"-->
<!--                    style="flex-grow: 1"-->
<!--                />-->
<!--                <Input-->
<!--                    label="結束數值"-->
<!--                    type="number"-->
<!--                    v-model="currentSliderMaxValue"-->
<!--                    style="flex-grow: 1"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->

        <!-- Tooltip -->
<!--        <div-->
<!--            style="-->
<!--                width: 500px;-->
<!--                display: flex;-->
<!--                align-items: center;-->
<!--                flex-wrap: wrap;-->
<!--                gap: 40px;-->
<!--                margin: 56px;-->
<!--            "-->
<!--        >-->
<!--            <TooltipRelative-->
<!--                v-for="item in tooltipPosValue"-->
<!--                :content="`Tooltip on ${item}`"-->
<!--                :placement="item"-->
<!--                :showArrow="true"-->
<!--            >-->
<!--                &lt;!&ndash; 被 tooltip 包裹的資料 &ndash;&gt;-->
<!--                <div-->
<!--                    style="-->
<!--                        width: 100px;-->
<!--                        height: 100px;-->
<!--                        display: flex;-->
<!--                        flex-direction: column;-->
<!--                        align-items: center;-->
<!--                        justify-content: center;-->
<!--                        border-radius: 12px;-->
<!--                        border: 2px solid #533bd4;-->
<!--                        color: #533bd4;-->
<!--                        padding: 8px;-->
<!--                    "-->
<!--                >-->
<!--                    Hover<br />-->
<!--                    <p style="font-size: 12px">- {{ item }} -</p>-->
<!--                </div>-->
<!--            </TooltipRelative>-->
<!--        </div>-->
<!--        <TooltipRelative-->
<!--            content="Hi, Hi~ Nice to meet you!"-->
<!--            placement="top-left"-->
<!--        >-->
<!--            <Button variant="contained" size="medium" prefix="face"-->
<!--                >Hover Me</Button-->
<!--            >-->
<!--        </TooltipRelative>-->

        <!-- Search -->
<!--        <div>-->
<!--            <Search-->
<!--                placeholder="請輸入關鍵字"-->
<!--                size="medium"-->
<!--                inputLabel="搜尋關鍵字"-->
<!--                btnVariant="contained"-->
<!--                btnColor="primary"-->
<!--                v-model="searchInputData"-->
<!--                :hint="searchHint"-->
<!--            ></Search>-->
<!--            {{ searchInputData }}-->
<!--        </div>-->

        <!-- Password -->
<!--        <div>-->
<!--            <Password-->
<!--                label="登入密碼"-->
<!--                placeholder="請輸入密碼"-->
<!--                size="medium"-->
<!--                v-model="passwordInputData"-->
<!--                :hint="passwordHint"-->
<!--            ></Password>-->
<!--        </div>-->

        <!-- TooltipTeleport -->
<!--        <Tooltip placement="right">-->
<!--            <Button variant="contained" size="large" prefix="face"-->
<!--                >Hover Me</Button-->
<!--            >-->
<!--            <template #content> Hi, Hi~ Nice to meet you! </template>-->
<!--        </Tooltip>-->
<!--        <br />-->
	    <!-- Toast -->
		<PageToast/>

        <!-- Dialog Separate -->
<!--        <DialogSeparate></DialogSeparate>-->
<!--        <Button @click="openConfirmDialog">Open confirm modal</Button>-->
<!--        <Button @click="openOverviewDialog">Open confirm modal</Button>-->

        <!-- Dialog（可帶自訂樣式） -->
        <PageDialog></PageDialog>

        <!-- Breadcrumb -->
        <PageBreadcrumb></PageBreadcrumb>

        <!-- Table -->
        <Table
            :columnHeadData="columnHeadData"
            :columnCellData="columnCellData"
            :rowSelector="false"
        >
            <!-- 自訂義 table cell方法 -->
            <!-- <template #firstName="{ item }">
                <span>
                    {{ item }}
                    <button>點擊</button>
                </span>
            </template> -->
            <!-- 自訂義 table head 方法 -->
            <!-- <template #columnHead-employeeId="{ item }">hahahahahha </template> -->
        </Table>

	    <TablePeter
		    :columnHeadData="columnHeadData"
	    :columnCellData="columnCellData"
	    :rowSelector="false">

	    </TablePeter>


        <!-- Tag -->
	    <Tag label="label name" iconName="face" themeColor="primary"></Tag>
	    <div style="display:flex; gap: 8px;">
		    <Tag
			    v-for="tag in tagsData"
			    :key="tag.id"
			    :label="tag.label"
			    :removable="true"
			    :iconName="tag.iconName"
			    @remove="removeTag(tag.id)"></Tag>
	    </div>


		<!--Chart-->
	    <Chart :chartdata="chartData"></Chart>
	    <button @click="updateData">更新 Chart</button>
		<br/>
		<!--Badge-->
<!--	    <Badge content="999" placement="top-right" isDot withIcon>-->
<!--		    <Icon name="notification" size="28"></Icon>-->
<!--	    </Badge>-->

	    <br/>

	    <!--Badge-->

	    <!--Badge - 行內 -->

	    <Badge badgeLabel="99"><h1>Example Title</h1></Badge>
	    <br/>
	    <Badge isDot><p>Jon Hopkins – Immunity</p></Badge>
	    <br/>
	    <!--Badge - 區塊 -->
	    <Badge badgeLabel="9" :maxValue="999" position="top-right">
		    <Button size="medium" prefix="home">click</Button>
	    </Badge>

	    <br/>

	    <Badge badgeLabel="100" :maxValue="99" position="top-right" isIcon>
		    <Icon name="notification" size="26"></Icon>
	    </Badge>
		<br>
	    <Badge badgeLabel="9" position="top-right" isIcon isDot>
		    <Icon name="notification" size="26"></Icon>
	    </Badge>

	    <!--Datepicker-->
	    <Datepicker ></Datepicker>

	    <!-- Accordion -->
	    <Accordion :data="accordionItems"></Accordion>

	    <!-- Card -->
	    <!-- Card 排列方向 row -->
	    <Card elevation="high" direction="row">
		    <Col col="4">
			    <CardImage>
			    </CardImage>
		    </Col>

		    <Col col="8">
			    <CardBody clamp="3">
			    </CardBody>
		    </Col>
	    </Card>
	    <!-- Card 排列方向 col -->
	    <Card elevation="high" direction="col">
		    <CardHeader>
		    </CardHeader>

		    <CardImage>
		    </CardImage>

		    <CardBody clamp="3">
		    </CardBody>

		    <CardFooter divider>
		    </CardFooter>
	    </Card>

		<Title level="2">sdfsdf</Title>

	    <PageSlider></PageSlider>

<!--	    <PageSliderWithButton></PageSliderWithButton>-->

	    <PageListItem></PageListItem>

	    <PageList></PageList>

	    <PageDropdown></PageDropdown>

    </div>
</template>

<style scoped>
.container {
    padding: 150px;
}
</style>
