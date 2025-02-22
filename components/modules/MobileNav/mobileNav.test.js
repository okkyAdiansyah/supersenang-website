import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNav from "./MobileNav";

jest.mock("@modules/NavList/NavList", () => ({className}) => <div data-testid="nav-container" className={className}></div>);
jest.mock("@elements/Toggle/NavToggle/NavToggle", () => (props) => <button type="button" data-testid="toggle" {...props}></button>);

describe("<MobileNav />", () => {
    const setup = () => {
        const utils = render(<MobileNav />);

        return {
            ...utils,
            navContainer: screen.getByTestId("nav-container"),
            toggle: screen.getByTestId("toggle")
        }
    };

    describe("Render", () => {
        const renderTest = (component) => {
            expect(component).toBeInTheDocument();
            expect(component).not.toHaveClass("isActive");
        }

        test("Render CTA to viewport without active class", () => {
            const { toggle } = setup();

            renderTest(toggle);
        });

        test("Render nav container to viewport without active class", () => {
            const { navContainer } = setup();

            renderTest(navContainer);
        });
    });

    describe("act", () => {
        test("Nav should appear in viewport and toggle should change to close", () => {
            const { toggle, navContainer } = setup();

            fireEvent.click(toggle);

            expect(toggle).toHaveClass("isActive");
            expect(navContainer).toHaveClass("isActive");
        });

        test("Nav should not appear in viewport and toggle should change to open", () => {
            const { toggle, navContainer } = setup();
            
            fireEvent.click(toggle);
            fireEvent.click(toggle);

            expect(toggle).not.toHaveClass("isActive");
            expect(navContainer).not.toHaveClass("isActive");
        });
    });
});