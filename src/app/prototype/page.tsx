"use client";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function PrototypePage() {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const suggestions = ["Pizza", "Pasta", "Salad"];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setRecent((prev) => [query, ...prev.filter((r) => r !== query)].slice(0, 5));
      toast.success("Search submitted", {
        description: `You searched for "${query}"`,
      });
      setQuery("");
    }
  };

  return (
    <div className="container mx-auto space-y-6 py-10">
      <Toaster />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Prototype</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-1/3" />
        </div>
      ) : (
        <form onSubmit={handleSearch} className="space-y-4">
          <label htmlFor="search" className="sr-only">
            Smart search
          </label>
          <Input
            id="search"
            list="search-suggestions"
            placeholder="Search menu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-describedby="search-help"
          />
          <datalist id="search-suggestions">
            {suggestions.map((s) => (
              <option value={s} key={s} />
            ))}
            {recent.map((r) => (
              <option value={r} key={r} />
            ))}
          </datalist>
          <p id="search-help" className="text-sm text-muted-foreground">
            Start typing to see suggestions. Recent searches appear automatically.
          </p>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="submit">Search</Button>
            </TooltipTrigger>
            <TooltipContent>Submit search</TooltipContent>
          </Tooltip>
        </form>
      )}

      {!loading && recent.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold">Recent searches</h2>
          <ul className="mt-2 list-disc pl-4 text-sm">
            {recent.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
