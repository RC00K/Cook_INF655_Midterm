// import {
//     collection,
//     getDocs,
//     or,
//     orderBy,
//     query,
//     Timestamp,
//     where,
// } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Loading from '../components/Loading';
// import { firestore } from '../firebase/config';
// import { formatPrice } from '../helper';

// function Orders() {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { uid } = useSelector((state) => state.user);

//     useEffect(() => {
//         if(uid) loadOrders();
//     }, [uid]);

//     function loadOrders() {
//         setLoading(true);
//         try {
//             const collectionRef = collection(firestore, "orders");
//             const q = query(
//                 collectionRef,
//                 where("uid", "==", uid),
//                 orderBy("createdOn", "desc")
//             );
//             getDocs(q).then((result) => {
//                 const tempOrders = [];
//                 result.docs.forEach((doc) => {
//                     let currDocument = { id: doc.id, ...doc.data() };
//                     tempOrders.push(currDocument);
//                 });
//                 setOrders([...tempOrders]);
//             });
//         } catch(error) {
//             console.log(error);
//         }
//         setLoading(false);
//     }

//     if(loading || !uid) return <Loading />;

//     return (
//         <div className="container">
//             {/* No Orders Found */}
//             {!loading && orders.length === 0 && (
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h5>No Orders Found</h5>
//                                 {/* Shop Now */}
//                                 <Link to={"/products"} className="btn btn-primary">
//                                     Shop Now    
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             {/* Orders */}
//             {orders.length > 0 && (
//                 <div className="row">
//                     <div className="col-12">
//                         <h5>Orders</h5>
//                     </div>
//                 </div>
//             )}
//             {orders.map((order, index) => (
//                 <div className="row" key={index} my={5}>
//                     <div className="col-12">
//                         <OrderItem orderItem={order} />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// function OrderItem({ orderItem }) {
//     const { line1, line2, city, state, country, postal_code } = orderItem.shippingAddress;

//     return (
//         <div className="row">
//             <div className="col-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <h5>Order ID: {orderItem.id}</h5>
//                     </div>
//                     {/* Order Placed On */}
//                     <div className="card-body">
//                         <h5>
//                             Order Placed On: 
//                             {new Timestamp(
//                                 orderItem.createdOn.seconds,
//                                 orderItem.createdOn.nanoseconds
//                             ).toDate().toLocaleDateString()}
//                         </h5>
//                     </div>
//                     {/* Delivery Status */}
//                     <div className="card-body">
//                         <h5>
//                             Delivery Status: 
//                             {orderItem.deliveryStatus}
//                         </h5>
//                     </div>
//                     {/* Order Items */}
//                     <div className="card-body">
//                         <table className="table table-striped">
//                             <thead>
//                                 <tr>
//                                     <th>Product</th>
//                                     <th>Quantity</th>
//                                     <th>Price</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {orderItem.items.map((item, key) => (
//                                     <tr key={key}>
//                                         <td>{item.name}</td>
//                                         <td>{item.quantity}</td>
//                                         <td>{formatPrice(item.price)}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                     {/* Shipping Address */}
//                     <div className="card-body">
//                         <h5>Shipping Address</h5>
//                         <p>{line1}</p>
//                         <p>{line2}</p>
//                         <p>{city}</p>
//                         <p>{state}</p>
//                         <p>{country}</p>
//                         <p>{postal_code}</p>
//                     </div>
//                     {/* Total */}
//                     <div className="card-footer">
//                         <h5 className="text-right">
//                             Total: {formatPrice(item.price)}
//                         </h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;