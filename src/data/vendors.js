// src/data/vendors.js
const vendors = [
  {
    id: 'my-restaurant', // Use a short, unique string ID
    name: 'Your Registered Restaurant Name',
    location: 'Your Location',
    openHours: '8:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { 
        id: 'item-1', 
        name: 'Nasi Lemak Ayam', 
        description: 'Fragrant coconut rice with fried chicken', 
        price: 7.50, 
        category: 'Rice', 
        available: true 
      },

      { 
        id: 'item-2', 
        name: 'Nasi goreng seafood', 
        description: 'Fragrant coconut rice with fried chicken', 
        price: 7.50, 
        category: 'Rice', 
        available: true 
      },
      // Add at least 7 more items here across 3 categories (e.g., Rice, Noodles, Drinks)
    ]
  },
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Al-Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '6:00 pm - 1:00 am',
    isOpen: false,
    menu: [
      { 
        id: 'faruq-1', 
        name: 'Maggi Goreng', 
        description: 'Spicy fried noodles with egg', 
        price: 5.00, 
        category: 'Noodles', 
        available: true 
      }
      // Add more items for this vendor
    ]
  },
  {
    id: 'kafe-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { 
        id: 'ali-1', 
        name: 'Air Bandung', 
        description: 'Rose syrup with milk', 
        price: 3.00, 
        category: 'Drinks', 
        available: true 
      }
      // Add more items for this vendor
    ]
  }
];

export default vendors;