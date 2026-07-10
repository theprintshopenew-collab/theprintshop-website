import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "The Print Shope internal admin dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminShell />;
}
