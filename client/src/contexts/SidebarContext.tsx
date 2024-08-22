import React, { createContext, useContext } from 'react';

interface SidebarContextType {
  isHidden?: boolean;
  setIsHidden: (isHidden: boolean) => void;
  toggleSidebar: () => void;
}
export const SidebarContext = createContext<SidebarContextType>({
    isHidden: false,
    setIsHidden: () => {},
    toggleSidebar: () => {},
    });

interface SidebarProviderProps {
    children: React.ReactNode;
    }

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {

  const [isHidden, setIsHidden] = React.useState(true);

  const toggleSidebar = () => {
    setIsHidden(prevIsHidden => !prevIsHidden);
  };
  console.log(isHidden)
  return (
    <SidebarContext.Provider value={{ setIsHidden,isHidden, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);