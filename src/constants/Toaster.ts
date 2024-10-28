import { toast } from 'react-toastify';

export default function Toaster(message:string,type:string) {
    const successNotify = (v:string) => toast.success(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // progressClassName: "fancy-progress-bar",
      });
      const errorNotify = (v:string) => toast.error(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // progressClassName: "fancy-progress-bar",
      });
      const infoNotify = (v:string) => toast.info(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      const warnNotify = (v:string) => toast.warn(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // progressClassName: "fancy-progress-bar",
      });
      const fancyNotify = (v:string) => toast(v, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // progressClassName: "fancy-progress-bar",
      });
      if(type==='success'){
        successNotify(message);
      }
      else if(type==='error'){
        errorNotify(message);
      }
      else if(type==='info'){
        infoNotify(message);
      }
      else if(type==='warn'){
        warnNotify(message);
      }
      else{
        fancyNotify(message);
      }
}