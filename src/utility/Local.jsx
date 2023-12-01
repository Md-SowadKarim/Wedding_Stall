
import { toast } from 'react-hot-toast';


const getStoredJob=()=>{
    const job=localStorage.getItem("fav")
    if(job){
        return JSON.parse(job)
    }else{
        return []
    }
}

const savedJob=(id)=>{
    const jobs=getStoredJob()
    const exist=jobs.find(jobId=> jobId.id === id.id)
    if(!exist){
        jobs.push(id)
        localStorage.setItem('fav', JSON.stringify(jobs))
        toast.success(' Add to favourite');
     
    }else{
        toast.success('Already Added');
       
        
    }
    
}

export{getStoredJob,savedJob}