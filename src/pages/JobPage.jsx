import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
    const {id} = useParams();
    const [job, setJobs]  = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchJob = async () => {
        try {
            const res = await fetch(`/api/jobs/${id}`);
            const data = await res.json();
            console.log(data);
            
            setJobs(data);
          } catch (error) {
            console.log('Error fetching data', error);
          } finally {
            setLoading(false);
          }
      }
    
     fetchJob();
    }, [])
    
  return loading ? <Spinner /> :(
    <div><h1>{job.title}</h1></div>
  )
}

export default JobPage