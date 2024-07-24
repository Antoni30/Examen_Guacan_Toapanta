export function InputNumber({ formName, label, id }) {
    return (
        <div className="input-group">
            <label htmlFor={formName}>{label}</label>
            <input type="number" name={id} id={id} />
        </div>
    )
}