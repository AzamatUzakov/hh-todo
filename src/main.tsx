import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/app-sidebar"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <div className="flex gap-3 w-full">
        <AppSidebar />
        <div className="w-full">
          <SidebarTrigger />
          <App />
        </div>
      </div>
    </SidebarProvider>
  </React.StrictMode>
)
