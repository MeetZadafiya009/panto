import star from './../assets/images/star.png';
const Star=()=>{
    return(
        <>
            <div className='star-wrapper d-flex'>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
                <img src={star} alt='star'/>
            </div>
        </>
    )
}

export default Star;