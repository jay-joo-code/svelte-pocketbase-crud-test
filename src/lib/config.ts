interface IPublicNav {
	path: string;
	label: string;
}

export const APP_NAME = 'Cornlet';
export const PUBLIC_NAVS: IPublicNav[] = [
	{
		label: 'About',
		path: '/about'
	},
	{
		label: 'Blog',
		path: '/blog'
	}
];
