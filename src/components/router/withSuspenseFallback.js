import React, { Suspense } from 'react';

export default function withSuspenseFallback(Component) {
    return function DefaultFallback(props) {
        return (
            // 添加页码跳转是的页面加载动作
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        );
    };
}