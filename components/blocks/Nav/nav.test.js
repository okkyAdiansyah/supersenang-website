import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import useResponsive from "@/hooks/useResponsive";

jest.mock("@/hooks/useResponsive", () => ({
    __esModule: true,
    default: jest.fn(),
}));

jest.mock("@elements/Logo/Logo", () => (props) => <img data-testid="logo" {...props} />);
jest.mock("@modules/NavList/NavList", () => (props) => <div data-testid="desktop-nav" {...props}></div>);
jest.mock("@modules/MobileNav/MobileNav", () => () => <div data-testid="mobile-nav"></div>);

describe("<Nav />", () => {
    const setup = (device) => {
        useResponsive.mockReturnValue(device);
        const dynamicImage = {
            DESKTOP: "46",
            TABLET: "40",
            MOBILE: "36"
        };

        const utils = render(<Nav />);

        return {
            ...utils,
            dynamicImage,
            logo: screen.getByTestId("logo"),
            desktopNav: screen.queryByTestId("desktop-nav"),
            mobileNav: screen.queryByTestId("mobile-nav")
        }
    }

    describe("<Logo />", () => {
        describe("Render", () => {
            test("Render default size for desktop", () => {    
                const { dynamicImage, logo } = setup();
    
                expect(logo).toHaveAttribute("width", String(dynamicImage.DESKTOP));
                expect(logo).toHaveAttribute("height", String(dynamicImage.DESKTOP));
            });

            test("Render correct image size for desktop", () => {
                const { dynamicImage, logo } = setup("desktop");
    
                expect(logo).toHaveAttribute("width", String(dynamicImage.DESKTOP));
                expect(logo).toHaveAttribute("height", String(dynamicImage.DESKTOP));
            });

            test("Render correct image size for tablet", () => {
                const { dynamicImage, logo } = setup("tablet");
    
                expect(logo).toHaveAttribute("width", String(dynamicImage.TABLET));
                expect(logo).toHaveAttribute("height", String(dynamicImage.TABLET));
            });

            test("Render correct image size for mobile", () => {
                const { dynamicImage, logo } = setup("mobile");
    
                expect(logo).toHaveAttribute("width", String(dynamicImage.MOBILE));
                expect(logo).toHaveAttribute("height", String(dynamicImage.MOBILE));
            });
        });
    });

    describe("Nav", () => {
        describe("Render", () => {
            test("Render desktop nav for desktop", () => {
                const { desktopNav, mobileNav } = setup("desktop");

                expect(desktopNav).toBeInTheDocument();
                expect(mobileNav).toBeNull();
            });

            test("Render mobile nav for mobile", () => {
                const { desktopNav, mobileNav } = setup("mobile");

                expect(mobileNav).toBeInTheDocument();
                expect(desktopNav).toBeNull();
            });
        });
    });
});