import Vue from 'vue';
import Picker from '../Picker.vue';
import TimePanel from '../panel/Time.vue';
import TimeRangePanel from '../panel/TimeRange.vue';
import Options from '../timeMixins';

const getPanel = function (type) {
    if (type === 'timerange') {
        return TimeRangePanel;
    }
    return TimePanel;
};
import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker, Options],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['time', 'timerange']);
            },
            default: 'time'
        },
        steps: {
            type: Array,
            default: () => []
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'timerange') {
                this.currentValue = ['',''];
            }
            else {
                this.currentValue = '';
            }
        }
        const Panel = Vue.extend(getPanel(this.type));
        this.Panel = new Panel({
            propsData: {
                steps: this.steps
            }
        });
    }
};
