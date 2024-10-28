import { Button } from "@/components/ui/button"
import { LuPlus } from "react-icons/lu";
export function ProductButton() {
  return (
    <>
      <div className="flex justify-center items-center mt-12 p-8">
      <Button className="bg-slate-700 hover:bg-gray-900 text-white text-xl font-serif rounded-md p-8 px-10"> <LuPlus className="mx-2" /> See All Products</Button>
      </div>
    </>
  )
}