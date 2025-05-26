// // InvoiceComponent.jsx
// import React from "react";

// const InvoiceComponent = ({ user, invoiceData, transactionID }) => {
//   return (
//     <div id="invoice" className="max-w-2xl mx-auto p-6 border shadow-md rounded-lg bg-white">
//       <h2 className="text-2xl font-bold text-center mb-4">Travel Invoice</h2>

//       <div className="mb-6">
//         <p><strong>Invoice ID:</strong> {transactionID}</p>
//         <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
//         <p><strong>Name:</strong> {user?.displayName}</p>
//         <p><strong>Email:</strong> {user?.email}</p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Trip Details</h3>
//         <p><strong>Destination:</strong> {invoiceData?.spotName}, {invoiceData?.countryName}</p>
//         <p><strong>Travel Time:</strong> {invoiceData?.travelTime}</p>
//         <p><strong>Seasonality:</strong> {invoiceData?.seasonality}</p>
//         <p><strong>Total Visitors:</strong> {invoiceData?.totalVisitors}</p>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-xl font-semibold mb-2">Payment Details</h3>
//         <p><strong>Amount Paid:</strong> ${invoiceData?.averageCost}</p>
//         <p><strong>Payment Method:</strong> Credit/Debit Card</p>
//         <p><strong>Transaction ID:</strong> {transactionID}</p>
//       </div>

//       <div className="text-center mt-6">
//         <p className="text-sm text-gray-600">Thank you for booking with us. Have a safe and memorable journey!</p>
//       </div>
//     </div>
//   );
// };

// export default InvoiceComponent;
