"use client";

import { Eye } from "lucide-react";

export function TotalVisitors({ count = 0 }: { count?: number }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4 flex-1">
      <div className="flex items-center gap-2 self-start">
        <Eye className="w-5 h-5 text-gray-500" />
        <span className="font-semibold text-lg text-gray-900">Total Views</span>
      </div>
      <span className="text-5xl font-bold text-purple-600 mt-4">{count.toLocaleString()}</span>
      <p className="text-gray-500 text-sm">Unique page visits since May-2026</p>
    </div>
  );
}
