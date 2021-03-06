<template>
    <div
        :class="classes"
        @mousemove="handleMouseMove">
        <div :class="[prefixClass + '-header']">
            <span v-for="day in headerDays" :key="day">
                {{day}}
            </span>
        </div>
        <span :class="getCellCls(cell)" v-for="(cell, index) in readCells"><em :index="index" @click="handleClick(cell)">{{ cell.text }}</em></span>
    </div>
</template>
<script>
    import { getFirstDayOfMonth, getDayCountOfMonth } from '../util';
    import { deepCopy } from '../../../utils/assist';
    import Locale from '../../../mixins/locale';
    const prefixClass = 'date-picker-cells';

    const clearHours = function (time) {
        const cloneDate = new Date(time);
        cloneDate.setHours(0, 0, 0, 0);
        return cloneDate.getTime();
    };

    export default {
        mixins: [ Locale ],
        props: {
            date: {},
            year: {},
            month: {},
            selectionMode: {
                default: 'day'
            },
            disabledDate: {},
            minDate: {},
            maxDate: {},
            rangeState: {
                default () {
                    return {
                        endDate: null,
                        selecting: false
                    };
                }
            },
            value: ''
        },
        data () {
            return {
                prefixClass: prefixClass,
                readCells: []
            };
        },
        watch: {
            'rangeState.endDate' (newVal) {
                this.markRange(newVal);
            },
            minDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = true;
                    this.markRange(newVal);
                } else if (!newVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                } else {
                    this.markRange();
                }
            },
            maxDate(newVal, oldVal) {
                if (newVal && !oldVal) {
                    this.rangeState.selecting = false;
                    this.markRange(newVal);
                }
            },
            cells: {
                handler (cells) {
                    this.readCells = cells;
                },
                immediate: true
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixClass}`
                ];
            },
            headerDays () {
                const weekStartDay = Number(this.t('core.datepicker.weekStartDay'));
                const translatedDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map(item => {
                    return this.t('core.datepicker.weeks.' + item);
                });
                const weekDays = translatedDays.splice(weekStartDay, 7 - weekStartDay).concat(translatedDays.splice(0, weekStartDay));
                return weekDays;
            },
            cells () {
                const date = new Date(this.year, this.month, 1);
                const weekStartDay = Number(this.t('core.datepicker.weekStartDay'));
                const day = (getFirstDayOfMonth(date) || 7) - weekStartDay; // day of first day
                const today = clearHours(new Date());    // timestamp of today
                const selectDay = clearHours(new Date(this.value));    // timestamp of selected day
                const minDay = clearHours(new Date(this.minDate));
                const maxDay = clearHours(new Date(this.maxDate));

                const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                const disabledDate = this.disabledDate;

                let cells = [];
                const cell_tmpl = {
                    text: '',
                    type: '',
                    date: null,
                    selected: false,
                    disabled: false,
                    range: false,
                    start: false,
                    end: false
                };
                if (day !== 7) {
                    for (let i = 0; i < day; i++) {
                        const cell = deepCopy(cell_tmpl);
                        cell.type = 'prev-month';
                        cell.text = dateCountOfLastMonth - (day - 1) + i;
                        cell.date = new Date(this.year, this.month - 1, cell.text);
                        const time = clearHours(cell.date);
                        cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                        cells.push(cell);
                    }
                }

                for (let i = 1; i <= dateCountOfMonth; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.text = i;
                    cell.date = new Date(this.year, this.month, cell.text);
                    const time = clearHours(cell.date);
                    cell.type = time === today ? 'today' : 'normal';
                    cell.selected = time === selectDay;
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cell.range = time >= minDay && time <= maxDay;
                    cell.start = this.minDate && time === minDay;
                    cell.end = this.maxDate && time === maxDay;

                    cells.push(cell);
                }
                const nextMonthCount = 42 - cells.length;
                for (let i = 1; i <= nextMonthCount; i++) {
                    const cell = deepCopy(cell_tmpl);
                    cell.type = 'next-month';
                    cell.text = i;
                    cell.date = new Date(this.year, this.month + 1, cell.text);
                    const time = clearHours(cell.date);
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    cells.push(cell);
                }
                return cells;
            }
        },
        methods: {
            handleClick (cell) {
                if (cell.disabled) return;
                const newDate = cell.date;

                if (this.selectionMode === 'range') {
                    if (this.minDate && this.maxDate) {
                        const minDate = new Date(newDate.getTime());
                        const maxDate = null;
                        this.rangeState.selecting = true;
                        this.markRange(this.minDate);

                        this.$emit('on-pick', {minDate, maxDate}, false);
                    }
                    else if (this.minDate && !this.maxDate) {
                        if (newDate >= this.minDate) {
                            const maxDate = new Date(newDate.getTime());
                            this.rangeState.selecting = false;

                            this.$emit('on-pick', {minDate: this.minDate, maxDate});
                        }
                        else {
                            const minDate = new Date(newDate.getTime());

                            this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                        }
                    }
                    else if (!this.minDate) {
                        const minDate = new Date(newDate.getTime());
                        this.rangeState.selecting = true;
                        this.markRange(this.minDate);

                        this.$emit('on-pick', {minDate, maxDate: this.maxDate}, false);
                    }
                } else {
                    this.$emit('on-pick', newDate);
                }
                this.$emit('on-pick-click');
            },
            handleMouseMove (event) {
                if (!this.rangeState.selecting)
                    return;
                this.$emit('on-changerange', {
                    minDate: this.minDate,
                    maxDate: this.maxDate,
                    rangeState: this.rangeState
                });
                const target = event.target;
                if (target.tagName === 'EM') {
                    const cell = this.cells[parseInt(event.target.getAttribute('index'))];
                    this.rangeState.endDate = cell.date;
                }
            },
            markRange (maxDate) {
                const minDate = this.minDate;
                if (!maxDate) maxDate = this.maxDate;

                const minDay = clearHours(new Date(minDate));
                const maxDay = clearHours(new Date(maxDate));

                this.cells.forEach(cell => {
                    if (cell.type === 'today' || cell.type === 'normal') {
                        const time = clearHours(new Date(this.year, this.month, cell.text));
                        cell.range = time >= minDay && time <= maxDay;
                        cell.start = minDate && time === minDay;
                        cell.end = maxDate && time === maxDay;
                    }
                });
            },
            getCellCls (cell) {
                return [
                    `${prefixClass}-cell`,
                    {
                        [`${prefixClass}-cell-selected`]: cell.selected || cell.start || cell.end,
                        [`${prefixClass}-cell-disabled`]: cell.disabled,
                        [`${prefixClass}-cell-today`]: cell.type === 'today',
                        [`${prefixClass}-cell-prev-month`]: cell.type === 'prev-month',
                        [`${prefixClass}-cell-next-month`]: cell.type === 'next-month',
                        [`${prefixClass}-cell-range`]: cell.range && !cell.start && !cell.end
                    }
                ];
            },
        }
    };
</script>
