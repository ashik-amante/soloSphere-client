import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'



const TabCategories = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()

    }, [])
    return (
        <Tabs>
            <div className='container mx-auto px-6 py-12'>
                <h1 className='text-3xl font-semibold text-center mb-4'>Browse Jobs By Categories </h1>
                <p className='text-center mb-5'>Enthusiastically monetize principle-centered vortals without team building metrics. Dynamically parallel task leveraged collaboration and idea-sharing via team driven infomediaries. Intrinsicly.</p>
                <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j=> j.category === 'Web Development').map(job =>
                                <JobCard key={job._id} job={job}></JobCard>
                            )
                        }
                    </div>
                </TabPanel>


                <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j=> j.category === 'Graphics Design').map(job =>
                                <JobCard key={job._id} job={job}></JobCard>
                            )
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            jobs.filter(j=> j.category === 'Digital Marketing').map(job =>
                                <JobCard key={job._id} job={job}></JobCard>
                            )
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;