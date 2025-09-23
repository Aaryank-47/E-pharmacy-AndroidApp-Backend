export const generateOtp = (length: number = 6): number => {
    let otp = 0;
    for (let i = 0; i < length; i++) {
        const digit = Math.floor(Math.random() * 10);
        otp = otp * 10 + digit;
    }
    return otp;
};
