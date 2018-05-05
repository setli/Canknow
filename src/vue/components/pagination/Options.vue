<template>
    <div v-if="showSizer || showElevator" :class="optionsClasses">
        <div v-if="showSizer" :class="sizerClasses">
            <i-select v-model="currentPageSize" :placement="placement" @on-change="changeSize">
                <i-option v-for="item in pageSizeOptions" :key="item" :value="item" style="text-align:center;">{{ item }} {{ t('i.page.page') }}</i-option>
            </i-select>
        </div>
        <div v-if="showElevator" :class="ElevatorClasses">
            {{ t('core.page.goto') }}
            <input
              type="number"
              :value="_current"
              autocomplete="off"
              spellcheck="false"
              min="0"
              @keyup.enter="changePage"
            >
            {{ t('core.page.pageName') }}
        </div>
    </div>
</template>
<script>
    import iSelect from '../../components/select/select.vue';
    import iOption from '../../components/select/option.vue';
    import Locale from '../../mixins/locale';

    const prefixClass = 'pagination';

    function isValueNumber (value) {
        return (/^[1-9][0-9]*$/).test(value + '');
    }

    export default {
        name: 'PageOption',
        mixins: [ Locale ],
        components: { iSelect, iOption },
        props: {
            pageSizeOptions: Array,
            showSizer: Boolean,
            showElevator: Boolean,
            current: Number,
            _current: Number,
            pageSize: Number,
            allPages: Number,
            placement: String
        },
        data () {
            return {
                currentPageSize: this.pageSize
            };
        },
        watch: {
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            optionsClasses () {
                return [
                    `${prefixClass}-options`
                ];
            },
            sizerClasses () {
                return [
                    `${prefixClass}-options-sizer`
                ];
            },
            ElevatorClasses () {
                return [
                    `${prefixClass}-options-elevator`
                ];
            }
        },
        methods: {
            changeSize () {
                this.$emit('on-size', this.currentPageSize);
            },
            changePage (event) {
                let val = event.target.value.trim();
                let page = 0;

                if (isValueNumber(val)) {
                    val = Number(val);

                    if (val != this.current) {
                        const allPages = this.allPages;

                        if (val > allPages) {
                            page = allPages;
                        } else {
                            page = val;
                        }
                    }
                }
                else {
                    page = 1;
                }

                if (page) {
                    this.$emit('on-page', page);
                    event.target.value = page;
                }
            }
        }
    };
</script>
