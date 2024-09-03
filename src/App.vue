<script setup>
import { ref } from "vue";
import Button from "@/ui/element/Button/Button.vue";
import Toggle from "@/ui/element/Toggle/Toggle.vue";
import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/ui/element/Checkbox/CheckboxGroup.vue";
import Radio from "@/ui/element/Radio/Radio.vue";
import RadioGroup from "@/ui/element/Radio/RadioGroup.vue";
import Divider from "@/ui/element/Divider/Divider.vue";
import Textarea from "@/ui/element/Textarea/Textarea.vue";
import CircleProgress from "@/ui/element/Progress/CircleProgress/CircleProgress.vue";
import LineProgress from  "@/ui/element/Progress/LineProgress/LineProgress.vue";
import Tabs from  "@/ui/module/Tabs/Tabs.vue";
import Avatar from  "@/ui/element/Avatar/Avatar.vue";
import AvatarGroup from  "@/ui/element/Avatar/AvatarGroup.vue";
import Menu from  "@/ui/element/Menu/Menu.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Slider from "@/ui/element/Slider/Slider.vue";
import Input from "@/ui/element/Input/Input.vue";
import TooltipRelative from "@/ui/element/Tooltip/TooltipRelative.vue";
import Tooltip from "@/ui/element/Tooltip/Tooltip.vue";
import Search from "@/ui/module/Search/Search.vue";
import Password from "@/ui/module/Password/Password.vue";
import Toast from "@/ui/element/Toast/Toast.vue";
import { useToast } from '@/ui/element/Toast/useToast';



// toggle 所需資料
const isChecked = ref(true);
const handleToggle = () => {
    isChecked.value = !isChecked.value;
};

// checkbox 所需資料
const checkboxOptions = ref([
    { label: "選項一", value: "option1", name: "option" },
    { label: "選項二", value: "option2", name: "option" },
    { label: "選項三", value: "option3", name: "option" },
    { label: "選項四", value: "option4", name: "option" },
]);
const checkedCheckboxOptions = ref([]);
const isCheckboxChecked = ref(false);

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
const textareaHint = ref({ error: '', description: '' });
const textareaModelValue =ref("");

// Tabs 所需資料
const TabsData = ref([
  {
    "title": "頁籤 1",
    "content": "內容一"
  },
  {
    "title": "頁籤 2",
    "content": "內容二"
  },
  {
    "title": "頁籤 3",
    "content": "內容三"
  }
]);

// Avatar Group 所需資料
const avatarsData = ref([
	{
	"userName": "eason",
	},
	{
	"userName": "KevinYang",
	},
	{
	"userName": "AmosLee",
	"imageSrc": "https://picsum.photos/320/240"
	},
	{
	"userName": "JohnWu",
	"imageSrc": "https://picsum.photos/320/340"
	}
])

// Menu 所需資料
const menuData = ref([
	{
	"userName": "eason",
	},
	{
	"userName": "KevinYang",
	},
	{
	"userName": "AmosLee",
	"imageSrc": "https://picsum.photos/320/240"
	},
	{
	"userName": "JohnWu",
	"imageSrc": "https://picsum.photos/320/340"
	}
])

// Slider-Single 所需資料
const currentSliderValue = ref(250);
const currentSliderMinValue  = ref(114);
const currentSliderMaxValue  = ref(514);

// Tooltip 所需資料
const tooltipPosValue = ref([
	'top-left', 'top', 'top-right',
	'right-top', 'right', 'right-bottom',
	'bottom-right', 'bottom', 'bottom-left',
	'left-bottom', 'left', 'left-top',
]);

// Search 所需資料
const searchInputData = ref("");
const searchHint = ref({ error: '', description: '請輸入關鍵字搜尋' });

// Password 所需資料
const passwordInputData = ref("");
const passwordHint = ref({ error: '', description: '請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號' });

// Toast 所需資料
const { add, toasts } = useToast();

const showSuccess = () => {
	add({
		message: 'Success Message',
		themeColor: 'success',
		life: 3000
	});
};
const showfuck = () => {
	add({
		message: 'fuck',
		themeColor: 'error',
		life: 3000
	});
};
</script>

