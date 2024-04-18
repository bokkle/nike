import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center justify-center sm:flex-col">
      <img
        src={imgURL}
        className="h-[120px] w-[120px] rounded-full object-cover"
        alt="customer"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="m-0 object-contain"
          alt=""
        />
        <p className="font-montserrat text-slate-gray text-xl">({rating})</p>
        <h3 className="font-palanquin mt-1 text-center text-3xl font-bold">
          {customerName}
        </h3>
      </div>
    </div>
  );
};

export default ReviewCard;
