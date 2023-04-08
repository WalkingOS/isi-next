import type {ReactNode} from 'react';

type Tag = 'main' | 'div' | 'article' | 'footer' | 'header';

const MaxWidthWrapper = ({className, type, children}: {className?: string; type?: Tag; children: ReactNode}) => {
	const ElementType = type || 'div';

	return <ElementType className={`${className}`}>{children}</ElementType>;
};

export default MaxWidthWrapper;
