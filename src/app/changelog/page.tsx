import type React from "react";
import { ChangelogView } from "@/components/ChangelogView";
import { getDefaultChangelogPage } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ChangelogPage(): Promise<React.ReactNode> {
  const page = getDefaultChangelogPage();
  return (
    <ChangelogView
      pageId={page.id}
      pagePathName={page.pathName}
      pageName={page.name}
    />
  );
}
