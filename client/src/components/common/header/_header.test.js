import React from 'react'
import renderer, { create } from "react-test-renderer";
import Header from './header.js'

describe("Render HeaderBlock", () => {
  test("Is it rendered and matching", () => {
    const headBlock = create(<Header />)
    expect(headBlock.toJSON()).toMatchSnapshot()
  })
})