import Vue from 'vue';
import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import axios from 'axios'

// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

describe('Implementation Test for Home.vue with Successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    const responseGet = { data:
      [
        {
          name: 'Japan',
          region: 'Asia/Tokyo'
        },
        {
          name: 'Current timezone',
          region: ''
        }
      ]
    }

    // Set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue(responseGet)

    // render the component
    wrapper = shallowMount(Home)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('renders sub-components when the component is created', () => {
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch('Home')

    // check that the timezone card component is rendered
    expect(wrapper.findAll('.timezone-card').exists())

    // check that the timezones data is properly set
    expect(wrapper.vm.timezones[0].name).toMatch('Japan');
    expect(wrapper.vm.timezones[0].region).toMatch('Asia/Tokyo');
    expect(wrapper.vm.timezones[1].name).toMatch('Current timezone');
    expect(wrapper.vm.timezones[1].region).toMatch('');
  })
})

describe('Behavioral Test for Home.vue with Successful HTTP GET', () => {
  let wrapper = null

  beforeEach(() => {
    const responseGet = { data:
      [
        {
          name: 'Japan',
          region: 'Asia/Tokyo'
        },
        {
          name: 'Current timezone',
          region: ''
        }
      ]
    }

    // Set the mock call to GET to return a successful GET response
    axios.get.mockResolvedValue(responseGet)

    // render the component (including all sub-components)
    wrapper = mount(Home)
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })


  it('displays the timezone cards', async () => {
    await Vue.nextTick();

    wrapper.vm.$nextTick().then(function () {
      // check that the heading text is rendered
      expect(wrapper.findAll('h2').length).toEqual(2)
      expect(wrapper.findAll('h2').at(0).text()).toMatch('Japan')
      expect(wrapper.findAll('h2').at(1).text()).toMatch('Current timezone')

      // check that 2 hours, 2 minutes and 2 meridian text are displayed
      expect(wrapper.findAll('.hour').length).toEqual(2)
      expect(wrapper.findAll('.minute').length).toEqual(2)
      expect(wrapper.findAll('.meridiem').length).toEqual(2)
    })
  })
})

