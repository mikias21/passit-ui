const ComingSoon = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="col-span-12 xl:col-span-8 mt-8 flex flex-col items-center">
        <img
          src="/images/coming.gif"
          alt="COMING SOON"
          width={450}
          height={450}
          className="shadow-md object-contain"
        />
        <p className="tex-slate-800 font-popins text-sm mb-5 mt-7">
          We are working on we will be here soon ...
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
