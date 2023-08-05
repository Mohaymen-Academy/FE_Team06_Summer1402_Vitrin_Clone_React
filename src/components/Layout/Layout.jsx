import React, { useState, useEffect, createContext } from 'react'
import Header from './Header'
import Footer from './Footer'
const IntersectionContext = createContext();

const handlescroll= (e)=> {
    console.log('zarp')
}

function Layout({ children }) {
    const [intersectionObserver, setIntersectionObserver] = useState(null);
    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetImage = entry.target;
                    targetImage.classList.remove('animate-skeleton-loading')
                    targetImage.src = targetImage.dataset.src
                }
            });
        }
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        const observer = new IntersectionObserver(handleIntersect, options);
        setIntersectionObserver(observer);
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <IntersectionContext.Provider value={intersectionObserver}>
            <Header />
            {children}
            <Footer />
        </IntersectionContext.Provider>
    )
}
export {IntersectionContext,handlescroll};
export default Layout;
