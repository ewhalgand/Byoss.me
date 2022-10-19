import { createContext, useContext, useState } from "react";

const StepperContext = createContext({ userData: [], setUserData: null, userRole: null, setUserRole: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [userRole, setUserRole] = useState([]);

  return (
    <StepperContext.Provider value={{ userData, setUserData, userRole, setUserRole }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData, userRole, setUserRole } = useContext(StepperContext);

  return { userData, setUserData, userRole, setUserRole };
}