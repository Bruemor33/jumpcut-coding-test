import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import jasmineEnsyme from 'jasmine-enzyme';

Enzyme.configure({
    adapter: new Adaptor()
});

// Initiallize Global Helpers
beforeEach(() => {
    jasmineEnsyme();
});

// Export all from file
export * from 'enzyme';