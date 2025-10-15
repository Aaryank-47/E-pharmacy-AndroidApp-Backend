export const generateOtp = (length: number = 4): number => {
    let otp = 0;
    for (let i = 0; i < length; i++) {
        const digit = Math.floor(Math.random() * 10);
        otp = otp * 10 + digit;
    }
    console.log("Generated OTP in util : ", otp);
    return otp;
};
