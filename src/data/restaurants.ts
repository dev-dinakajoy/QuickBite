import type { Restaurant } from "@/types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: "the-burger-spot",
    name: "The Burger Spot",
    category: "Burgers · Fast food",
    deliveryTime: "20–30 min",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Burger with fresh lettuce, tomato, and cheese",
    featured: true,
  },
  {
    id: "mamas-kitchen",
    name: "Mama's Kitchen",
    category: "Nigerian · Local food",
    deliveryTime: "25–35 min",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=900&q=85",
    imageAlt: "A freshly prepared rice-based meal",
  },
  {
    id: "pizza-corner",
    name: "Pizza Corner",
    category: "Pizza · Italian",
    deliveryTime: "30–40 min",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Pizza topped with cheese and vegetables",
  },
  {
    id: "green-bowl",
    name: "The Green Bowl",
    category: "Healthy · Salads",
    deliveryTime: "15–25 min",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fresh salad bowl with colourful vegetables",
  },
  {
    id: "coastal-grill",
    name: "Coastal Grill",
    category: "Grills · African",
    deliveryTime: "25–40 min",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Grilled food served with fresh herbs",
  },
  {
    id: "sweet-treats",
    name: "Sweet Treats",
    category: "Desserts · Bakery",
    deliveryTime: "15–25 min",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Dessert with berries and cream",
  },
];
