import { useQuery } from "@tanstack/react-query";

// Product type definition
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isSold: boolean;
  category?: string;
}

interface ProductsData {
  products: Product[];
}

// GitHub repository URL for purchase issues
// Update this to your actual GitHub repository
const GITHUB_REPO_URL = "https://github.com/mr-wayne07/spirit-wolf";

/**
 * Create a GitHub Issue URL for purchasing a product
 */
export function createPurchaseIssueUrl(product: Product): string {
  const title = encodeURIComponent(`Purchase Request: ${product.name}`);
  const body = encodeURIComponent(`
**Product:** ${product.name}
**Price:** $${(product.price / 100).toFixed(2)}
**Product ID:** ${product.id}

---
*This purchase request was created from the Spirit Wolf Market website.*
  `);
  return `${GITHUB_REPO_URL}/issues/new?title=${title}&body=${body}`;
}

/**
 * Hook to fetch all products from static JSON file
 */
export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data: ProductsData = await res.json();
      return data.products;
    },
    staleTime: Infinity, // Static data doesn't change
  });
}

/**
 * Hook to fetch a single product by ID from static JSON file
 */
export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async (): Promise<Product | null> => {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Failed to fetch product");
      const data: ProductsData = await res.json();
      return data.products.find((p) => p.id === id) || null;
    },
    enabled: !!id,
    staleTime: Infinity, // Static data doesn't change
  });
}
