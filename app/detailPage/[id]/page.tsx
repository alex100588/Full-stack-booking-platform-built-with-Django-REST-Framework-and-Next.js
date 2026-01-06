import { Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ReservationSidebar from "@/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-16">
      {/* Container centralizat */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Imagine */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="/card-images/image1.avif" // pune calea imaginii tale
            alt="Property"
            fill
            className="object-cover"
          />
          {/* Buton Favorite */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 rounded-full p-2 bg-white hover:bg-gray-100"
          >
            <Heart className="w-6 h-6 text-red-500" />
          </Button>
        </div>

        {/* Detalii + Rezervare în 2 coloane */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Detalii */}
          <div className="md:w-1/2 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Numele Proprietății</h1>
            <p className="text-gray-600 text-lg">
              3 camere • 2 băi • 3 dormitoare
            </p>
            <p className="text-2xl font-bold text-gray-800 mt-2">200 RON</p>

            {/* Host */}
            <div className="flex items-center gap-2 mt-4">
              <Image 
                src="/host/images.webp"
                alt="Host"
                width={45}
                height={45}
                className="object-cover rounded-full"
              />
              <p className="text-gray-800"><strong>Alex</strong> is your host</p>
            </div>
          </div>

          {/* Reservation Sidebar */}
          <div className="md:w-1/2">
            <ReservationSidebar />
          </div>
        </div>

        {/* Descriere */}
        <div className="mt-4 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Descriere</h2>
          <p>
            Aceasta este o descriere statică a proprietății. Poți adăuga aici orice
            detalii relevante despre casă, facilități, apropiere de zone de interes
            și alte informații utile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
