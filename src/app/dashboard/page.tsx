"use client";

import React, { useState, useEffect } from "react";
import HomeCompany from "./Views/Company/HomeCompany";
import FarmersCompany from "./Views/Company/FarmersCompany";
import SideMenu from "./components/ui/SideMenu";
import HomeFarmer from "./Views/Farmer/HomeFarmer";
import FarmFarmer from "./Views/Farmer/FarmFarmer";
import LearnFarmer from "./Views/Farmer/LearnFarmer";
import CommunityFarmer from "./Views/Farmer/CommunityFarmer";

type ViewType =
  | "homeCompany"
  | "farmsCompany"
  | "mapCompany"
  | "learnCompany"
  | "homeFarmer"
  | "farmFarmer"
  | "mapFarmer"
  | "learnFarmer"
  | "communityFarmer";

type UserType = "company" | "farmer";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>("homeFarmer");
  const [currentUserType, setCurrentUserType] = useState<UserType>("farmer");

  useEffect(() => {
    // Update the currentView based on the currentUserType
    setCurrentView(currentUserType === "company" ? "homeCompany" : "homeFarmer");
  }, [currentUserType]);

  return (
    <main className="flex h-[100vh] w-screen">
      <SideMenu
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentUserType={currentUserType}
        setCurrentUserType={setCurrentUserType}
      />

      <div className="w-full overflow-y-auto bg-white p-8">
        {currentView === "homeCompany" && <HomeCompany />}
        {currentView === "farmsCompany" && <FarmersCompany />}

        {currentView === "homeFarmer" && <HomeFarmer />}
        {currentView === "farmFarmer" && <FarmFarmer />}
        {currentView === "learnFarmer" && <LearnFarmer />}
        {currentView === "communityFarmer" && <CommunityFarmer />}
      </div>
      <div className="absolute z-[100] top-6 text-xs font-medium right-6 rounded-full bg-indigo-100 px-4 py-2 ">Note: This is an early demo, a very rough first draft</div>
    </main>
  );
}
