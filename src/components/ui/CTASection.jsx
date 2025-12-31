import Button from './Button';

const CTASection = ({
  headline,
  subtext,
  primaryCta,
  primaryCtaLink = '/contact',
  secondaryCta,
  secondaryCtaLink,
  badges = [],
  variant = 'light',
  className = ''
}) => {
  const variants = {
    light: 'bg-off-white',
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
  };

  const textColor = variant === 'light' ? 'text-primary-dark' : 'text-white';
  const subtextColor = variant === 'light' ? 'text-medium-gray' : 'text-white/80';

  return (
    <section className={`section-padding ${variants[variant]} ${className}`}>
      <div className="section-container text-center">
        <h2 className={`section-heading ${textColor}`}>{headline}</h2>

        {subtext && (
          <p className={`section-subheading mx-auto mb-8 ${subtextColor}`}>
            {subtext}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            to={primaryCtaLink}
            variant={variant === 'light' ? 'primary' : 'outline-white'}
            size="lg"
          >
            {primaryCta}
          </Button>

          {secondaryCta && (
            <Button
              to={secondaryCtaLink}
              variant={variant === 'light' ? 'outline' : 'ghost'}
              size="lg"
              className={variant !== 'light' ? 'text-white hover:bg-white/10' : ''}
            >
              {secondaryCta}
            </Button>
          )}
        </div>

        {badges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {badges.map((badge, index) => (
              <span
                key={index}
                className={`trust-badge ${variant !== 'light' ? 'bg-white/10 text-white' : ''}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
