import { shallowMount, mount } from '@vue/test-utils'
import TimezoneCard from '@/components/TimezoneCard.vue'

// Mock the axios library
jest.mock('axios')

// Spy the console log
global.console.log = jest.fn();

describe('Implementation Test for Home.vue with Successful HTTP GET', () => {
    let wrapper = null

  // SETUP - run prior to each unit test
    beforeEach(() => {
        // Do Nothing - render the components in each unit test
    })

    // TEARDOWN - run after to each unit test
    afterEach(() => {
        jest.resetModules()
        jest.clearAllMocks()
    })

    it('initializes with correct elements', () => {
        // render the component
        wrapper = shallowMount(TimezoneCard, {
            propsData: {
                timezone: {
                    name: '',
                    region: ''
                }
            }
        })

        // check the name of the component
        expect(wrapper.vm.$options.name).toMatch('TimezoneCard')

        // check that each element of the timezone card is initialized to empty strings
        expect(wrapper.vm.timezone.name).toMatch('')
        expect(wrapper.vm.timezone.region).toMatch('')
    })

    it('displays the timezone cards', () => {
        // check that all the texts are present
        expect(wrapper.find('.card-title').exists())
        expect(wrapper.find('.hour').exists())
        expect(wrapper.find('.minute').exists())
        expect(wrapper.find('.meridiem').exists())
    })

    it('renders sub-components when the component is created', () => {
        // check the name of the component
        expect(wrapper.vm.$options.name).toMatch('TimezoneCard')

        // check that the timezone card component is rendered
        expect(wrapper.findAll('.icon').exists())
    })
})
