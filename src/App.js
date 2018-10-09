import React, { Component } from 'react';
import { random, range } from 'lodash';
import getLottoType, {
    ULTRA_LOTTO,
    GRAND_LOTTO,
    SUPER_LOTTO,
    MEGA_LOTTO,
    LOTTO,
} from './getLottoType';

function generateLottoNumbers({ len = 6, max = 52, canRepeat = false }) {
    return range(len).reduce((acc, cur) => {
        const num = random(1, max);
        return canRepeat
            ? acc.concat(num)
            : acc.includes(num)
                ? acc.concat(random(1, max))
                : acc.concat(num);
    }, []);
}

class App extends Component {
    state = {
        numbers: [],
        lottoType: ULTRA_LOTTO,
    };

    generateNumber() {
        const { lottoType } = this.state;
        this.setState({ numbers:  generateLottoNumbers(getLottoType(lottoType))});
    }

    changeLottoType(e) {
        this.setState({ lottoType: e.target.value });
    }

    render() {
        const { numbers, lottoType } = this.state;
        return (
            <div className="App">
                {numbers.length ? numbers.join(', ') : <div>Generate now</div>}
                <button onClick={this.generateNumber.bind(this)}>Draw</button>
                <select onChange={this.changeLottoType.bind(this)}>
                    {[
                        ULTRA_LOTTO,
                        GRAND_LOTTO,
                        SUPER_LOTTO,
                        MEGA_LOTTO,
                        LOTTO,
                    ].map((type, i) => (
                        <option key={i} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default App;
