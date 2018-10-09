export const ULTRA_LOTTO = 'ULTRA_LOTTO';
export const GRAND_LOTTO = 'GRAND_LOTTO';
export const SUPER_LOTTO = 'SUPER_LOTTO';
export const MEGA_LOTTO = 'MEGA_LOTTO';
export const LOTTO = 'LOTTO';

const generateLottoProperties = (max, length = 6, canRepeat = false) => {
    return {
        max,
        length,
        canRepeat,
    }
}

export default (lotto = LOTTO) => {
    switch (lotto) {
        case LOTTO: return generateLottoProperties(42);
        case MEGA_LOTTO: return generateLottoProperties(45);
        case SUPER_LOTTO: return generateLottoProperties(49);
        case GRAND_LOTTO: return generateLottoProperties(55);
        case ULTRA_LOTTO:
        default:
            return generateLottoProperties(58);
    }
}