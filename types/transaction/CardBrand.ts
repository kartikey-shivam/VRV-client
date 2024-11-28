export type CardBrand = "VISA" | "MASTERCARD" | "AMERICAN_EXPRESS" | "DISCOVER" | "UNIONPAY" | "RUPAY" | "JCB";

export const CardBrand = {
    Visa: "VISA",
    Mastercard: "MASTERCARD",
    AmericanExpress: "AMERICAN_EXPRESS",
    Discover: "DISCOVER",
    Unionpay: "UNIONPAY",
    Rupay: "RUPAY",
    Jcb: "JCB",
} as const;