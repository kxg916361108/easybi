import withSuspenseFallback from './withSuspenseFallback';
import {Routes, Route, Link} from "react-router-dom";
import {ROUTES} from "../../constants/constants";
import React from "react";
// 通过lazy实现懒加载
const SigninPage = withSuspenseFallback(
    React.lazy(() => import('../login/Login'))
);
const PageNotFound = withSuspenseFallback(
    React.lazy(() => import('../page-not-found/PageNotFound'))
);
const AppRouter = () => {
    return (
        <Routes>
            {/*path={ROUTES.SIGNIN}*/}
            <Route path="/" element={<SigninPage />}/>
            {/*<Route exact path={ROUTES.HOME}>*/}
            {/*    /!*此处需要添加用户登录验证成功的消息*!/*/}
            {/*    {true ? (*/}
            {/*        <>*/}
            {/*            <Link to={ROUTES.SIGNIN}/>*/}
            {/*        </>*/}
            {/*    ) : (*/}
            {/*        <Link to={ROUTES.MY_DATA}/>*/}
            {/*    )}*/}
            {/*</Route>*/}
            <Route path={ROUTES.NOT_FOUND} element={<PageNotFound />}/>
        </Routes>
    );
}
export default AppRouter;