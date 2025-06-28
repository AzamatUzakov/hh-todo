import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"
import Selected from "./Selected"
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-5">
                <h2 className="text-xl font-bold">Resume Editor</h2>
            </SidebarHeader>
            <SidebarContent className="p-1">
                <SidebarGroup>
                    <SidebarGroupLabel>select</SidebarGroupLabel>
                    <SidebarMenu>
                        <SidebarMenuItem>
                               <Selected/>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton >
                                Settings
                            </SidebarMenuButton>
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
