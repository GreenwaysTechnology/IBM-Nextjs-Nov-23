import MyClient from "./myclient"
import MyServer from "./myserver"
import Review from "./review"

export default function ClientPage() {
    return <div>
        <h1>Client Page</h1>
        <MyClient>
            {/* Here we pass server component as prop to child , so that we never loose the server rendering. */}
            <MyServer />
        </MyClient>
        {/* Review : Client uses another Client */}
        <Review/>
    </div>

}