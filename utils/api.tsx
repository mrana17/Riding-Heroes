export type Order = {
  id: number;
  name: string;
  surname: string;
  address: {
    street: string;
    number: number;
    plz: number;
    city: string;
  };
  order: string;
};
async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getOrders(): Promise<Order[]> {
  return await fetchURL<Order[]>("/api/orders");
}

export async function getOrder(id: string): Promise<Order> {
  return await fetchURL<Order>(`/api/orders/${id}`);
}
