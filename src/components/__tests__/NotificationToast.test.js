import { mount } from "@vue/test-utils";
import NotificationToast from "../NotificationToast.vue";
import { describe, test, expect } from "vitest";

describe("Notification Component", () => {
    test("renders the correct style for error", () => {
        const status = 'error'
        const wrapper = mount(NotificationToast, {
            props: { status }
        })
        expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--error']))
    })

    test("renders the correct style for success", () => {
        const status = 'success'
        const wrapper = mount(NotificationToast, {
            props: { status }
        })
        expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--success']))
    })

    test("renders the correct style for info", () => {
        const status = 'info'
        const wrapper = mount(NotificationToast, {
            props: { status }
        })
        expect(wrapper.classes()).toEqual(expect.arrayContaining(['notification--info']))
    })

    test('notification slides up when message is empty', () => {
        const message = ''
        const wrapper = mount(NotificationToast, {
            props: { message }
        })
        expect(wrapper.classes('notification--slide')).toBe(false)
    })

    test('emits event when close button is clicked', async () => {
        const wrapper = mount(NotificationToast, {
            data() {
                return {
                    clicked: false
                }
            }
        })
        const closeButton = wrapper.find('button')
        await closeButton.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('clear-notification')
    })

    test('renders correct message to viewer', () => {
        const message = ''
        const wrapper = mount(NotificationToast, {
            props: { message }
        })
        expect(wrapper.find('p').text()).toBe(message)
    })
})
