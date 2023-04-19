const Parameter = ({ parameterText, parameterNumber }) => {
    return (
        <div className="parameter">
            <p className="parameter-text">{parameterText}</p>
            <p className="parameter-number">{parameterNumber}</p>
        </div>
    )

}
export default Parameter;