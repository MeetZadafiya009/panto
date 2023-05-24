import star from './../assets/images/__star.png';
import light from './../assets/images/light.png';
const Review=()=>{
    return (
        <>
            <div className='riview-wrapper flex-center'>
                <div className='review'>
                    <img src={star}  alt='riview-image' />
                    <img src={star} alt='riview-image' />
                    <img src={star} alt='riview-image' />
                    <img src={star} alt='riview-image' />
                    <img src={light} alt='riview-image' />
                </div>
            </div>
        </>
    )
}

export default Review;