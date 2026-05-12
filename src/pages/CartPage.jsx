// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/ui/Button";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   removeItem,
// } from "../redux/cartslice/cartslice";
// import { setCheckoutItems } from "../redux/checkoutSlice/checkoutSlice";
// import { Plus, Minus } from "lucide-react";

// const CartPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.offerPrice * item.quantity,
//     0
//   );

//   const checkout = () => {
//     dispatch(setCheckoutItems(cartItems));

//     navigate("/address", {
//       state: {
//         order: {
//           id: Date.now(),
//           customerName: "John Doe",
//           items: cartItems,
//           total: total,
//         },
//       },
//     });
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-100 px-3 sm:px-6 py-4">
      
//       {/* Heading */}
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
//         Shopping Cart
//       </h2>

//       {cartItems.length === 0 ? (
//         <div className="bg-white rounded-lg p-6 text-center shadow">
//           <p className="text-gray-600">Your cart is empty</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Left Side */}
//           <div className="lg:col-span-2">
//             <h3 className="text-lg font-semibold mb-4">
//               Product Details
//             </h3>

//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white shadow rounded-xl p-4 mb-4"
//               >
//                 {/* Mobile + Desktop Layout */}
//                 <div className="flex flex-col sm:flex-row gap-4">
                  
//                   {/* Product Image */}
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full sm:w-24 h-40 sm:h-24 object-cover rounded-lg"
//                   />

//                   {/* Product Info */}
//                   <div className="flex-1">
//                     <h4 className="font-semibold text-sm sm:text-base">
//                       {item.name}
//                     </h4>

//                     <p className="text-gray-600 mt-1">
//                       ₹{item.offerPrice}
//                     </p>

//                     <p className="text-sm text-gray-500 mt-1">
//                       Qty: {item.quantity}
//                     </p>

//                     {/* Quantity Buttons */}
//                     <div className="flex items-center gap-2 mt-3 flex-wrap">
//                       <Button
//                         onClick={() =>
//                           dispatch(
//                             decreaseQuantity({
//                               itemId: item.id,
//                             })
//                           )
//                         }
//                         variant="outline"
//                         size="sm"
//                       >
//                         <Minus size={14} />
//                       </Button>

//                       <span className="font-semibold text-lg">
//                         {item.quantity}
//                       </span>

//                       <Button
//                         onClick={() =>
//                           dispatch(
//                             increaseQuantity({
//                               itemId: item.id,
//                             })
//                           )
//                         }
//                         variant="outline"
//                         size="sm"
//                       >
//                         <Plus size={14} />
//                       </Button>
//                     </div>

//                     {/* Remove Button */}
//                     <button
//                       onClick={() =>
//                         dispatch(
//                           removeItem({
//                             itemId: item.id,
//                           })
//                         )
//                       }
//                       className="text-red-500 text-sm mt-3"
//                     >
//                       ✕ Remove
//                     </button>
//                   </div>

//                   {/* Price */}
//                   <div className="sm:text-right">
//                     <p className="font-bold text-lg text-gray-700">
//                       ₹{item.offerPrice * item.quantity}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side Price Summary */}
//           <div>
//             <div className="bg-white rounded-xl shadow-md p-4 lg:sticky lg:top-6">
              
//               <h3 className="text-lg font-semibold mb-4">
//                 Price Details ({cartItems.length} Items)
//               </h3>

//               <div className="flex justify-between text-sm mb-2">
//                 <span>Total Product Price</span>
//                 <span>₹{total}</span>
//               </div>

//               <hr className="my-3" />

//               <div className="flex justify-between font-bold text-lg mb-4">
//                 <span>Order Total</span>
//                 <span>₹{total}</span>
//               </div>

//               <Button
//                 onClick={checkout}
//                 className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
//               >
//                 Continue
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;






import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/cartslice/cartslice";
import { setCheckoutItems } from "../redux/checkoutSlice/checkoutSlice";
import { Plus, Minus } from "lucide-react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  const checkout = () => {
    dispatch(setCheckoutItems(cartItems));

    navigate("/address", {
      state: {
        order: {
          id: Date.now(),
          customerName: "John Doe",
          items: cartItems,
          total: total,
        },
      },
    });
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 px-3 sm:px-6 py-4 pb-28 md:pb-10">
      
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center shadow">
          <p className="text-gray-600 text-lg">
            Your cart is empty
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            <h3 className="text-xl font-semibold mb-4">
              Product Details
            </h3>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-2xl p-4 mb-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">

                  {/* Product Image */}
                  <div className="w-full sm:w-auto flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        max-w-[220px]
                        sm:w-28
                        h-44
                        sm:h-28
                        object-cover
                        rounded-xl
                      "
                    />
                  </div>

                  {/* Product Content */}
                  <div className="flex-1 flex flex-col justify-between">

                    {/* Top */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

                      {/* Info */}
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg">
                          {item.name}
                        </h4>

                        <p className="text-gray-600 mt-1 text-lg">
                          ₹{item.offerPrice}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      {/* Total Price */}
                      <div className="sm:text-right">
                        <p className="font-bold text-xl text-gray-800">
                          ₹{item.offerPrice * item.quantity}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Buttons */}
                    <div className="flex items-center gap-3 mt-5">

                      <Button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity({
                              itemId: item.id,
                            })
                          )
                        }
                        variant="outline"
                        size="sm"
                        className="
                          w-11 h-11
                          border-2 border-blue-500
                          text-blue-500
                          hover:bg-blue-500
                          hover:text-white
                          rounded-lg
                          flex items-center justify-center
                        "
                      >
                        <Minus size={16} />
                      </Button>

                      <span className="font-semibold text-xl">
                        {item.quantity}
                      </span>

                      <Button
                        onClick={() =>
                          dispatch(
                            increaseQuantity({
                              itemId: item.id,
                            })
                          )
                        }
                        variant="outline"
                        size="sm"
                        className="
                          w-11 h-11
                          border-2 border-blue-500
                          text-blue-500
                          hover:bg-blue-500
                          hover:text-white
                          rounded-lg
                          flex items-center justify-center
                        "
                      >
                        <Plus size={16} />
                      </Button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        dispatch(
                          removeItem({
                            itemId: item.id,
                          })
                        )
                      }
                      className="
                        text-red-500
                        text-sm
                        mt-4
                        hover:text-red-600
                        transition
                        w-fit
                      "
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-5
                lg:sticky
                lg:top-6
                mb-24
                lg:mb-0
              "
            >
              <h3 className="text-xl font-semibold mb-5">
                Price Details ({cartItems.length} Items)
              </h3>

              {/* Price Row */}
              <div className="flex justify-between text-base mb-3">
                <span>Total Product Price</span>
                <span>₹{total}</span>
              </div>

              <hr className="my-4 border-gray-300" />

              {/* Order Total */}
              <div className="flex justify-between items-center font-bold text-xl mb-6">
                <span>Order Total</span>
                <span>₹{total}</span>
              </div>

              {/* Continue Button */}
              <Button
                onClick={checkout}
                className="
                  w-full
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  font-semibold
                  py-3
                  rounded-xl
                  transition
                "
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;