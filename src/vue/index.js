import locale from './locale/index';
import libs from './../common/lib';
import container from './container';

import CircleProgress from './components/CircleProgress.vue';
import Badge from './components/Badge';
import Label from './components/Label';
import Icon from './components/Icon.vue';
import Button from './components/button';
import Overview from './components/Overview.vue';
import Portlet from './components/Portlet.vue';
import Swiper from './components/swiper';
import Progress from './components/Progress.vue';
import SearchBox from './components/SearchBox.vue';
import DatePicker from './components/datePicker';
import Form from './components/form/Form.vue';
import FormItem from './components/form/FormItem.vue';
import Column from './components/grid/Column.vue';
import Row from './components/grid/Row.vue';
import Input from './components/input/Input.vue';
import InputNumber from './components/input/InputNumber.vue';
import Radio from './components/input/Radio.vue';
import RadioGroup from './components/input/RadioGroup.vue';
import Menu from './components/menu/Menu.vue';
import MenuItem from './components/menu/MenuItem.vue';
import SubMenu from './components/menu/SubMenu.vue';
import Drop from './components/dropdown/Drop.vue';
import InfoList from './components/infoList/InfoList';
import InfoItem from './components/infoList/InfoItem';
import Dropdown from './components/dropdown/Dropdown.vue';
import DropdownMenu from './components/dropdown/DropdownMenu.vue';
import DropdownMenuItem from './components/dropdown/DropdownMenuItem.vue';
import PageHeader from './components/PageHeader.vue';
import MobilePageHeader from './components/MobilePageHeader.vue';
import Example from './components/Example.vue';
import Checkbox from './components/input/Checkbox.vue';
import CheckboxGroup from './components/input/CheckboxGroup.vue';
import Switch from './components/input/Switch.vue';
import AutoComplete from './components/input/AutoComplete.vue';
import Uploader from './components/uploader/Uploader.vue';
import Collapse from './components/collapse/Collapse';
import Panel from './components/collapse/Panel';
import CollapsePanel from './components/collapse/CollapsePanel';
import Select from './components/select/Select';
import Option from './components/select/Option';
import Tooltip from './components/Tooltip';
import Tab from './components/tab';
import Message from './components/message';
import Notify from './components/notify';
import Tip from './components/tip';
import Modal from './components/modal';
import Popup from './components/popup';
import Pagination from './components/pagination';
import GridNavigation from './components/gridNavigation';
import BottomNavigation from './components/bottomNavigation';
import TabNavigation from './components/tabNavigation';
import CategoryNavigation from './components/categoryNavigation';
import BackTop from './components/BackTop';
import Steps from './components/steps';
import Blank from './components/blank/Blank';
import PictureBlank from './components/blank/PictureBlank';
import LoadingBar from './components/loadingBar';
import Loading from './components/loading';
import PageFooter from './components/PageFooter';
import AdaptivePicture from './components/AdaptivePicture';
import Slider from './components/Slider';
import Tag from './components/Tag';
import Table from './components/table/Table';
import TableColumn from './components/table/TableColumn';
import Tree from './components/tree/Tree';
import TreeNode from './components/tree/TreeNode';
import Poptip from './components/popTip/Poptip';
import Alert from './components/Alert';
import OnlineStatus from './components/OnlineStatus';
import RichEditor from './components/richEditor/RichEditor';
import Breadcrumb from './components/breadcrumb';

import directives from './directives';
import filters from './filters';

const components={
    Alert,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    Label,
    CircleProgress,
    Icon,
    Button,
    Overview,
    Table,
    TableColumn,
    Portlet,
    Progress,
    SearchBox,
    Form,
    FormItem,
    Column,
    Row,
    Input,
    InputNumber,
    DatePicker,
    Select,
    Option,
    Radio,
    RadioGroup,
    Switch,
    Loading,
    Tag,
    Message,
    Notify,
    LoadingBar,
    Menu,
    MenuItem,
    InfoList,
    InfoItem,
    RichEditor,
    Tree,
    TreeNode,
    Swiper,
    SwiperItem: Swiper.Item,
    GridNavigation,
    GridNavigationMenuItem:GridNavigation.Item,
    BottomNavigation,
    BottomNavigationMenuItem:BottomNavigation.Item,
    TabNavigation,
    TabNavigationMenuItem:TabNavigation.Item,
    CategoryNavigation,
    CategoryNavigationMenuItem:CategoryNavigation.Item,
    SubMenu,
    PageHeader,
    MobilePageHeader,
    Drop,
    Dropdown,
    DropdownMenu,
    DropdownMenuItem,
    Example,
    Slider,
    Checkbox,
    CheckboxGroup,
    AutoComplete,
    Uploader,
    Collapse,
    Panel,
    CollapsePanel,
    Tab,
    TabPane:Tab.Pane,
    Modal,
    Popup,
    Tooltip,
    Pagination,
    BackTop,
    Step: Steps.Step,
    Steps,
    Blank,
    PictureBlank,
    PageFooter,
    OnlineStatus,
    AdaptivePicture,
    Poptip,

    iLabel: Label,
    iTable: Table,
    iTableColumn: TableColumn,
    iButton: Button,
    iForm: Form,
    iInput: Input,
    iMenu: Menu,
    iSelect: Select,
    iOption: Option,
    iProgress: Progress,
    iSwitch: Switch,
};

const install = function(Vue, options = {}) {
    if (install.installed)
        return;
    locale.use(options.locale);
    locale.i18n(options.i18n);

    Object.keys(directives).forEach(key => {
        Vue.directive(key, directives[key]);
    });

    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    });

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
    Vue.prototype.$LoadingBar = LoadingBar;
    Vue.prototype.$Loading = Loading;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Notify = Notify;
    Vue.prototype.$Tip = Tip;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Popup = Popup;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    ...components,
    version: process.env.VERSION,
    locale: locale.use,
    i18n: locale.i18n,
    libs,
    install,
};

API.lang = (code) => {
    const langObject = window[container.name+'/locale'].default;

    if (code === langObject.core.locale)
        locale.use(langObject);
    else
        console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef