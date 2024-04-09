"use client";

import React, { useState } from "react";
import HomeView from "./Views/HomeView";
import FarmsView from "./Views/FarmsView";
import Logo from "../components/ui/Logo";

type ViewType = "home" | "farms" | "map";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  return (
    <main className="grid h-[100vh] w-screen grid-cols-9">
      <div className="z-50 col-span-2 flex flex-col items-start border border-zinc-100 bg-white px-8 py-6 shadow-md">
        <Logo />
        <div className="mt-8 flex w-full flex-col  items-start gap-2">
          <button
            onClick={() => setCurrentView("home")}
            className={`w-full  rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${currentView === "home"
                ? "bg-zinc-100 font-medium text-zinc-950"
                : "text-zinc-500"
              }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView("farms")}
            className={`w-full  rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${currentView === "farms"
                ? "bg-zinc-100 font-medium text-zinc-950"
                : "text-zinc-500"
              }`}
          >
            Farms
          </button>
          <button
            onClick={() => setCurrentView("map")}
            className={`w-full  rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${currentView === "map"
                ? "bg-zinc-100 font-medium text-zinc-950"
                : "text-zinc-500"
              }`}
          >
            Map
          </button>
        </div>
      </div>
      <div className="col-span-7 overflow-y-auto bg-white p-8">
        {currentView === "home" && <HomeView />}
        {currentView === "farms" && <FarmsView />}
      </div>
    </main>
  );
}
