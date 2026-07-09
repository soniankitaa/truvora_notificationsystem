import { customers } from "@/lib/data/crm-data";

import { CustomerRow } from "./customer-row";

export function CustomerTable() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-muted/50">

            <tr>

              <th className="px-4 py-4 text-left">
                Customer
              </th>

              <th className="px-4 py-4 text-left">
                Company
              </th>

              <th className="px-4 py-4 text-left">
                Phone
              </th>

              <th className="px-4 py-4 text-left">
                Status
              </th>

              <th className="px-4 py-4 text-left">
                Stage
              </th>

              <th className="px-4 py-4 text-left">
                Revenue
              </th>

              <th className="px-4 py-4 text-left">
                Owner
              </th>

              <th className="px-4 py-4 text-left">
                Activity
              </th>

              <th className="px-4 py-4 text-left">
                AI Score
              </th>

            </tr>

          </thead>

          <tbody>

            {customers.map((customer) => (

              <CustomerRow
                key={customer.id}
                customer={customer}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}