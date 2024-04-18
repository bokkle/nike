const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`rounded-xl border-2 
      ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} 
      cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="bg-card flex items-center justify-center rounded-xl border
      bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40"
      >
        <img
          src={imgURL.thumbnail}
          width={127}
          height={103}
          className="object-contain"
          alt="shoe collection"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
