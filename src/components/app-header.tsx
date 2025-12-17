import { SidebarTrigger } from "./ui/sidebar";

const AppHeader = () => {
    return (
        <header className="flex h-14 shrink-0 items-center gap-2 boarder-b px-4 bg-background">
            <SidebarTrigger/>
        </header>
    )
};
export default AppHeader