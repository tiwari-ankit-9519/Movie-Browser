import { Skeleton } from "@/components/ui/skeleton";

export default function HeroSectionSkeleton() {
  return (
    <div className="flex flex-col space-y-3 bg-white rounded-xl">
      <Skeleton className="h-[38rem] w-full " />
    </div>
  );
}
