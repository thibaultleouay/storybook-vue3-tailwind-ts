<template>
    <button type="button" :class="classes"  @click="onClick" >{{ label }}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const textSize : any = {
    small:'text-sm',
    medium:'text-md',
    large:'text-lg'
}

const emit = defineEmits(["click"])
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    primary: {
        type: Boolean,
        default: false,
    },
    size: {
        type: String,
        validator: function (value: string) {
            return ['small', 'medium', 'large'].indexOf(value) !== -1;
        },
    },
    backgroundColor: {
        type: String,
    },
})

const classes = computed(() => ({
    'button': true,
    'bg-red-500': props.primary,
    'bg-indigo-500': !props.primary,
    [`${textSize[props.size!] || 'text-md'}`]: true,
}))


const onClick = () => {
    emit('click')
}

</script>
