const prefixClass = 'picker-panel';
const datePrefixClass = 'date-picker';

export default {
    methods: {
        iconButtonClass (direction, type = '') {
            return [
                `${prefixClass}-icon-button`,
                `${datePrefixClass}-${direction}-button`,
                `${datePrefixClass}-${direction}-button-arrow${type}`,
            ];
        },
        handleShortcutClick (shortcut) {
            if (shortcut.value)
                this.$emit('on-pick', shortcut.value());
            if (shortcut.onClick)
                shortcut.onClick(this);
        },
        handlePickClear () {
            this.$emit('on-pick-clear');
        },
        handlePickSuccess () {
            this.$emit('on-pick-success');
        },
        handlePickClick () {
            this.$emit('on-pick-click');
        }
    }
};
