import { getCurrentUser } from "@/lib/appwrite";
import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface GlobalContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<{}>>;
  user: {} | null;
  loading: boolean;
}
interface GlobalProviderProps {
  children: ReactNode;
}

// Initialize the context with a type, starting with `null`
const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = useContext(GlobalContext);
const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{} | null>(null);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        setUser(null);
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
