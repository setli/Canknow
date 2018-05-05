<template>
    <div class="table"
         :class="[{
      'table-fit': fit,
      'table-striped': stripe,
      'table-border': border || isGroup,
      'table-hidden': isHidden,
      'table-group': isGroup,
      'table-fluid-height': maxHeight,
      'table-enable-row-hover': !store.states.isComplex,
      'table-enable-row-transition': (store.states.data || []).length !== 0 && (store.states.data || []).length < 100
    }, tableSize ? `table-${ tableSize }` : '']"
         @mouseleave="handleMouseLeave($event)">
        <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
        <div class="table-header-wrap" ref="headerWrapper" v-if="showHeader">
            <table-header
                    ref="tableHeader"
                    :store="store"
                    :layout="layout"
                    :border="border"
                    :default-sort="defaultSort"
                    :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
            </table-header>
        </div>
        <div class="table-body-wrap"
             ref="bodyWrapper"
             :class="[`is-scroll-${scrollPosition}`]"
             :style="[bodyHeight]">
            <table-body
                    :context="context"
                    :store="store"
                    :stripe="stripe"
                    :layout="layout"
                    :row-class-name="rowClassName"
                    :row-style="rowStyle"
                    :highlight="highlightCurrentRow"
                    :style="{ width: bodyWidth }">
            </table-body>
            <div :style="{ width: bodyWidth }" class="table-empty-block" v-if="!data || data.length === 0">
                <span class="table-empty-text"><slot name="empty">{{ emptyText || t('core.table.emptyText') }}</slot></span>
            </div>
            <div class="table-append-wrap" ref="appendWrapper" v-if="$slots.append">
                <slot name="append"></slot>
            </div>
        </div>
        <div class="table-footer-wrap" ref="footerWrapper" v-if="showSummary" v-show="data && data.length > 0">
            <table-footer
                    :store="store"
                    :layout="layout"
                    :border="border"
                    :sum-text="sumText || t('core.table.sumText')"
                    :summary-method="summaryMethod"
                    :default-sort="defaultSort"
                    :style="{ width: layout.bodyWidth ? layout.bodyWidth + 'px' : '' }">
            </table-footer>
        </div>
        <div class="table-fixed" ref="fixedWrapper"
             v-if="fixedColumns.length > 0"
             :style="[
        { width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' },
        fixedHeight
      ]">
            <div class="table-fixed-header-wrap" ref="fixedHeaderWrapper" v-if="showHeader">
                <table-header
                        ref="fixedTableHeader"
                        fixed="left"
                        :border="border"
                        :store="store"
                        :layout="layout"
                        :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-header>
            </div>
            <div
                    class="table-fixed-body-wrap"
                    ref="fixedBodyWrapper"
                    :style="[
          { top: layout.headerHeight + 'px' },
          fixedBodyHeight
        ]">
                <table-body
                        fixed="left"
                        :store="store"
                        :stripe="stripe"
                        :layout="layout"
                        :highlight="highlightCurrentRow"
                        :row-class-name="rowClassName"
                        :row-style="rowStyle"
                        :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }">
                </table-body>
                <div class="table-append-gutter" :style="{ height: layout.appendHeight + 'px' }" v-if="$slots.append"></div>
            </div>
            <div class="table-fixed-footer-wrap" ref="fixedFooterWrapper" v-if="showSummary" v-show="data && data.length > 0">
                <table-footer
                        fixed="left"
                        :border="border"
                        :sum-text="sumText || t('el.table.sumText')"
                        :summary-method="summaryMethod"
                        :store="store"
                        :layout="layout"
                        :style="{ width: layout.fixedWidth ? layout.fixedWidth + 'px' : '' }"></table-footer>
            </div>
        </div>
        <div class="table-fixed-right" ref="rightFixedWrapper"
             v-if="rightFixedColumns.length > 0"
             :style="[
        { width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' },
        { right: layout.scrollY ? (border ? layout.gutterWidth : (layout.gutterWidth || 0)) + 'px' : '' },
        fixedHeight
      ]">
            <div class="table-fixed-header-wrap" ref="rightFixedHeaderWrapper" v-if="showHeader">
                <table-header
                        ref="rightFixedTableHeader"
                        fixed="right"
                        :border="border"
                        :store="store"
                        :layout="layout"
                        :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-header>
            </div>
            <div class="table-fixed-body-wrap" ref="rightFixedBodyWrapper"
                 :style="[
          { top: layout.headerHeight + 'px' },
          fixedBodyHeight
        ]">
                <table-body
                        fixed="right"
                        :store="store"
                        :stripe="stripe"
                        :layout="layout"
                        :row-class-name="rowClassName"
                        :row-style="rowStyle"
                        :highlight="highlightCurrentRow"
                        :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }">
                </table-body>
            </div>
            <div class="table-fixed-footer-wrap" ref="rightFixedFooterWrapper" v-if="showSummary" v-show="data && data.length > 0">
                <table-footer
                        fixed="right"
                        :border="border"
                        :sum-text="sumText || t('core.table.sumText')"
                        :summary-method="summaryMethod"
                        :store="store"
                        :layout="layout"
                        :style="{ width: layout.rightFixedWidth ? layout.rightFixedWidth + 'px' : '' }"></table-footer>
            </div>
        </div>
        <div class="table-fixed-right-patch"
             v-if="rightFixedColumns.length > 0"
             :style="{ width: layout.scrollY ? layout.gutterWidth + 'px' : '0', height: layout.headerHeight + 'px' }"></div>
        <div class="table-column-resize-proxy" ref="resizeProxy" v-show="resizeProxyVisible"></div>
    </div>
