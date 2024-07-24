"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  async function fetchData() {
    const res = await fetch("https://dummyjson.com/carts");
    const data = await res.json();
    console.log(data);
    setCarts(data.carts);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const [carts, setCarts] = useState([]);

  const handleQuantityChange = (id, value) => {
    setCarts(
      carts.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };
  const handleRemoveItem = (id) => {
    setCarts(carts.filter((item) => item.id !== id));
  };
  const subtotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount;
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        <div className="grid gap-6">
          {carts.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[100px_1fr_auto] items-center gap-4"
            >
              <img
                src="/placeholder.svg"
                alt={item.title}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="grid gap-1">
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <Select
                    defaultValue={item.quantity}
                    onValueChange={(value) =>
                      handleQuantityChange(item.id, parseInt(value))
                    }
                    className="w-20"
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <SelectItem key={qty} value={qty}>
                          {qty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="text-right font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-muted rounded-lg p-6 grid gap-4">
          <div className="grid gap-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button size="lg" className="w-full">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