<template>
    <div class="container">
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
        <div>
            {{ isCheckboxChecked }}
            {{ checkedCheckboxOptions }}
            <br />
            <Checkbox
                label="我已詳細閱讀新規定"
                name="agreeStatement"
                v-model="isCheckboxChecked"
            ></Checkbox>

            <Checkbox-Group>
                <Checkbox
                    v-for="(item, index) in checkboxOptions"
                    :key="index"
                    :value="item.value"
                    :label="item.label"
                    :name="item.name"
                    v-model="checkedCheckboxOptions"
                ></Checkbox>
            </Checkbox-Group>
        </div>

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
        <div>
            <p>textarea model value: {{textareaModelValue}}</p>
            <Textarea
                label="訂單備註"
                placeholder="請輸入此筆訂單備註"
                :hint="textareaHint"
                v-model="textareaModelValue"
            ></Textarea>
        </div>

        <!-- CircleProgress -->
        <div>
            <CircleProgress
                label="Something"
                :percent="66"
                :size="120"
                :strokeWidth="10"
                themeColor="primary"
            ></CircleProgress>
        </div>

        <!-- LineProgress -->
        <div>
            <LineProgress
                label="Complete"
                :percent="66"
                :strokeWidth="10"
                themeColor="primary"
            ></LineProgress>
        </div>

        <!-- Tabs -->
        <div>
            <Tabs
                themeColor="primary"
                type="default"
                :tabsData="TabsData"
                :activeIndex="0"
            ></Tabs>
        </div>

        <!-- Menu -->
        <div>
            <Menu :menuData="menuData">
                <li class="menu-item" v-for="(menu) in menuData">
                    <Avatar
                        size="xsmall"
                        shape="circle"
                        :imageSrc="menu.imageSrc"
                        :username="menu.userName"
                        imageAlt="alt text"
                    ></Avatar>
                    <div style="margin-right: auto;">{{menu.userName}}</div>
                    <Icon name="arrow_down" size="24" ></Icon>
                </li>
            </Menu>
            <Menu :menuData="menuData">
            </Menu>
        </div>

        <!-- Avatar -->
        <div>
            <Avatar
                size="large"
                shape="circle"
                imageSrc="src/assets/fakeImg/avatar_01.jpg"
                imageAlt="alt text"
                username="jony wu"
                status="offline"
            ></Avatar>
            <AvatarGroup
	            :avatarsData="avatarsData"
	            size="large"
	            shape="circle"
	            :limit="3"
            ></AvatarGroup>
        </div>

	    <!-- Slider -->
	    <div>
		    <h2>Single Slider</h2>
			<Slider
				:sliderMinVal=0
				:sliderMaxVal=5000
				themeColor="error"
				thumbSize="20"
				v-model="currentSliderValue"
			></Slider>
		    <Input type="number" v-model="currentSliderValue"/>
		    <h2>Double Slider</h2>
		    <Slider
			    :sliderMinVal=0
			    :sliderMaxVal=5000
			    themeColor="info"
			    thumbSize="20"
			    v-model:currentSliderMinValue="currentSliderMinValue"
			    v-model:currentSliderMaxValue="currentSliderMaxValue"
			    range
		    ></Slider>
		    <div style="display:flex; gap: 16px;">
			    <Input label="起始數值" type="number" v-model="currentSliderMinValue" style="flex-grow: 1"/>
			    <Input label="結束數值" type="number" v-model="currentSliderMaxValue" style="flex-grow: 1"/>
		    </div>
	    </div>

	    <!-- Tooltip -->
	    <div style="
		    width: 500px;
		    display: flex;
		    align-items: center;
		    flex-wrap: wrap;
		    gap: 40px;
			margin: 56px" >
		    <TooltipRelative
			    v-for="(item) in tooltipPosValue"
			    :content="`Tooltip on ${item}`"
			    :placement="item"
			    :showArrow=true>
			    <!-- 被 tooltip 包裹的資料 -->
			    <div
				    style="
				    width: 100px;
				    height: 100px;
				    display: flex;
				    flex-direction: column;
				    align-items: center;
				    justify-content: center;
				    border-radius: 12px;
				    border: 2px solid #533bd4;
				    color: #533bd4;
				    padding: 8px;"
			    >
				    Hover<br>
				    <p style="font-size: 12px;">
					   - {{item}} -
				    </p>
			    </div>
		    </TooltipRelative>
		</div>
		<TooltipRelative content="Hi, Hi~ Nice to meet you!"
		         placement="top-left">
			<Button variant="contained" size="medium" prefix="face">Hover Me</Button>
		</TooltipRelative>

	    <!-- Search -->
	    <div>
		    <Search
			    placeholder="請輸入關鍵字"
			    size="medium"
			    inputLabel="搜尋關鍵字"
			    btnVariant="contained"
			    btnColor="primary"
			    v-model="searchInputData"
			    :hint="searchHint"
		    ></Search>
		    {{searchInputData}}
	    </div>

	    <!-- Password -->
	    <div>
		    <Password
			    label="登入密碼"
			    placeholder="請輸入密碼"
			    size="medium"
			    v-model="passwordInputData"
			    :hint="passwordHint"
		    ></Password>
	    </div>

	    <!-- TooltipTeleport -->
	    <Tooltip placement="right">
		    <Button variant="contained" size="large" prefix="face" >Hover Me</Button>
		    <template #content>
			    Hi, Hi~ Nice to meet you!
		    </template>
	    </Tooltip>
	    <br>

		<!-- Toast -->
	    <button @click="showSuccess">Show Success Toast</button>
	    <button @click="showfuck">Show Success Toast</button>
	    <Toast
		    v-for="(toast, index) in toasts"
		    :key="index"
		    :message="toast.message"
		    :duration="toast.life"
		    :themeColor="toast.themeColor"
		    :show="true"
	    />
{{toasts}}
<!--	    <Button label="Show" @click="show()" />-->
<!--	    <ToastManager ref="toastManager" />-->


    </div>
</template>

<style scoped>
.container {
    padding: 150px;
}
</style>


