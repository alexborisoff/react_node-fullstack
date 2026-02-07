import '../App.css';
import { useNavigate } from 'react-router';

export const ShoesList = ({ shoes }) => {
    let navigate = useNavigate();

    return (
        <>
            {shoes.map((shoe) => {
                return (
                    <div className="shoe" key={shoe.id} onClick={()=> navigate(`/shoe/${shoe.id}`)}>
                        <a className="shoe_photo">
                            <img src={shoe.photo} />
                        </a>
                        <div className="shoe_title">
                            <div className="shoe_title_type">
                                {shoe.type}
                            </div>
                            <div className="shoe_title_info">
                                {shoe.title}
                            </div>
                            <div className="shoe_title_price">
                                {shoe.price}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};
