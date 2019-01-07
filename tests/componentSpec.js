import React from 'react';
import { mount } from 'enzyme';
import { MainHeading } from '../src/components/index';

describe("MainHeading", () => {
    let props;
    let mountedHeading;
    const mainHeading = () => {
        if (!mountedHeading) {
            mountedHeading = mount(
                <MainHeading {...props} />
            );
        }

        return mountedHeading;
    }

    beforeEach(() => {
        props = {
            fontColor: undefined,
            fontSize: undefined,
            columnSize: undefined
        };
        mountedHeading = undefined;
    });

    // Add Tests Here
    it('Always renders a <div>', () => {
        const divs = mainHeading().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

});