import Sample from './Sample.vue'

export default {
  comopnent: Sample,
  title: 'Sample',
}

const Template = args => ({
  components: { Sample },
  setup() {
    return { args }
  },
  template: '<Sample v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  someProp: 'some example value',
  otherProp: 32,
}
