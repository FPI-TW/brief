import "@testing-library/jest-dom"
import React from "react"

// Mock next/image to a regular img for JSDOM
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) =>
    React.createElement("img", { ...props, alt: props.alt || "" }),
}))
