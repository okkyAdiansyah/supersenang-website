import React from "react";
import { faker } from "@faker-js/faker";
import { renderHook, act } from "@testing-library/react";
import useResponsive from "@/hooks/useResponsive";

describe("useResponsive()", () => {
    const device = {
        MOBILE: "mobile",
        TABLET: "tablet",
        DESKTOP: "desktop",
    };

    const resizeWindow = (width) => {
        window.innerWidth = width;
        window.dispatchEvent(new Event("resize"));
    };

    let result;

    beforeEach(() => {
        ({ result } = renderHook(() => useResponsive()));
    });

    describe("Act", () => {
        test("Should return 'dektop' when window is undefined", () => {
            const originalWindow = global.window; // Backup original window
        
            // Mock SSR by setting window to undefined
            global.window = undefined;
        
            const { result } = renderHook(() => useResponsive());
            expect(result.current).toBe(device.DESKTOP);
        
            global.window = originalWindow; // Restore window after test
        });

        test("Should return tablet when screen is between 641px and 1023px", () => {
            act(() => {
                resizeWindow(faker.number.int({min: 641, max: 1023}));
            });
            expect(result.current).toBe(device.TABLET);
        });

        test("Should return mobile when screen is 640px or less", () => {
            act(() => {
                resizeWindow(faker.number.int({min: 300, max: 640}));
            });
            expect(result.current).toBe(device.MOBILE);
        });

        test("Should return desktop when screen is 1024px or more", () => {
            act(() => {
                resizeWindow(faker.number.int({min: 1024, max: 1440}));
            });
            expect(result.current).toBe(device.DESKTOP);
        });  
    });
});