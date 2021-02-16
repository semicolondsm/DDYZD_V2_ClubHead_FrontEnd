import { UserProvider } from "./user";

function GlobalProvider({children} : {children : React.ReactNode}){
    return(
        <>
            <UserProvider>
                {children}
            </UserProvider>
        </>
    )
}
export default GlobalProvider;