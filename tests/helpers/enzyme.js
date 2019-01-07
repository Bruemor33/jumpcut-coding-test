import jasmineEnzyme from 'jasmine-enzyme';
import {configure} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

configure({ adapter: new Adaptor() });

beforeEach(() => {
    jasmineEnzyme();
});