import { Link } from "react-router-dom";

const MealCart = ({ name, image, id }) => {
  return (
    <div className="hover:rotate-[360deg] shadow-xl hover:delay-[0.1s] transition-all  border-[8px] rounded-[30px]  border-amber-700 relative  image-card">
      <Link to={`/Detail/${id}`}>
        <img
          className=" h-[200px]  md:h-[300px] w-[300px] object-cover rounded-[20px] image"
          src={image}
          alt=""
        />
      </Link>
    </div>
  );
};

export default MealCart;
