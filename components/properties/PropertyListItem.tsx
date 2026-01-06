import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* IMAGE */}
      <div className="relative w-full h-40">
        <Image
          src="/card-images/image1.avif" // pune calea imaginii tale
          alt="Property"
          fill
          className="object-cover"
        />
        {/* ADD TO FAVOURITE */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full p-2 bg-white hover:bg-gray-100"
        >
          <Heart className="w-5 h-5 text-red-500" />
        </Button>
      </div>

      {/* TEXT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Beautiful Beach House</h3>
        <p className="text-sm text-gray-600 mt-1">
          3 beds • 2 baths • Ocean view
        </p>

        {/* PRICE */}
        <p className="mt-2  font-bold text-gray-800">200 RON</p>
      </div>
    </div>
  );
};

export default PropertyListItem;
