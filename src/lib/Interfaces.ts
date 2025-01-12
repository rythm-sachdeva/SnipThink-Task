export enum PaymentStatus {
    Completed = 'Completed',
    Pending = 'Pending',
    Failed = 'Failed',
  }

export interface payments{
    id: number,
    artworkTitle: string,
    totalPrice: number,
    status: PaymentStatus
}
