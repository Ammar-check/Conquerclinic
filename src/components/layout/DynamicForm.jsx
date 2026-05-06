import styles from "./DynamicForm.module.css";

const DynamicForm = ({ data }) => {
  const { fields,title } = data.form;

  const renderField = (field, index) => {
     
    if (field.type === "group") {
      return (
        <div
          key={index}
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${field.columns}, 1fr)` }}
        >
          {field.fields.map((f, i) => renderField(f, i))}
        </div>
      );
    }

    if (field.type === "select") {
      return (
        <select key={index} className={styles.input}>
          {field.options.map((opt, i) => (
            <option  key={i}>{opt}</option>
          ))}
        </select>
      );
    }

    if (field.type === "checkbox") {
      return (
        <label key={index} className={styles.checkbox}>
          <input className={styles.box} type="checkbox" />
          <span>{field.label}</span>
        </label>
      );
    }

    if (field.type === "dob") {
      return (
        <div key={index}>
          <p className={styles.heading}>{field.label}</p>
          <div className={styles.grid} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            <select className={styles.input}></select>
            <select className={styles.input}></select>
            <select className={styles.input}></select>
          </div>
        </div>
      );
    }

    if (field.type === "submit") {
      return (
        <button key={index} className={styles.button}>
          {field.label}
        </button>
      );
    }

    return (
      <input
        key={index}
        type={field.type}
        placeholder={field.placeholder}
        className={styles.input}
      />
    );
  };

  return <div className={styles.container}>
    <h1 className={styles.heading}>{title}</h1>
    {fields.map(renderField)}
    </div>;
};

export default DynamicForm;