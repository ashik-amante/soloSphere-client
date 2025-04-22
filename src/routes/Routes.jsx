import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import JobDetails from '../pages/JobDetails'
import Addjobs from '../pages/Addjobs'
import ErrorPage from '../pages/ErrorPage'
import MyPostedJobs from '../pages/MypostedJobs'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element: <Home></Home>,
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/job/:id',
                element:<JobDetails></JobDetails>,
                // loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
                loader: ({ params }) =>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path:'/add-job',
                element:<Addjobs></Addjobs>
            },
            {
                path:'/my-posted-jobs',
                element:<MyPostedJobs></MyPostedJobs>
            },
            
        ]
    },
])

export default router