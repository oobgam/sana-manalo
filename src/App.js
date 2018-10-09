import React, { Component, Fragment } from 'react';
import { random, range } from 'lodash';
import getLottoType, {
    ULTRA_LOTTO,
    GRAND_LOTTO,
    SUPER_LOTTO,
    MEGA_LOTTO,
    LOTTO,
} from './getLottoType';
import { Button } from './Buttons';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, AppContainer } from './AppStyle';
import LottoSelection from './LottoSelection';

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
        lottoType: '',
    };

    generateNumber() {
        const { lottoType } = this.state;
        this.setState({
            numbers: generateLottoNumbers(getLottoType(lottoType)),
        });
    }

    changeLottoType(e) {
        const { value } = e.target;
        const lottoTypeObject = getLottoType(value);
        this.setState({
            lottoType: value,
            numbers: generateLottoNumbers(lottoTypeObject),
        });
    }

    render() {
        const { numbers, lottoType } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Fragment>
                    <GlobalStyle />
                    <AppContainer>
                        {numbers.length ? (
                            numbers.join(', ')
                        ) : (
                            <div>Generate now</div>
                        )}
                        <LottoSelection
                            values={[
                                ULTRA_LOTTO,
                                GRAND_LOTTO,
                                SUPER_LOTTO,
                                MEGA_LOTTO,
                                LOTTO,
                            ]}
                            name="lottoType"
                            selectedValue={lottoType}
                            onChange={this.changeLottoType.bind(this)}
                        />
                    </AppContainer>
                </Fragment>
            </ThemeProvider>
        );
    }
}

export default App;
