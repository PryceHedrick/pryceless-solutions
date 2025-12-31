import Button from './Button';

const PackageCard = ({
  name,
  price,
  bestFor,
  includes = [],
  notIncluded = [],
  isPopular = false,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  className = ''
}) => {
  return (
    <div className={`relative card ${isPopular ? 'border-2 border-accent shadow-lg' : ''} ${className}`}>
      {isPopular && (
        <div className="badge-popular">Most Popular</div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-primary-dark mb-2">{name}</h3>
        <div className="text-3xl font-bold text-accent mb-2">{price}</div>
        {bestFor && (
          <p className="text-sm text-medium-gray">Best for: {bestFor}</p>
        )}
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-primary-dark mb-3 uppercase tracking-wide">
          Includes:
        </p>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-dark-gray text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {notIncluded.length > 0 && (
        <div className="mb-6 pt-4 border-t border-light-gray">
          <p className="text-sm font-semibold text-medium-gray mb-3 uppercase tracking-wide">
            Not included:
          </p>
          <ul className="space-y-2">
            {notIncluded.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg className="w-5 h-5 text-medium-gray flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-medium-gray text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        to={ctaLink}
        variant={isPopular ? 'primary' : 'secondary'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default PackageCard;
