import React from 'react'
import renderer, { create } from "react-test-renderer";
import HeaderBlock from './header.js'

describe("Render HeaderBlock", () => {
  test("Is it rendered and matching", () => {
    const headBlock = create(<HeaderBlock />)
    expect(headBlock.toJSON()).toMatchSnapshot()
  })
})