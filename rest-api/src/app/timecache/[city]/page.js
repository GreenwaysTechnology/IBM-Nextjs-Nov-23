
//ISR  = SSG + revalidation

//route segment option
// export const revalidate = 2

export default async function CachePage(props) {
    //without cache
    // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })

    //Full cache enable
    // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    //revalidation as part of api 
    // const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { next: { revalidate: 2 } })
    const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
    // const response = await fetch(`http://worldtimeapi.org/api/timezone/Asia/${props.params.city}`);

    const data = await response.json();
    return <>
        <h1>Time Now : {new Date(data.datetime).toLocaleTimeString()} </h1>
        {/* <h1>ISR Details page {JSON.stringify(props)}</h1> */}
    </>
}
// export async function generateStaticParams() {
//     return [{ city: 'Kolkata' }];
// }

//ssg + revalidation  =ISR 