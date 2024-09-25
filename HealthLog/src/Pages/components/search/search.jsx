import '../search/search.css'
import lupa from '../../../assets/lupa.png'


export default function Search () {
    return (
        <>
            <div className='pesquisaBar'>
                <img src={lupa} alt="" />
                <input type="text" />
            </div>
        </>
    )
}