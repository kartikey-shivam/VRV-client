export type CheckDeliveryStatus = "COMPLETED" | "PENDING" | "SETTLED" | "CANCELED" | "REFUND" | "DECLINED";

export const CheckDeliveryStatus = {
    Completed: "COMPLETED",
    Pending: "PENDING",
    Settled: "SETTLED",
    Canceled: "CANCELED",
    Refund: "REFUND",
    Declined: "DECLINED",
} as const;