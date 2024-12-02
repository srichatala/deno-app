import { useEffect, useState } from "react";

export default function Payment() {
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/v1/payments/`);
      const data = await response.json() as Dino[];
      setPayments(data);
    })();
  }, []);

  return (
    <main>
        <h1>Payments</h1>
        <table>   
            <th>Payment Id</th>
            <th>Customer Id</th> 
            <th>Staff Id</th> 
            <th>Rental Id</th> 
            <th>Amount</th> 
            <th>Payment Date</th> 
        {payments.map((payment: any) => {
            return (
                <tr>
                    <td>{payment.paymentId}</td>
                    <td>{payment.customerId}</td>
                    <td>{payment.staffId}</td>
                    <td>{payment.rentalId}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.paymentDate}</td>
                </tr>
            );
        })}
        </table>
    </main>
  );
}