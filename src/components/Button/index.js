import Button from './Button';

export default Button;
export const PrimaryButton = (props) => <Button {...props} type='primary' />;
export const SecondaryButton = (props) => (
	<Button {...props} type='secondary' />
);
export const DangerButton = (props) => <Button {...props} type='danger' />;
export const SuccessButton = (props) => <Button {...props} type='success' />;
export const WarningButton = (props) => <Button {...props} type='warning' />;
export const InfoButton = (props) => <Button {...props} type='info' />;
export const LightButton = (props) => <Button {...props} type='light' />;
export const DarkButton = (props) => <Button {...props} type='dark' />;
export const LinkButton = (props) => <Button {...props} type='link' />;
export const OutlineButton = (props) => <Button {...props} type='outline' />;
export const OutlinePrimaryButton = (props) => (
	<Button {...props} type='outline-primary' />
);
export const OutlineSecondaryButton = (props) => (
	<Button {...props} type='outline-secondary' />
);
export const OutlineDangerButton = (props) => (
	<Button {...props} type='outline-danger' />
);
export const OutlineSuccessButton = (props) => (
	<Button {...props} type='outline-success' />
);
export const OutlineWarningButton = (props) => (
	<Button {...props} type='outline-warning' />
);
export const OutlineInfoButton = (props) => (
	<Button {...props} type='outline-info' />
);
export const OutlineLightButton = (props) => (
	<Button {...props} type='outline-light' />
);
export const OutlineDarkButton = (props) => (
	<Button {...props} type='outline-dark' />
);
export const OutlineLinkButton = (props) => (
	<Button {...props} type='outline-link' />
);

export const ButtonBlock = (props) => <Button {...props} type='block' />;
