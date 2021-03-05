import { FeedProvider } from "./feedProvider";
import { ModalProvider } from "./modals";
import { UserProvider } from "./user";

function GlobalProvider({children} : {children : React.ReactNode}){
    return(
        <>
            <UserProvider>
                <FeedProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </FeedProvider>
            </UserProvider>
        </>
    )
}
export default GlobalProvider;