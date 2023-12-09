const FormButton = ({ title }) => {
  return (
    <button className="w-full bg-blue text-white p-3 rounded hover:bg-opacity-90 focus:outline-none focus:shadow-outline">
      {title}
    </button>
  );
};

export default FormButton;
