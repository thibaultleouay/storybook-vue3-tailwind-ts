import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Sample from './Sample.vue'
import { nextTick } from "process";

test('mount component', async() => {
  expect(Sample).toBeTruthy()

  const wrapper = mount(Sample, {
    props: {
      someProp: "test",
      otherProp: 12,
    },
  })
  expect(wrapper.text()).toContain('test')
  expect(wrapper.html()).toMatchSnapshot()


  expect(wrapper.text()).toContain('12')


})