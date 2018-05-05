<template>
    <div :class="wrapClasses" :style="styles">
        <ul class="pagination-list">
            <li>
                  <span :class="[prefixClass + '-total']" v-if="showTotal">
            <slot>{{ t('core.page.total') }} {{ total }}
                <template v-if="total <= 1">{{ t('core.page.item') }}</template><template v-else>{{ t('core.page.items') }}</template>
            </slot>
        </span>
            </li>
            <li :title="t('core.page.prev')"
                :class="prevClasses"
                @click="prev">
                <a><i class="icon-prev"></i></a>
            </li>
            <li title="1" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
            <li :title="t('core.page.prev5')" v-if="currentPage - 3 > 1" :class="[prefixClass + '-item-jump-prev']" @click="fastPrev"><a><i class="icon-prev"></i></a></li>
            <li :title="currentPage - 2" v-if="currentPage - 2 > 1" :class="[prefixClass + '-item']" @click="changePage(currentPage - 2)"><a>{{ currentPage - 2 }}</a></li>
            <li :title="currentPage - 1" v-if="currentPage - 1 > 1" :class="[prefixClass + '-item']" @click="changePage(currentPage - 1)"><a>{{ currentPage - 1 }}</a></li>
            <li :title="currentPage" v-if="currentPage != 1 && currentPage != allPages" :class="[prefixClass + '-item',  'current']"><a>{{ currentPage }}</a></li>
            <li :title="currentPage + 1" v-if="currentPage + 1 < allPages" :class="[prefixClass + '-item']" @click="changePage(currentPage + 1)"><a>{{ currentPage + 1 }}</a></li>
            <li :title="currentPage + 2" v-if="currentPage + 2 < allPages" :class="[prefixClass + '-item']" @click="changePage(currentPage + 2)"><a>{{ currentPage + 2 }}</a></li>
            <li :title="t('core.page.next5')" v-if="currentPage + 3 < allPages" :class="[prefixClass + '-item-jump-next']" @click="fastNext"><a><i class="icon-next"></i></a></li>
            <li :title="allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
            <li :title="t('core.page.next')"
                :class="nextClasses"
                @click="next">
                <a><i class="icon-next"></i></a>
            </li>
        </ul>
        <Options :show-sizer="showSizer"
                 :page-size="currentPageSize"
                 :page-size-options="pageSizeOptions"
                 :placement="placement"
                 :show-elevator="showElevator"
                 :_current.once="currentPage"
                 :current="currentPage"
                 :all-pages="allPages"
                 @on-size="onSize"
                 @on-page="onPage">
        </Options>
    </div>
</template>
<script>
    import { oneOf } from '../../utils/assist';
    import Options from './Options.vue';
    import Locale from '../../mixins/locale';

    const prefixClass = 'pagination';

    export default {
        name: 'Pagination',
        mixins: [ Locale ],
        components: { Options },
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageSizeOptions: {
                type: Array,
                default () {
                    return [10, 20, 30, 40];
                }
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'bottom']);
                },
                default: 'bottom'
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            showElevator: {
                type: Boolean,
                default: false
            },
            showSizer: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            styles: {
                type: Object
            }
        },
        data () {
            return {
                prefixClass: prefixClass,
                currentPage: this.current,
                currentPageSize: this.pageSize
            };
        },
        watch: {
            total (val) {
                let maxPage = Math.ceil(val / this.currentPageSize);

                if (maxPage < this.currentPage && maxPage > 0) {
                    this.currentPage = maxPage;
                }
            },
            current (val) {
                this.currentPage = val;
            },
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            allPages () {
                const allPage = Math.ceil(this.total / this.currentPageSize);
                return (allPage === 0) ? 1 : allPage;
            },
            wrapClasses () {
                return [
                    `${prefixClass}`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            prevClasses () {
                return [
                    `${prefixClass}-prev`,
                    {
                        [`disabled`]: this.currentPage === 1
                    }
                ];
            },
            nextClasses () {
                return [
                    `${prefixClass}-next`,
                    {
                        [`disabled`]: this.currentPage === this.allPages
                    }
                ];
            },
            firstPageClasses () {
                return [
                    `${prefixClass}-item`,
                    {
                        [`current`]: this.currentPage === 1
                    }
                ];
            },
            lastPageClasses () {
                return [
                    `${prefixClass}-item`,
                    {
                        [`current`]: this.currentPage === this.allPages
                    }
                ];
            }
        },
        methods: {
            changePage (page) {
                if (this.currentPage != page) {
                    this.currentPage = page;
                    this.$emit('update:current', page);
                    this.$emit('on-change', page);
                }
            },
            prev () {
                const current = this.currentPage;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
            },
            next () {
                const current = this.currentPage;
                if (current >= this.allPages) {
                    return false;
                }
                this.changePage(current + 1);
            },
            fastPrev () {
                const page = this.currentPage - 5;
                if (page > 0) {
                    this.changePage(page);
                }
                else {
                    this.changePage(1);
                }
            },
            fastNext () {
                const page = this.currentPage + 5;
                if (page > this.allPages) {
                    this.changePage(this.allPages);
                }
                else {
                    this.changePage(page);
                }
            },
            onSize (pageSize) {
                this.currentPageSize = pageSize;
                this.$emit('on-page-size-change', pageSize);
                this.changePage(1);
            },
            onPage (page) {
                this.changePage(page);
            },
            keyDown (e) {
                const key = e.keyCode;
                const condition = (key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key === 8 || key === 37 || key === 39;

                if (!condition) {
                    e.preventDefault();
                }
            },
            keyUp (e) {
                const key = e.keyCode;
                const val = parseInt(e.target.value);

                if (key === 38) {
                    this.prev();
                }
                else if (key === 40) {
                    this.next();
                }
                else if (key === 13) {
                    let page = 1;

                    if (val > this.allPages) {
                        page = this.allPages;
                    }
                    else if (val <= 0 || !val) {
                        page = 1;
                    }
                    else {
                        page = val;
                    }
                    e.target.value = page;
                    this.changePage(page);
                }
            }
        }
    };
</script>
