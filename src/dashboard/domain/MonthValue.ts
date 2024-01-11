const MonthValue = (monthAsInt: number) => {
    switch (monthAsInt) {
        case 0: return 'jaanuar'
        case 1: return 'veebruar'
        case 2: return 'märts'
        case 3: return 'aprill'
        case 4: return 'mai'
        case 5: return 'juuni'
        case 6: return 'juuli'
        case 7: return 'august'
        case 8: return 'september'
        case 9: return 'oktoober'
        case 10: return 'november'
        case 11: return 'detsember'
        default: return '???'
    }
}

export default MonthValue;
