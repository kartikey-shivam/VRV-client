

/**
 * Model for transaction states. E.g. Processing, Refunded, Successful etc.
 */
export type TransactionState =
    | "CREATED"
    | "PROCESSING"
    | "SENT"
    | "EXPIRED"
    | "DECLINED"
    | "SUSPENDED"
    | "REFUNDED"
    | "SUCCESSFUL"
    | "REVERSED";

export const TransactionState = {
    Created: "CREATED",
    Processing: "PROCESSING",
    Sent: "SENT",
    Expired: "EXPIRED",
    Declined: "DECLINED",
    Suspended: "SUSPENDED",
    Refunded: "REFUNDED",
    Successful: "SUCCESSFUL",
    Reversed: "REVERSED",
} as const;
