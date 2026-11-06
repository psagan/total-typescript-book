export type Customer = {
    name: string,
    email: string,
    balance?: number,
    status?: "active" | "inactive" | "pending"
}

export type TinyCustomer = {
    isTiny: boolean
} & Customer;

export interface MyCustomer extends Customer {
    isMy: boolean
}