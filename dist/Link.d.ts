import { LinkProps as AriaLinkProps } from 'react-aria-components';
import { default as React } from 'react';

interface LinkProps extends AriaLinkProps {
    variant?: 'primary' | 'secondary';
}
export declare function Link(props: LinkProps): React.JSX.Element;
export {};
