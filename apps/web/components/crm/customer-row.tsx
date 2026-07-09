"use client";

import { Badge } from "@/components/ui/badge";

import { CustomerAvatar } from "./customer-avatar";

import { Customer } from "@/lib/types/crm";

interface CustomerRowProps {
  customer: Customer;
}

export function CustomerRow({
  customer,
}: CustomerRowProps) {
  return (
    <tr className="border-b hover:bg-muted/30 transition">

      <td className="px-4 py-4">

        <div className="flex items-center gap-3">

          <CustomerAvatar
            name={customer.name}
          />

          <div>

            <p className="font-medium">
              {customer.name}
            </p>

            <p className="text-sm text-muted-foreground">
              {customer.email}
            </p>

          </div>

        </div>

      </td>

      <td className="px-4">
        {customer.company}
      </td>

      <td className="px-4">
        {customer.phone}
      </td>

      <td className="px-4">

        <Badge>

          {customer.status}

        </Badge>

      </td>

      <td className="px-4">

        <Badge variant="outline">

          {customer.stage}

        </Badge>

      </td>

      <td className="px-4 font-semibold">
        {new Intl.NumberFormat("en-IN").format(customer.revenue)}
      </td>

      <td className="px-4">
        {customer.owner}
      </td>

      <td className="px-4">
        {customer.lastActivity}
      </td>

      <td className="px-4">

        <div className="font-bold text-primary">

          {customer.aiScore}

        </div>

      </td>

    </tr>
  );
}