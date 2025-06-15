
export default async function getAllData() {
    try {
        const res = await fetch("https://dummyjson.com/products?limit=500");
        const data = await res.json();
        return data.products;
    }
    catch (err: any) {
        console.log(err);
        return [];
    }
}

export async function getDataById(id: number) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}