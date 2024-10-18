import JobListing from './JobListing';
import jobs from '../jobs.json'

const JobsListings = () => {
  const recentJobs = jobs.slice(0,3);
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 text-center mb-6'>
          Browse Jobs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Використовуємо map для відображення кожного елементу з jobs.json */}
          {recentJobs.map((job, ) => (
              <JobListing key={job.id} job={job}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsListings;
