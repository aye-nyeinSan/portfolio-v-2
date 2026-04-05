"use client";

import { useQuery } from "@tanstack/react-query";
import { TotalVisitors } from "@/components/TotalVistors";
import { AppreciationCount } from "@/components/AppreciationCount";

export default function AboutPortfolio() {
  const { data, isPending, error } = useQuery({
    queryKey: ["visitorStatus"],
      queryFn: () => fetch("/api/resumeapi").then((r) => {
          return r.json();
      }),
    
  });

  if (isPending) return <span className="bg-brand">Loading...</span>;
  if (error) return <span className="bg-brand">Oops! Something went wrong!</span>;

  return (
    <section className="bg-brand-bg px-10  max-sm:px-4 max-sm:py-10">
      <div className="bg-brand-text-secondary border-0 rounded-b-none rounded-tr-2xl rounded-tl-2xl p-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-bg mb-2">
            About this portfolio.
          </h2>
          <p className="text-brand-text mb-10">
            Insights and metrics about this portfolio website
          </p>
          <div className="flex gap-6 max-sm:flex-col">
            <TotalVisitors count={data?.total_visitors ?? 0} />
            <AppreciationCount count={data?.total_love_count ?? 0} />
          </div>
        </div>
      </div>
    </section>
  );
}
