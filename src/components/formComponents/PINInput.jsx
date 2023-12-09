const PINInput = () => {
  return (
    <div className="mb-4">
      <label htmlFor="pin" className="block text-sm font-semibold mb-2">
        PIN code
      </label>
      <div className="space-x-2">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <input
            id="pin"
            key={index}
            type="text"
            maxLength="1"
            className="w-10 h-10 border border-slate-300 p-4 rounded focus:outline-none focus:border-secondary text-center"
          />
        ))}
      </div>
    </div>
  );
};

export default PINInput;
