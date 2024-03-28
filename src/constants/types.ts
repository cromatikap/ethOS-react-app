export type Address = `0x${string}`;

export type TxResult = `0x${string}` | "decline";

export interface DonorRecipient {
  name: string;
  description: string;
  address: Address;
}