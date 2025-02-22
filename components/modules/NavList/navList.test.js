import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavList from "./NavList";
import { faker } from "@faker-js/faker";

jest.mock("@elements/NavItem/NavItem", () => ({href, route}) => <a href={href} data-testid="nav-item">{route}</a>);

describe("<NavList />", () => {
    const setup = () => {
        let mockLength = faker.number.int({max: 10});
        let mockProps = Array.from({length: mockLength}).map(() => ({
            href: faker.internet.url(),
            route: faker.word.noun()
        }));

        const utils = render(<NavList navItems={mockProps} />);

        return {
            ...utils,
            mockProps,
            navItems: screen.getAllByTestId("nav-item")
        }
    };

    describe("Render", () => {
        test("Render correct number of nav item", () => {
            const { mockProps, navItems } = setup();

            expect(navItems.length).toBe(mockProps.length);
        });

        test("Nav item render correct route", () => {
            const { mockProps, navItems } = setup();
            
            mockProps.forEach((item, id) => {
                expect(navItems[id]).toHaveAttribute("href", item.href);
                expect(navItems[id]).toHaveTextContent(item.route);
            })
        });
    });
})