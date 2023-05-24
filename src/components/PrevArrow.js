import prevArrow from './../assets/images/Frame 48095401.png';
const PrevArrow=({onClick})=>{
    return(
        <>
           <div className="slick-prev" onClick={onClick}>
                <img src={prevArrow} alt="prevArrow"/>
           </div>
        </>
    )
}
export default PrevArrow;