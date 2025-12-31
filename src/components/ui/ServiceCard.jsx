import { Link } from 'react-router-dom';

const ServiceCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  price,
  link,
  className = ''
}) => {
  return (
    <div className={`card-hover group ${className}`}>
      <div className="feature-icon mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6" />
      </div>

      <div className="mb-2">
        <span className="text-sm font-semibold text-accent uppercase tracking-wide">
          {tagline}
        </span>
      </div>

      <h3 className="text-xl font-bold text-primary-dark mb-3">{title}</h3>

      <p className="text-medium-gray mb-4">{description}</p>

      {price && (
        <p className="text-lg font-semibold text-primary mb-4">
          Starting at {price}
        </p>
      )}

      {link && (
        <Link
          to={link}
          className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group-hover:translate-x-1 duration-300"
        >
          Learn more
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
