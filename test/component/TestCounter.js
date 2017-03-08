import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';

import Counter from '../../src/component/view/Counter.jsx';

describe('test Counter conponent', function () {
    const counterProps = {
        counter: 20
    }
    const App = shallow(<Counter {...counterProps} />);

    it('a', function () {
        expect(1).to.equal(1);
    })

})
