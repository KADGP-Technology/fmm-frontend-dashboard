import { createContext, useEffect, useState } from 'react';
import { userCheck } from '../server/apis/user';
// import { Storage } from '../storage/Storage';
// import { loginUser } from '../server/apis';


export const AuthContext= createContext(null);

export const AuthProvider = ({ children }) => {


    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userRole, setUserRole] = useState('User');
    const [userInfo, setUserInfo] = useState(null);
    const [wantToBeRole, setWantToBeRole] = useState('User');



    const login = async (data: any) => {
        console.log("Data==>",data);
        setIsLoading(true);
        try {
            
            const response = await userCheck(data);
            if (response.data.status === 200) {

                setUserInfo(response.data.data);
                console.log("Context Response==>",response.data.data);
                // setUserToken(response.data.payload.token);
                // setUserRole(response.data.payload.user.role);
                localStorage.setItem('userInfo',JSON.stringify(response.data.data))
                // await Storage.setItem('userToken', response.data.payload.token);
                // await Storage.setItem('userRole', response.data.payload.user.role);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);

        }
    };

    // const logout = async () => {
    //     setIsLoading(true);
    //     setUserToken(null);
    //     setUserInfo(null);
    //     await Storage.removeItem('userToken');
    //     await Storage.removeItem('userRole');
    //     await Storage.removeItem('userInfo');
    //     setIsLoading(false);
    //     ToastAndroid.show('Logout Successfull', 200);
    // };

    // const isLoggedIn = async () => {
    //     try {
    //         setIsLoading(true);
    //         const userToken = await Storage.getItem('userToken');
    //         const userRole = await Storage.getItem('userRole');
    //         const userInfo = await Storage.getItem('userInfo');
    //         if (userToken !== undefined) {
    //             setUserToken(userToken);
    //             setUserRole(userRole);
    //             setUserInfo(userInfo);
    //         }
    //         setIsLoading(false);
    //     } catch (error: any) {
    //         console.log('ERROR', error.message);
    //     }
    // };

    // useEffect(() => {
    //     isLoggedIn();
    // }, []);
    return <AuthContext.Provider 
    value={{ login,userInfo }}>{children}</AuthContext.Provider>;

};
