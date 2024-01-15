export interface Product {
    id?: number;
    name: string;
    description: string;
    price?: number;
    // Add other fields as needed
}

export interface ResponseProduct {
    data: Product[];
    message: string;
    success: boolean;
}
