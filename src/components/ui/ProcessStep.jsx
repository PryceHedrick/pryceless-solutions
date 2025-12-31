const ProcessStep = ({
  number,
  title,
  description,
  timeline,
  isLast = false,
  className = ''
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="step-number">{number}</div>
        {!isLast && (
          <div className="w-0.5 h-full bg-light-gray mt-2" />
        )}
      </div>

      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-primary-dark">{title}</h3>
          {timeline && (
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {timeline}
            </span>
          )}
        </div>
        <p className="text-medium-gray">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
