"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { products } from "./ShopingData";

export default function ShopCartProduct({ cartItems }) {
  const [open, setOpen] = useState(true);
  const [price, setprice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cartItems.forEach((product) => {
      const price = Number(product.price);
      const quantity = Number(product.quantity);

      if (!isNaN(price) && !isNaN(quantity)) {
        ans += price * quantity;
      }
    });
    setprice(ans); 
  };

  useEffect(() => {
    handlePrice();
  }, [cartItems]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition ease-in-out overflow-y-auto">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)] px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      คำสั่งซื้อ
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.length > 0 ? (
                          cartItems.map((product, index) => (
                            <li key={index} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  alt={product.imageAlt}
                                  src={product.imageSrc}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <h3 className="text-base font-medium text-gray-900">
                                    {product.name}
                                  </h3>
                                  <p className="text-gray-900">
                                    {product.price}
                                  </p>
                                  <p className="text-gray-500">
                                    Qty: {product.quantity}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li>
                            <p className="text-gray-500">
                              ตะกร้าสินค้าว่างเปล่า
                            </p>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>รวม</p>
                    <p>{price.toFixed(2)} ฿</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                      ชำระเงินค่าสินค้า
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        สั่งซื้อสินค้าต่อ &rarr;
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
