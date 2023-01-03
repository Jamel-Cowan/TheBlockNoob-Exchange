export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'
export const GREEN = 'success'
export const RED = 'danger'

export const DECIMALS = (10**18)
// Shortcutt to avoid passing around web3 connection
export const ether =(wei) => {
    if(wei) {
        return(wei / DECIMALS)
    }
}


// Tokensand ether have same decimal resolution
export const tokens = ether