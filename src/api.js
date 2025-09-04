const API_BASE = "https://www.themealdb.com/api/json/v1/1";


export async function searchByIngredients(ingredientsCsv) {
// TheMealDB supports a single ingredient – we’ll call it once per ingredient
// and merge unique results. If user passes one ingredient, it’s just one call.
const parts = ingredientsCsv
.split(",")
.map((s) => s.trim().toLowerCase())
.filter(Boolean);


if (parts.length === 0) return [];


const all = await Promise.all(
parts.map(async (ing) => {
const res = await fetch(`${API_BASE}/filter.php?i=${encodeURIComponent(ing)}`);
const data = await res.json();
return data.meals || [];
})
);


// merge by idMeal
const byId = new Map();
all.flat().forEach((m) => byId.set(m.idMeal, m));
return Array.from(byId.values());
}


export async function getMealById(id) {
const res = await fetch(`${API_BASE}/lookup.php?i=${id}`);
const data = await res.json();
return data.meals?.[0] || null;
}


export async function listCategories() {
// Nice-to-have for your Categories component
const res = await fetch(`${API_BASE}/list.php?c=list`);
const data = await res.json();
return data.meals?.map((m) => m.strCategory) || [];
}


export async function filterByCategory(cat) {
const res = await fetch(`${API_BASE}/filter.php?c=${encodeURIComponent(cat)}`);
const data = await res.json();
return data.meals || [];
}