</template>

<script type="text/babel">
    import Checkbox from './../input/Checkbox';
    import throttle from 'throttle-debounce/throttle';
    import debounce from 'throttle-debounce/debounce';
    import Locale from '../../mixins/locale';
    import TableStore from './TableStore';
    import TableLayout from './TableLayout';
    import TableBody from './TableBody';
    import TableHeader from './TableHeader';
    import TableFooter from './TableFooter';
    import { mousewheel } from './util';
    import { addResizeListener, removeResizeListener } from '../../utils/resize-event';
    let tableIdSeed = 1;

    export default {
        name: 'Table',
        mixins: [Locale],
        props: {
            data: {
                type: Array,
                default: function() {
                    return [];
                }
            },
            size: String,
            width: [String, Number],
            height: [String, Number],
            maxHeight: [String, Number],
            fit: {
                type: Boolean,
                default: true
            },
            stripe: Boolean,
            border: Boolean,
            rowKey: [String, Function],
            context: {},
            showHeader: {
                type: Boolean,
                default: true
            },
            showSummary: Boolean,
            sumText: String,
            summaryMethod: Function,
            rowClassName: [String, Function],
            rowStyle: [Object, Function],
            cellClassName: [String, Function],
            cellStyle: [Object, Function],
            headerRowClassName: [String, Function],
            headerRowStyle: [Object, Function],
            headerCellClassName: [String, Function],
            headerCellStyle: [Object, Function],
            highlightCurrentRow: Boolean,
            currentRowKey: [String, Number],
            emptyText: String,
            expandRowKeys: Array,
            defaultExpandAll: Boolean,
            defaultSort: Object,
            tooltipEffect: String,
            spanMethod: Function,
            selectOnIndeterminate: {
                type: Boolean,
                default: true
            }
        },
        components: {
            TableHeader,
            TableFooter,
            TableBody,
            Checkbox
        },
        methods: {
            setCurrentRow(row) {
                this.store.commit('setCurrentRow', row);
            },
            toggleRowSelection(row, selected) {
                this.store.toggleRowSelection(row, selected);
                this.store.updateAllSelected();
            },
            toggleRowExpansion(row, expanded) {
                this.store.toggleRowExpansion(row, expanded);
            },
            clearSelection() {
                this.store.clearSelection();
            },
            clearFilter() {
                this.store.clearFilter();
            },
            clearSort() {
                this.store.clearSort();
            },
            handleMouseLeave() {
                this.store.commit('setHoverRow', null);
                if (this.hoverState) this.hoverState = null;
            },
            updateScrollY() {
                this.layout.updateScrollY();
            },
            bindEvents() {
                const { headerWrapper, footerWrapper } = this.$refs;
                const refs = this.$refs;
                let self = this;
                this.$on('showTab', () => {
                    this.$nextTick(() => {
                        this.doLayout();
                    });
                });
                this.bodyWrapper.addEventListener('scroll', function() {
                    if (headerWrapper)
                        headerWrapper.scrollLeft = this.scrollLeft;
                    if (footerWrapper)
                        footerWrapper.scrollLeft = this.scrollLeft;
                    if (refs.fixedBodyWrapper)
                        refs.fixedBodyWrapper.scrollTop = this.scrollTop;
                    if (refs.rightFixedBodyWrapper)
                        refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
                    const maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
                    const scrollLeft = this.scrollLeft;

                    if (scrollLeft >= maxScrollLeftPosition) {
                        self.scrollPosition = 'right';
                    }
                    else if (scrollLeft === 0) {
                        self.scrollPosition = 'left';
                    }
                    else {
                        self.scrollPosition = 'middle';
                    }
                });
                if (this.fit) {
                    addResizeListener(this.$el, this.resizeListener);
                }
            },
            resizeListener() {
                if (!this.$ready)
                    return;
                let shouldUpdateLayout = false;
                const el = this.$el;
                const { width: oldWidth, height: oldHeight } = this.resizeState;
                const width = el.offsetWidth;
                if (oldWidth !== width) {
                    shouldUpdateLayout = true;
                }
                const height = el.offsetHeight;
                if ((this.height || this.shouldUpdateHeight) && oldHeight !== height) {
                    shouldUpdateLayout = true;
                }
                if (shouldUpdateLayout) {
                    this.resizeState.width = width;
                    this.resizeState.height = height;
                    this.doLayout();
                }
            },

            doLayout() {
                this.store.updateColumns();
                this.updateScrollY();
                this.layout.update();
                if (this.height) {
                    this.layout.setHeight(this.height);
                }
                else if (this.maxHeight) {
                    this.layout.setMaxHeight(this.maxHeight);
                }
                else if (this.shouldUpdateHeight) {
                    this.layout.updateHeight();
                }
            }
        },
        created() {
            this.tableId = 'table_' + tableIdSeed + '_';
            this.debouncedLayout = debounce(50, () => this.doLayout());
        },
        computed: {
            tableSize() {
                return this.size || (this.$ELEMENT || {}).size;
            },
            bodyWrapper() {
                return this.$refs.bodyWrapper;
            },
            shouldUpdateHeight() {
                return typeof this.height === 'number' ||
                    this.fixedColumns.length > 0 ||
                    this.rightFixedColumns.length > 0;
            },
            selection() {
                return this.store.states.selection;
            },
            columns() {
                return this.store.states.columns;
            },
            tableData() {
                return this.store.states.data;
            },
            fixedColumns() {
                return this.store.states.fixedColumns;
            },
            rightFixedColumns() {
                return this.store.states.rightFixedColumns;
            },
            bodyHeight() {
                let style = {};

                if (this.height) {
                    style = {
                        height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
                    };
                }
                else if (this.maxHeight) {
                    style = {
                        'max-height': (this.showHeader
                            ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight
                            : this.maxHeight - this.layout.footerHeight) + 'px'
                    };
                }

                return style;
            },
            bodyWidth() {
                const { bodyWidth, scrollY, gutterWidth } = this.layout;
                return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
            },
            fixedBodyHeight() {
                let style = {};

                if (this.height) {
                    style = {
                        height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
                    };
                }
                else if (this.maxHeight) {
                    let maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

                    if (this.showHeader) {
                        maxHeight -= this.layout.headerHeight;
                    }
                    maxHeight -= this.layout.footerHeight;
                    style = {
                        'max-height': maxHeight + 'px'
                    };
                }
                return style;
            },
            fixedHeight() {
                let style = {};

                if (this.maxHeight) {
                    style = {
                        bottom: (this.layout.scrollX && this.data.length) ? this.layout.gutterWidth + 'px' : ''
                    };
                }
                else {
                    style = {
                        height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
                    };
                }
                return style;
            }
        },
        watch: {
            height(value) {
                this.layout.setHeight(value);
            },
            maxHeight(value) {
                this.layout.setMaxHeight(value);
            },
            currentRowKey(newVal) {
                this.store.setCurrentRowKey(newVal);
            },
            data: {
                immediate: true,
                handler(val) {
                    this.store.commit('setData', val);
                    if (this.$ready) {
                        this.$nextTick(() => {
                            this.doLayout();
                        });
                    }
                }
            },
            expandRowKeys: {
                immediate: true,
                handler(newVal) {
                    if (newVal) {
                        this.store.setExpandRowKeys(newVal);
                    }
                }
            }
        },
        destroyed() {
            if (this.resizeListener)
                removeResizeListener(this.$el, this.resizeListener);
        },
        mounted() {
            this.bindEvents();
            this.doLayout();

            this.resizeState = {
                width: this.$el.offsetWidth,
                height: this.$el.offsetHeight
            };

            // init filters
            this.store.states.columns.forEach(column => {
                if (column.filteredValue && column.filteredValue.length) {
                    this.store.commit('filterChange', {
                        column,
                        values: column.filteredValue,
                        silent: true
                    });
                }
            });
            this.$ready = true;
        },
        data() {
            const store = new TableStore(this, {
                rowKey: this.rowKey,
                defaultExpandAll: this.defaultExpandAll,
                selectOnIndeterminate: this.selectOnIndeterminate
            });
            const layout = new TableLayout({
                store,
                table: this,
                fit: this.fit,
                showHeader: this.showHeader
            });
            return {
                store,
                layout,
                isHidden: false,
                renderExpanded: null,
                resizeProxyVisible: false,
                resizeState: {
                    width: null,
                    height: null
                },
                // 是否拥有多级表头
                isGroup: false,
                scrollPosition: 'left'
            };
        }
    };
</script>