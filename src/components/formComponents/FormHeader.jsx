const FormHeader = ({ title, info }) => {
  return (
    <>
      <h3 className="text-2xl font-bold mb-4 font-body">{title}</h3>
      <p className="mb-5 font-body text-sm">{info}</p>
    </>
  );
};

export default FormHeader;
