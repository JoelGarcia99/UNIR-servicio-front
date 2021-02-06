const POWER2 = [128, 64, 32, 16, 8, 4, 2, 1];

/**
 * 
 * @param {number} binary 
 * @param {number} size 
 */
export const decimalToBinary = (decimal, size)=>{

    let binary = [];

    for(let i=POWER2.length-size; i<POWER2.length; ++i) {

        if(POWER2[i] <= decimal) {
            binary.push("1");
            decimal -= POWER2[i];
        }
        else {
            binary.push("0");
        }
    }

    return binary;
}