import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageDisplay = ({pagemap})=> {
    console.log(pagemap?.imageobject)
    const images = pagemap?.imageobject?.map((img, index)=> <LazyLoadImage effect="blur" key={index} src={img.contenturl} className='w-52 aspect-square' alt="hhh" /> )
    return (
            <div className='border-2 border-emerald-700'>
                {images} 
            </div>
        )
}

export default ImageDisplay;