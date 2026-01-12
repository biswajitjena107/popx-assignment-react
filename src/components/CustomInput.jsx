const CustomInput = ({ label, type = "text", value, onChange, name, required }) => {
  return (
    <div className="relative mb-4">
      {/* The floating/inset label */}
      <fieldset className={`border ${value ? 'border-pop-primary' : 'border-pop-border'} rounded-md px-3 py-1 transition-colors hover:border-pop-primary`}>
        <legend className="text-xs font-semibold text-pop-primary px-1">
            {label}{required && <span className="text-pop-error">*</span>}
        </legend>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full text-pop-text font-medium outline-none bg-transparent text-sm pb-1"
          required={required}
        />
      </fieldset>
    </div>
  );
};

export default CustomInput;