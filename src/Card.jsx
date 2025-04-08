
import profile from './assets/profile.jpeg'


function Card (){
    return(

           <div className="Card">
            <img className='Card-image' src={profile} alt="profile picture" />
            <h2 className='Card-title'>Ashraful Islam Shohan</h2>
            <p className='Card-text'>I studies at North South University</p>
           </div>

    )
}

export default Card 