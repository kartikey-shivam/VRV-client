

/**
 * Type of transaction
 */
export type MpesaTransactionType =
    | "CustomerPayBillOnline"
    | "CustomerBuyGoodsOnline"
    | "SalaryPayment"
    | "BusinessPayment"
    | "PromotionPayment";

export const MpesaTransactionType = {
    CustomerPayBillOnline: "CustomerPayBillOnline",
    CustomerBuyGoodsOnline: "CustomerBuyGoodsOnline",
    SalaryPayment: "SalaryPayment",
    BusinessPayment: "BusinessPayment",
    PromotionPayment: "PromotionPayment",
} as const;
