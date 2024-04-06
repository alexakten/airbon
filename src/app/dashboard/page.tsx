"use client";

import React, { useState } from "react";
import HomeView from "./Views/HomeView";
import FarmersView from "./Views/FarmersView";
import Logo from "../components/ui/Logo";

type ViewType = "home" | "farmers" | "map";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("home");



  return (
    <main className="grid h-[100vh] w-screen grid-cols-8">
      <div className="col-span-2 flex flex-col items-start bg-zinc-100 px-8 py-6">
        <Logo />
        <div className="mt-8 flex w-full flex-col  items-start gap-2">
          <button
            onClick={() => setCurrentView("home")}
            className={`w-full text-left rounded-md px-3 py-2 ${currentView === "home" ? "bg-zinc-200 font-medium text-zinc-950" : ""
              }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentView("farmers")}
            className={`w-full text-left rounded-md px-3 py-2 ${currentView === "farmers" ? "bg-zinc-200 font-medium text-zinc-950" : ""
              }`}
          >
            Farmers
          </button>
          <button
            onClick={() => setCurrentView("map")}
            className={`w-full text-left rounded-md px-3 py-2 ${currentView === "map" ? "bg-zinc-200 font-medium text-zinc-950" : ""
              }`}
          >
            Map
          </button>
        </div>
      </div>
      <div className="col-span-6 bg-white p-8 overflow-y-auto">
        {currentView === 'home' && <HomeView />}
        {currentView === 'farmers' && <FarmersView />}
      </div>
    </main>
  );
}
