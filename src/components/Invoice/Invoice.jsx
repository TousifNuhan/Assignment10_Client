import React, { useState } from "react"
import { Download, Printer, Send } from "lucide-react"
import { useLocation } from "react-router-dom";

const Invoice = () => {

  const locations = useLocation()
  const { data, transactionID } = locations.state || {}
  const { userName, email, countryName, spotName, location, photoURL, averageCost, seasonality, travelTime, totalVisitors, description } = data

  const [isPrinting, setIsPrinting] = useState(false)

  const doPrint = () => {
    setIsPrinting(true)
    window.print()
    setIsPrinting(() => setIsPrinting(false, 500))
  }

  const currentDate = new Date().toLocaleDateString()

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mb-4 print:hidden">
          <button
            onClick={doPrint}
            className="flex items-center border rounded px-3 py-1.5 text-sm hover:bg-gray-100"
          >
            <Printer className="mr-2 h-4 w-4" />
            Print
          </button>
          <button className="flex items-center border rounded px-3 py-1.5 text-sm hover:bg-gray-100">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </button>
          <button className="flex items-center bg-blue-600 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-700">
            <Send className="mr-2 h-4 w-4" />
            Email Invoice
          </button>
        </div>

        {/* Invoice Card */}
        <div className="p-6 md:p-8 shadow-md bg-white rounded-lg">
          {/* Header */}
          <div className="flex md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              {/* <div className="bg-blue-600 h-12 w-12 rounded-md flex items-center justify-center text-white font-bold text-xl mr-3">
                TT
              </div> */}
              <div>
                <h1 className="text-xl font-bold text-blue-600">TravelGenie</h1>
                <p className="text-sm text-gray-500">Explore the Extraordinary</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-gray-800">INVOICE</h2>
              <p className="text-gray-500">
                #{(Math.random() * 10000).toFixed(0).padStart(4, "0")}
              </p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div >
              <h3 className="font-semibold text-gray-700 mb-2 ">Customer Details:</h3>

              <p className="mb-1"><span className="font-medium ml-4 ">Name:</span> {userName}</p>
              <p><span className="font-medium ml-4 ">Email:</span> {email}</p>

            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Invoice Information:</h3>
              <p className="mb-1"><span className="font-medium ml-4">Date:</span> 5/2/2025</p>
              <p><span className="font-medium ml-4">Status:</span>{" "}
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Paid
                </span>
              </p>
            </div>
          </div>

          {/* Trip Details */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-700 mb-3">Trip Details:</h3>
            <div className="bg-gray-50 p-2 rounded-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-2"><span className="font-medium">Destination:</span> {spotName}, {countryName}</p>
                  <p className="mb-2"><span className="font-medium">Travel Time:</span> {travelTime}</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-medium">Seasonality:</span> {seasonality}</p>
                  <p className="mb-2"><span className="font-medium">Total Visitors:</span> {totalVisitors}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-3">Payment Details:</h3>
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="mb-2"><span className="font-medium">Amount Paid:</span> $7,000.00</p>
              <p className="mb-2"><span className="font-medium">Payment Method:</span> Credit/Debit Card</p>
              <p><span className="font-medium">Transaction ID:</span> {transactionID}</p>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="mb-8 ">
            <h3 className="font-semibold text-gray-700 mb-3">Payment Summary:</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-4 font-semibold text-gray-700">Description</th>
                    <th className="text-right py-2 px-4 font-semibold text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 px-4">
                      <p className="font-medium">{spotName} Tour Package</p>
                      <p className="text-sm text-gray-500">Group tour for {totalVisitors} visitors</p>
                    </td>
                    <td className="text-right py-2 px-4">{averageCost}.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 font-bold">Total</td>
                    <td className="text-right py-2 px-4 font-bold">{averageCost}.00</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="py-2 px-4 font-bold text-blue-700">Amount Paid</td>
                    <td className="text-right py-2 px-4 font-bold text-blue-700">{averageCost}.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-bold">Balance Due</td>
                    <td className="text-right py-2 px-4 font-bold">$0.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Thank You Note */}
          <div className="text-center mt-8 pt-4 border-t">
            <p className="text-blue-600 font-medium">Thank you for choosing TravelGenie!</p>
            <p className="text-sm text-gray-500 mt-1">This invoice serves as confirmation of your payment.</p>
          </div>

          {/* Footer */}
          <div className=" pt-2 border-t text-center text-xs text-gray-500">
            <p>TravelGenie Inc. | Road-13, Sector-7, Uttara, Dhaka North, 1230</p>
            <p>Phone: (555) 123-4567 | Email: info@travelgenie.com | www.travelGenie.com</p>
            <p className="mt-2">Invoice generated on {currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Invoice
