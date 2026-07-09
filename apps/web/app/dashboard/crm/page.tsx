import { CustomerToolbar } from "@/components/crm/customer-toolbar";
import { CustomerFilters } from "@/components/crm/customer-filters";
import { CustomerTable } from "@/components/crm/customer-table";

export default function CRMPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Customer CRM
        </h1>

        <p className="text-muted-foreground mt-2">
          Manage customers, companies, contacts and activities.
        </p>

      </div>

      <CustomerToolbar />

      <CustomerFilters />

      <CustomerTable />

    </div>
  );
}