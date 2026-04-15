"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query"; 

export function AppreciationCount({ count = 0 }: { count?: number }) {
  const [liked, setLiked] = useState(false);
    
  const queryClient = useQueryClient();
                                            
   const { mutate } = useMutation({
     mutationFn: () => fetch("/api/resumeapi", { method: "POST" }),
     onSuccess: () => {
       setLiked(true);
       // refresh the GET query
       queryClient.invalidateQueries({ queryKey: ["visitorStatus"] });
     },
   });


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center gap-4 flex-1">
      <div className="flex items-center gap-2 self-start">
        <Heart className="w-5 h-5 text-pink-400" />
        <span className="font-semibold text-lg text-gray-900">Appreciation Count</span>
      </div>
      <span className="text-5xl font-bold text-red-500 mt-4">{count.toLocaleString()}</span>
      {liked ? (
        <div className="flex items-center gap-2 bg-purple-50 text-purple-700 rounded-full px-4 py-2 text-sm">
          <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
          Thank you, much appreciated!
        </div>
      ) : (
        <button
          onClick={()=>mutate()}
          className="flex items-center gap-2 bg-purple-400 text-amber-100 hover:bg-purple-200 hover:text-purple-700 rounded-full px-4 py-2 text-sm cursor-pointer transition-colors"
        >
          <Heart className="w-4 h-4 text-amber-400" />
          Like this portfolio
        </button>
      )}
    </div>
  );
}
