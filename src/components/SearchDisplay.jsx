import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SearchDisplay = ({searchValue ,cacheId, title, link, snippet, displayLink, pagemap})=> {
    return (
        <div key={cacheId} className="flex gap-4 md:w-[50%]">
            {searchValue.includes("img" || "image" || "images") && <LazyLoadImage effect="blur" src={pagemap?.cse_image[0]?.src} alt="" className="rounded-md w-36 aspect-square object-cover" />}
            <div className='text-sm md:text-lg'>
                <a href={link} className="font-black text-blue-400 underline underline-offset-2">{title}</a>
                <p className="font-thin text-green-400">{displayLink}</p>
                <p className="text-black">{snippet}</p>
            </div>
        </div>
    )
}

export default SearchDisplay;