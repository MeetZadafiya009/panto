import nextArrow from './../assets/images/Frame 48095395 (2).png';
const NextArrow=({onClick})=>{
    return(
        <>
            <div className="slick-next" onClick={onClick}>
                <img src={nextArrow} alt="nextArrow"/>
           </div>
        </>
    )
}
export default NextArrow;