const CardOne = ({ title, amount, Icon }) => {
  return (
    <div className="rounded-sm bg-white p-4 py-6 px-7.5 shadow-lg font-popins dark:bg-[#111] dark:text-slate-200">
      <div className="flex h-11.5 w-11.5 rounded-full bg-meta-2 dark:bg-meta-4">
        <p>{title}</p>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {amount}
          </h4>
        </div>

        <span className="flex items-center gap-1 font-medium text-blue text-base">
          <Icon />
        </span>
      </div>
    </div>
  );
};

export default CardOne;
