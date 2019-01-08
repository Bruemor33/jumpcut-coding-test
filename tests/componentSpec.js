import React from 'react';
import { mount } from 'enzyme';
import { MainHeading } from '../src/components/main-heading.js';
import reducer from '../src/components/reducers/reducer.js';

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

describe('reducer', () => {
    it('should handle an INCREMENT action', () => {
        expect(reducer(1, {type: 'INCREMeNT'})).toBe(1);
    })
    it('should handle the ACCUMULATOR generator', () => {
        expect(reducer(1, 2, {type: 'ACCUMULATOR'})).toBe(1);
    })
})