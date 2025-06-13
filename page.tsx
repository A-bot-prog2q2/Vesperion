import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Vesperion
      </h1>
      <p className="text-center text-lg max-w-md mb-4 italic">
        “Di dunia penuh bajakan, kami hadir… untuk memperparah. Eh, maksudnya, menyadarkan.”
      </p>
      <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
        Masuk dan pura-pura bukan bagian dari ini
      </Button>
      <p className="text-xs text-gray-400 mt-3">
        Akunmu tidak menyelamatkanmu dari dosa digital
      </p>
    </div>
  );
}
