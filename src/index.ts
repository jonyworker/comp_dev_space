import Accordion from './ui/element/Accordion/Accordion.vue';
import Avatar from './ui/element/Avatar/Avatar.vue';
import AvatarGroup from './ui/element/AvatarGroup/AvatarGroup.vue';
import Badge from './ui/element/Badge/Badge.vue';
import Breadcrumb from './ui/element/Breadcrumb/Breadcrumb.vue';
import Button from './ui/element/Button/Button.vue';
import Card from './ui/element/Card/Card.vue';
import CardSimple from './ui/element/CardSimple/CardSimple.vue';
import Checkbox from './ui/element/Checkbox/Checkbox.vue';
import DatePicker from './ui/element/DatePicker/DatePicker.vue';
import Dialog from './ui/element/Dialog/Dialog.vue';
import Divider from './ui/element/Divider/Divider.vue';
import Dropdown from './ui/element/Dropdown/Dropdown.vue';
import Icon from './ui/element/Icon/Icon.vue';
import Image from './ui/element/Image/Image.vue';
import Input from './ui/element/Input/Input.vue';
import List from './ui/element/List/List.vue';
import Menu from './ui/element/Menu/Menu.vue';
import Navbar from './ui/element/Navbar/Navbar.vue';
import Pagination from './ui/element/Pagination/Pagination.vue';
import CircleProgress from './ui/element/Progress/CircleProgress/CircleProgress.vue';
import LineProgress from './ui/element/Progress/LineProgress/LineProgress.vue';
import Radio from './ui/element/Radio/Radio.vue';
import Search from './ui/element/Search/Search.vue';
import Select from './ui/element/Select/Select.vue';
import SideNav from './ui/element/SideNav/SideNav.vue';
import Slider from './ui/element/Slider/Slider.vue';
import SliderControl from './ui/element/SliderControl/SliderControl.vue';
import StatusIndicator from './ui/element/StatusIndicator/StatusIndicator.vue';
import Stepper from './ui/element/Stepper/Stepper.vue';
import Table from './ui/element/Table/Table.vue';
import Tabs from './ui/element/Tabs/Tabs.vue';
import Tag from './ui/element/Tag/Tag.vue';
import Textarea from './ui/element/Textarea/Textarea.vue';
import Title from './ui/element/Title/Title.vue';
import Toast from './ui/element/Toast/Toast.vue';
import Toggle from './ui/element/Toggle/Toggle.vue';
import Tooltip from './ui/element/Tooltip/Tooltip.vue';
import Column from './ui/layout/Grid/Column.vue';
import Grid from './ui/layout/Grid/Grid.vue';
import Row from './ui/layout/Grid/Row.vue';
import Content from './ui/layout/Layout/Content.vue';
import Footer from './ui/layout/Layout/Footer.vue';
import Header from './ui/layout/Layout/Header.vue';
import Side from './ui/layout/Layout/Side.vue';
import Layout from './ui/layout/Layout/index.vue';
import { useToast } from './composables/useToast';

export {
	Accordion,
	Avatar,
	AvatarGroup,
	Badge,
	Breadcrumb,
	Button,
	Card,
	CardSimple,
	Checkbox,
	DatePicker,
	Dialog,
	Divider,
	Dropdown,
	Icon,
	Image,
	Input,
	List,
	Menu,
	Navbar,
	Pagination,
	CircleProgress,
	LineProgress,
	Radio,
	Search,
	Select,
	SideNav,
	Slider,
	SliderControl,
	StatusIndicator,
	Stepper,
	Table,
	Tabs,
	Tag,
	Textarea,
	Title,
	Toast,
	Toggle,
	Tooltip,
	Column,
	Grid,
	Row,
	Content,
	Footer,
	Header,
	Side,
	Layout,
	useToast,
};


const components = [
	{ key: 'Accordion', value: Accordion },
	{ key: 'Avatar', value: Avatar },
	{ key: 'AvatarGroup', value: AvatarGroup },
	{ key: 'Badge', value: Badge },
	{ key: 'Breadcrumb', value: Breadcrumb },
	{ key: 'Button', value: Button },
	{ key: 'Card', value: Card },
	{ key: 'CardSimple', value: CardSimple },
	{ key: 'Checkbox', value: Checkbox },
	{ key: 'DatePicker', value: DatePicker },
	{ key: 'Dialog', value: Dialog },
	{ key: 'Divider', value: Divider },
	{ key: 'Dropdown', value: Dropdown },
	{ key: 'Icon', value: Icon },
	{ key: 'Image', value: Image },
	{ key: 'Input', value: Input },
	{ key: 'List', value: List },
	{ key: 'Menu', value: Menu },
	{ key: 'Navbar', value: Navbar },
	{ key: 'Pagination', value: Pagination },
	{ key: 'CircleProgress', value: CircleProgress },
	{ key: 'LineProgress', value: LineProgress },
	{ key: 'Radio', value: Radio },
	{ key: 'Search', value: Search },
	{ key: 'Select', value: Select },
	{ key: 'SideNav', value: SideNav },
	{ key: 'Slider', value: Slider },
	{ key: 'SliderControl', value: SliderControl },
	{ key: 'StatusIndicator', value: StatusIndicator },
	{ key: 'Stepper', value: Stepper },
	{ key: 'Table', value: Table },
	{ key: 'Tabs', value: Tabs },
	{ key: 'Tag', value: Tag },
	{ key: 'Textarea', value: Textarea },
	{ key: 'Title', value: Title },
	{ key: 'Toast', value: Toast },
	{ key: 'Toggle', value: Toggle },
	{ key: 'Tooltip', value: Tooltip },
	{ key: 'Column', value: Column },
	{ key: 'Grid', value: Grid },
	{ key: 'Row', value: Row },
	{ key: 'Content', value: Content },
	{ key: 'Footer', value: Footer },
	{ key: 'Header', value: Header },
	{ key: 'Side', value: Side },
	{ key: 'Layout', value: Layout }
];

// export default {
// 	install(app) {
// 		components.forEach(component => {
// 			app.component(component.key, component.value);
// 		});
// 	},
// };

export const install = (app) => {
	components.forEach(component => {
		app.component(component.key, component.value);
	});
}

// 新增一個包含 install 方法的物件作為具名導出
export const dedWdsVue = {
	install
};

/*
這樣您就可以用以下方式來使用您的組件庫：
import { createApp } from 'vue';
import { plugin } from 'your-library';  // 引入 plugin
import App from './App.vue';

const app = createApp(App);
app.use(plugin);  // 使用 app.use()
app.mount('#app');

或者也可以這樣寫：
import { createApp } from 'vue';
import * as YourLibrary from 'your-library';  // 引入所有導出
import App from './App.vue';

const app = createApp(App);
app.use(YourLibrary.plugin);  // 使用 app.use()
app.mount('#app');
*/