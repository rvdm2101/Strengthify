import React, { useCallback, useState } from "react";

interface AuthProfile {
    username: string;
}

type loginCallback = (username: string, password: string) => void;
type registerCallback = (username: string, email: string, password: string) => void;

interface AuthContextProps {
    profile: AuthProfile | undefined;
    login: loginCallback;
    register: registerCallback;
}

export const AuthContext = React.createContext<AuthContextProps>({
    profile: undefined,
    login: () => {},
    register: () => {}
});

export const AuthProvider = ({ children }: any) => {
    const [profile, setProfile] = useState<AuthProfile | undefined>(undefined);

    const login = useCallback<loginCallback>((username, password) => {
        setProfile({ username });
    }, []);

    const register = useCallback<registerCallback>((username, email, password) => {
        setProfile({ username });
    }, []);

    return (
        <AuthContext.Provider value={{ profile, login, register }}>{children}</AuthContext.Provider>
    );
}