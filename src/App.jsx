// "use client";
// import "./index.css";
// import { products } from "./ShopingData";
// import { Fragment, useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Popover,
//   PopoverButton,
//   PopoverGroup,
//   PopoverPanel,
//   Tab,
//   TabGroup,
//   TabList,
//   TabPanel,
//   TabPanels,
// } from "@headlessui/react";
// import {
//   Bars3Icon,
//   MagnifyingGlassIcon,
//   ShoppingBagIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// import ShopFormComponent from "./ShopFormComponent";
// import ShopCartProduct from "./ShopCartProduct";

// export default function App() {

//     // สร้าง state เพื่อเก็บสินค้าที่อยู่ในตะกร้า
//     const [cartItems, setCartItems] = useState([]);
  
//     const addToCart = (product) => {
//       setCartItems((prevCartItems) => {
//         const isProductInCart = prevCartItems.some((item) => item.id === product.id);
  
//         if (isProductInCart) {
//           return prevCartItems.map((item) =>
//             item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//           );
//         } else {
//           return [...prevCartItems, { ...product, quantity: 1 }];
//         }
//       });
//     };

//   return (
//     <>
//       <div>
//         <header className="relative bg-white" />

//         {/* เมนู */}
//         <nav
//           aria-label="Top"
//           className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
//         >
//           <div className="ml-auto flex items-center">
//             {/* รูปโลโก้ */}
//             <div className="ml-4 flex lg:ml-0 ">
//               <a href="#">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   alt=""
//                   src="https://wallpapers.com/images/hd/concerned-cat-meme-face-png-4d2j4hiatoejw130.jpg"
//                   className="h-16 w-auto"
//                 />
//               </a>
//             </div>
//             <h1 className="lg:mx-4">ASHA Shop</h1>

//             {/* เข้าสู่ระบบ */}
//             <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//               <a
//                 href="#"
//                 className="text-sm font-medium text-gray-700 hover:text-gray-800"
//               >
//                 Sign in
//               </a>
//               <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
//             </div>

//             {/* ค้นหา */}
//             <div className="flex lg:ml-6">
//               <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
//                 <span className="sr-only">Search</span>
//                 <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
//               </a>
//             </div>

//             {/* ตะกร้า */}
//             <div className="ml-4 flow-root lg:ml-6">
//               <a
//                 href="ShopCartProduct"
//                 className="group -m-2 flex items-center p-2"
//               >
//                 <ShoppingBagIcon
//                   aria-hidden="true"
//                   className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                 />
//                 <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
//                   {cartItems.length}
//                 </span>
//                 <span className="sr-only">items in cart, view bag</span>
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>

//       <div>
//         <ShopFormComponent addToCart={addToCart}/>
//       </div>

//       <div>
//         <ShopCartProduct cartItems={cartItems}/>
//       </div>
//     </>
//   );
// }

"use client";
import "./index.css";
import { products } from "./ShopingData";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import ShopFormComponent from "./ShopFormComponent";
import ShopCartProduct from "./ShopCartProduct";

export default function App() {
  // สร้าง state เพื่อเก็บสินค้าที่อยู่ในตะกร้า
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false); // state สำหรับเปิด/ปิดตะกร้า

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const isProductInCart = prevCartItems.some((item) => item.id === product.id);

      if (isProductInCart) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div>
        <header className="relative bg-white" />

        {/* เมนู */}
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="ml-auto flex items-center">
            {/* รูปโลโก้ */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://wallpapers.com/images/hd/concerned-cat-meme-face-png-4d2j4hiatoejw130.jpg"
                  className="h-16 w-auto"
                />
              </a>
            </div>
            <h1 className="lg:mx-4">ASHA Shop</h1>

            {/* เข้าสู่ระบบ */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                Sign in
              </a>
              <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
            </div>

            {/* ค้นหา */}
            <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
              </a>
            </div>

            {/* ตะกร้า */}
            <div className="ml-4 flow-root lg:ml-6">
              <button
                onClick={() => setCartOpen(true)} // เปลี่ยนจาก <a> เป็น <button>
                className="group -m-2 flex items-center p-2"
              >
                <ShoppingBagIcon
                  aria-hidden="true"
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {cartItems.length}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div>
        <ShopFormComponent addToCart={addToCart} />
      </div>

      {/* แสดงตะกร้าเมื่อคลิก */}
      <Dialog open={cartOpen} onClose={() => setCartOpen(false)} className="relative z-10">
        <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out">
          <ShopCartProduct cartItems={cartItems} />
        </DialogPanel>
      </Dialog>
    </>
  );
}

