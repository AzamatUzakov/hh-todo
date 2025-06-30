import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import Selected from "./Selected"
import ReviewForm from "./ReviewForm"
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <h2 className="text-xl font-bold">Resume Editor</h2>
            </SidebarHeader>
            <SidebarContent className="p-1">
                <SidebarGroup>
                    <SidebarMenu>
                        <SidebarMenuItem>
                               <Selected/>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                        <ReviewForm/>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>

                <p className="text-xs">© 2025</p>
            </SidebarFooter>
        </Sidebar>
    )
}
