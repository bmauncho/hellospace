import { usePathname } from "next/navigation";

const usePageName = (): string => {
  const currentPath = usePathname();
  const pageName = currentPath?.split("/").filter(Boolean).pop() || "home";

  const formatPageName = (str: string): string => {
    if (!str) return ""; // Handle empty strings

    const spaced = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // Add space between camelCase words
    return spaced.charAt(0).toUpperCase() + spaced.slice(1); // Capitalize the first letter
  };

  return formatPageName(pageName);
};

export default usePageName;
