export type Customer = {
    name: string,
    email: string,
    balance?: number,
    status?: "active" | "inactive" | "pending"
}
