import React, { createContext, useContext, useState } from "react";

const TopSellersContext = createContext();

export function TopSellersProvider({ children }) {
  const [topSellers, setTopSellers] = useState([
    {
      
                    id: 1,
                    name: "Product 1",
                    description: "Description for Product 1",
                    price: "$25.00",
                    imageUrl: "https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg",
                  },
                  {
                    id: 2,
                    name: "Product 2",
                    description: "Description for Product 2",
                    price: "$30.00",
                    imageUrl: "https://images.pexels.com/photos/18483756/pexels-photo-18483756/free-photo-of-vintage-items-displayed-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1600",
                   },
                  {
                    id: 3,
                    name: "Patio bar set",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://images.pexels.com/photos/18480226/pexels-photo-18480226/free-photo-of-antique-chair-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  },
                  {
                    id: 4,
                    name: "Wintage Pocket Watch",
                    description: "vidaXL 3 Piece Bistro ",
                    price: "$2650.00",
                    imageUrl: "https://images.pexels.com/photos/18506943/pexels-photo-18506943/free-photo-of-vintage-pocket-watch.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  },
                  {
                    id: 5,
                    name: "Wintage Pocket Watch",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhQJpEm9Drm_6szFxrVFDOBZyE_iD_tBNcA&usqp=CAU",
                  },
                  {
                    id: 6,
                    name: "Product 1",
                    description: "Description for Product 1",
                    price: "$25.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vO1UxoThdF4r8Vik-MtBsmmXXVktPDY_w&usqp=CAUhttps://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg",
                  },
                  {
                    id: 7,
                    name: "Product 2",
                    description: "Description for Product 2",
                    price: "$30.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRztew5YEdcVODCgC31Keogy22O79Cq8wLBg&usqp=CAU",
                  },
                  {
                    id: 8,
                    name: "Patio bar set",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTITGjN7QRGLYMdViauf0inqBJIkNZrPuymQ&usqp=CAU",
                  },
                  {
                    id: 9,
                    name: "Wintage Pocket Watch",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PCPQTsmnKDGdILHA22yxjFN7GsxRPv7jFQ&usqp=CAU",
                  },
                  {
                    id: 10,
                    name: "Wintage Pocket Watch",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VwqXxAbM5XK03h3hBr8o5TUSFOBNs3sNWQ&usqp=CAU",
                  },
                  {
                    id: 11,
                    name: "Wintage Pocket Watch",
                    description: "vidaXL 3 Piece Bistro   ",
                    price: "$2650.00",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VwqXxAbM5XK03h3hBr8o5TUSFOBNs3sNWQ&usqp=CAU",
                  },
  ]);

  return (
    <TopSellersContext.Provider value={{ topSellers, setTopSellers }}>
      {children}
    </TopSellersContext.Provider>
  );
}

export function useTopSellers() {
  const context = useContext(TopSellersContext);
  
  return context;
}
