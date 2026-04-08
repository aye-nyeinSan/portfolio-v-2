"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { CertificateData } from "@/types/person";


export default function CertificateCard() {
  const [page, setPage] = useState(1);

  const { data, isPending, error } = useQuery<CertificateData[]>({
    queryKey: ["certificates", page],
    queryFn: () =>
      fetch(`/api/certificates?page=${page}`).then((r) => r.json()),
  });

  if (isPending) return <span className="bg-brand">Loading...</span>;
  if (error)
    return <span className="bg-brand">Oops! Something went wrong!</span>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {data?.map((cert) => (
        <a
          key={cert.name}
          href={cert.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={cert.imageUrl}
              alt={cert.name}
              className="aspect-square w-full object-contain bg-white p-4"
            />
            <CardHeader>
              <CardTitle className="text-sm leading-tight">
                {cert.name}
              </CardTitle>
              <CardDescription>{cert.orgnization}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between text-xs text-muted-foreground">
              <span>Earned: {cert.earnedDate}</span>
              {cert.expirationDate && (
                <span>
                  Expires:{" "}
                  {cert.expirationDate
                    ? cert.expirationDate
                    : "This credential does not expire"}
                </span>
              )}
            </CardFooter>
          </Card>
        </a>
      ))}
    </div>
  );
}
