import { Supplier } from "@prisma/client";

interface InventoryState {
  products: Product[];
  // inventory: Inventory[];
  loading: boolean;
  error?: string;
}
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  productname: string;
  category: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  orderDate: string;
  totalAmount: number;
  items: OrderItem[];
}

export interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

export interface suppliersState {
  suppliers: Supplier[];
  loading: boolean;
  error: string | null;
}

export interface OrderItem {
  productId: string;
  productname: string;
  category: string;
  quantity: number;
  price: number;
}

export interface CreateOrderState {
  items: OrderItem[];
  totalAmount: number;
  loading: boolean;
  error: string | undefined;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  contact: string;
}
