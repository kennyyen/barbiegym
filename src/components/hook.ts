import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
    useEffect(() => {
        AOS.init({
            duration: 400, // Animation duration
            once: false,
        });

        window.addEventListener('scroll', AOS.refresh);
        window.addEventListener('resize', AOS.refresh);

        return () => {
            window.removeEventListener('scroll', AOS.refresh);
            window.removeEventListener('resize', AOS.refresh);
        };
    }, []);
};

export default useAOS;
