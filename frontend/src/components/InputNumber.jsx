export function InputNumber({ formName, label, id }) {
    return (
        <div>
            <label htmlFor={formName}>{label}</label>
            <input type="number" name={id} id={id} />
        </div>
    )
}