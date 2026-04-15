"use client";

import { useQuery } from "@tanstack/react-query";
import { TotalVisitors } from "@/components/TotalVistors";
import { AppreciationCount } from "@/components/AppreciationCount";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export default function AboutPortfolio() {
    const queryClient = useQueryClient();
    const hasTracked = useRef(false); 
  
    // Clicking love button 
    const { mutate }=useMutation({
      mutationFn: () => fetch("/api/resumeapi/visits", { method: "POST" }),
      onSuccess: () => {
        // refresh the GET query
        queryClient.invalidateQueries({ queryKey: ["visitorStatus"] });
      },
    });
    useEffect(() => {
        if (!hasTracked.current) {
            hasTracked.current = true;
            mutate()
        }
    },[mutate])
  
  //fetching data 
  const { data, isPending, error } = useQuery<{
    total_visitors: number;
    total_love_count: number;
  }>({
    queryKey: ["visitorStatus"],
    queryFn: () => fetch("/api/resumeapi").then((r) => r.json()),
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 25 * 60 * 1000, // 25 minutes
  });

  if (isPending) return <span className="bg-brand">Loading...</span>;
  if (error) return <span className="bg-brand">Oops! Something went wrong!</span>;

  return (
    <section className="bg-brand-bg px-10  max-sm:px-4 max-sm:py-10">
      <div className="bg-brand-text-secondary border-0 rounded-b-none rounded-tr-4xl rounded-tl-4xl p-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-bg mb-2">
            About this portfolio.
          </h2>
          <p className="text-brand-text mb-10">
            Insights and metrics about this portfolio website
          </p>
          <div className="flex gap-6 max-sm:flex-col">
            <TotalVisitors count={data.total_visitors?? 0} />
            <AppreciationCount count={data.total_love_count?? 0} />
          </div>
        </div>
      </div>
    </section>
  );
}
