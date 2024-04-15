import React from "react";
import Logo from "@/app/components/ui/Logo";

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

interface SideMenuProps {
  currentView: string;
  setCurrentView: (view: ViewType) => void;
  currentUserType: "company" | "farmer";
  setCurrentUserType: (userType: "company" | "farmer") => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  currentView,
  setCurrentView,
  currentUserType,
  setCurrentUserType,
}) => {
  return (
    <div className="z-50 flex h-full w-56 flex-col items-start border border-zinc-100 bg-white px-6 py-6 shadow-md">
      <Logo />

      <div className="flex h-full w-full flex-col justify-between">
        <div className="mt-8 flex w-full flex-col items-start justify-between gap-2">
          {/* Company Specific Menu Items */}
          {currentUserType === "company" && (
            <>
              <button
                onClick={() => setCurrentView("homeCompany")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "homeCompany"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentView("farmsCompany")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "farmsCompany"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Farms
              </button>
              <button
                onClick={() => setCurrentView("learnCompany")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "learnCompany"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Learn
              </button>
            </>
          )}

          {/* Farmer Specific Menu Items */}
          {currentUserType === "farmer" && (
            <>
              <button
                onClick={() => setCurrentView("homeFarmer")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "homeFarmer"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentView("farmFarmer")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "farmFarmer"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Farm
              </button>

              <button
                onClick={() => setCurrentView("learnFarmer")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "learnFarmer"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Learn
              </button>
              <button
                onClick={() => setCurrentView("communityFarmer")}
                className={`w-full rounded-md px-3 py-2 text-left hover:bg-zinc-100 ${
                  currentView === "communityFarmer"
                    ? "bg-zinc-100 font-medium text-zinc-950"
                    : "text-zinc-500"
                }`}
              >
                Community
              </button>
            </>
          )}
        </div>
        <div className="flex w-full justify-between gap-4">
          <button
            onClick={() => setCurrentUserType("company")}
            className={`w-full rounded-md px-3 py-2 text-sm text-center hover:bg-zinc-100 ${
              currentUserType === "company"
                ? "bg-zinc-100 font-medium text-zinc-950"
                : "text-zinc-500"
            }`}
          >
            Company
          </button>
          <button
            onClick={() => setCurrentUserType("farmer")}
            className={`w-full rounded-md text-sm px-3 py-2 text-center hover:bg-zinc-100 ${
              currentUserType === "farmer"
                ? "bg-zinc-100 font-medium text-zinc-950"
                : "text-zinc-500"
            }`}
          >
            Farmer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
