export interface Product {
    id?: number;
    name: string;
    description: string;
    price?: number;
    provider_id?: number;
    type_id?: number;
    container_id?: number;
    // Add other fields as needed
}

export interface ResponseProduct {
    data: Product[];
    message: string;
    success: boolean;
}
