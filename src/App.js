import React, { Component, Fragment } from 'react';
import { random, range } from 'lodash';
import getLottoType, {
    ULTRA_LOTTO,
    GRAND_LOTTO,
    SUPER_LOTTO,
    MEGA_LOTTO,
    LOTTO,
} from './getLottoType';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, AppContainer, Header } from './AppStyle';
import LottoSelection from './LottoSelection';
import NumberDisplay from './NumberDisplay';
import { IconButton } from './Buttons';
import { FiHelpCircle } from 'react-icons/fi'

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
                    <Header>
                        <strong>Lotto Random Number Generator</strong>
                        <IconButton><FiHelpCircle size="1rem"/></IconButton>
                    </Header>
                    <AppContainer>
                        <NumberDisplay numbers={numbers} />
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
