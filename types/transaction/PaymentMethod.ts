export type PaymentMethod =
    | "ACH"
    | "CARD"
    | "IBAN"
    | "UPI"
    | "GENERIC_BANK_ACCOUNT"
    | "MPESA"
    | "SWIFT"
    | "WALLET"
    | "CHECK"
    | "CASH";

export const PaymentMethod = {
    Ach: "ACH",
    Card: "CARD",
    Iban: "IBAN",
    Upi: "UPI",
    GenericBankAccount: "GENERIC_BANK_ACCOUNT",
    Mpesa: "MPESA",
    Swift: "SWIFT",
    Wallet: "WALLET",
    Check: "CHECK",
    Cash: "CASH",
} as const;
