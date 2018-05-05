import Vue from 'vue';
import Picker from '../Picker.vue';
import DatePanel from '../panel/Date.vue';
import DateRangePanel from '../panel/DateRange.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'Date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'Date'
        },
        value: {}
    },
    watch: {
        type(value){
            const typeMap = {
                year: 'year',
                month: 'month',
                date: 'day'
            };
            const validType = oneOf(value, Object.keys(typeMap));
            if (validType)
                this.Panel.selectionMode = typeMap[value];
        }
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange') {
                this.currentValue = ['',''];
            }
            else {
                this.currentValue = '';
            }
        }
        const panel = getPanel(this.type);
        this.Panel = new Vue(panel);
    }
};
