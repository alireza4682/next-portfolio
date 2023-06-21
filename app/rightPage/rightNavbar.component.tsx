import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../components/ui/navbar";
const RightNavbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="text-red-400">yo</NavigationMenuItem>
        <NavigationMenuItem>hey</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default RightNavbar;
