/* eslint-disable react/prop-types */
const StatisticsItem = (props) => {
  const { icon, title, invoice, money, progressValue, colorCode } = props;
  return (
    <>
      <div className="flex items-center w-40 py-3 md:w-64 md:border-r-2 md:border-dotted">
        <div
          className="radial-progress text-primary w-14 h-14 mr-6"
          style={{
            "--value": progressValue,
            "--thickness": ".3rem",
            color: colorCode,
          }}
        >
          {icon}
        </div>
        <div className="text-start">
          <h4 className="text-xl font-bold">{title}</h4>
          <p className="text-[#8A959F]">
            <span className="text-black font-medium">{invoice}</span> invoices
          </p>
          <p style={{ color: colorCode }} className="font-medium">
            ${money}
          </p>
        </div>
      </div>
    </>
  );
};

export default StatisticsItem;
