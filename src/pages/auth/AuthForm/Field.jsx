const Field = (props) => {
  const { field, value, onChange } = props;

  return (
    <div className="flex flex-col my-4">
      <label htmlform={field.label} className="pl-1 text-slate-500">
        {field.label}
      </label>
      <input
        id={field.label}
        type={field.type}
        value={value}
        onChange={onChange}
        className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-emerald-600 w-64"
      />
    </div>
  );
};

export default Field;
