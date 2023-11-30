import React from 'react';
import { Suspense } from 'react';

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        //lazy loading component: here greeter to be loaded async , meaning that this component to be available only after 5000 ms,
        //during 5000 ms  , we need to show some Spinner,thats where loading.js code 
        //to be used
        setTimeout(resolve, 8000, import('./greeter'))
    })
});

export default function DashboardPage(props) {
    return <>
        <h1>Header</h1>
        {/* <Welcome /> */}
        <Suspense fallback={<h1>Loading.....</h1>}>
            <Welcome />
        </Suspense>
        <h1>Footer</h1>
    </>
}