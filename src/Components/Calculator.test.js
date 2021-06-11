import React from 'react'
import { shallow } from "enzyme"
import Calculator from '../Components/Calculator'

describe('Calculator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Calculator />)
  })
  it('checks if value is set on number click', () => {
    const wrapper = shallow(<Calculator />)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.find('span').first().text()).toEqual(wrapper.find('button').first().text())
  })
  it('checks if value is cleared on AC click', () => {
    const wrapper = shallow(<Calculator />)
    wrapper.find('button').first().simulate('click')
    wrapper.find('button').at(12).simulate('click')
    expect(wrapper.find('span').first().text()).toEqual('')
  })
  it('checks if result is set', () => {
    const wrapper = shallow(<Calculator />)
    wrapper.find('button').first().simulate('click')
    wrapper.find('button').at(3).simulate('click')
    wrapper.find('button').at(4).simulate('click')
    wrapper.find('button').at(11).simulate('click')
    expect(wrapper.find('span').first().text()).toEqual("11")
  })
  it('checks for error', () => {
    const wrapper = shallow(<Calculator />)
    wrapper.find('button').first().simulate('click')
    wrapper.find('button').at(3).simulate('click')
    wrapper.find('button').at(4).simulate('click')
    wrapper.find('button').at(14).simulate('click')
    wrapper.find('button').at(4).simulate('click')
    wrapper.find('button').at(14).simulate('click')
    wrapper.find('button').at(11).simulate('click')
    expect(wrapper.find('span').first().text()).toEqual("Error")
  })
})
