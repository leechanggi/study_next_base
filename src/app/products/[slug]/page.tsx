import React from 'react';

type ProductsSlugPageProps = {
	params: {
		slug: string;
	};
};

export default function ProductsSlugPage(props: ProductsSlugPageProps) {
	const { params } = props;
	return <div>ProductsSlugPage : {params.slug}</div>;
}

export function generateStaticParams() {
	const params = ['shirts', 'shoes'];
	return params.map(slug => ({ params: { slug } }));
}
